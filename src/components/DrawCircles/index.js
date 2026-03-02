import { useEffect, useState } from "react";

export const Circles = () => {
    const [circles, setCircles] = useState([
        {
            id: "left",
            width: 0,
            height: 0,
            x: 0,
            y: 0,
            startX: 0,
            startY: 0,
            backgroundColor: 'red'
        },
        {
            id: "right",
            width: 0,
            height: 0,
            x: 0,
            y: 0,
            startX: 0,
            startY: 0,
            backgroundColor: 'red'
        },
    ]);
    const [currentCircleId, setCurrentCircleId] = useState(null);

    const handleContextMenu = (e) => {
        e.preventDefault();
    };

    useEffect(() => {
        document.addEventListener("contextmenu", handleContextMenu);

        return () => document.removeEventListener("contextmenu", handleContextMenu);
    }, []);

    const checkOverlap = (rightCircle, leftCircle) => {
        const leftRadius = leftCircle.width / 2;
        const rightRadius = rightCircle.width / 2;

        const leftCenter = {
            x: leftCircle.x + leftRadius,
            y: leftCircle.y + leftRadius
        }

        const rightCenter = {
            x: rightCircle.x + rightRadius,
            y: rightCircle.y + rightRadius
        }

        const distance = Math.sqrt(Math.pow(rightCenter.x - leftCenter.x, 2) + Math.pow(rightCenter.y - leftCenter.y, 2))

        return distance < leftRadius + rightRadius;
    }

    const handleMouseDown = (e) => {
        const { button } = e;
        const currentId = button === 0 ? "left" : "right";
        setCurrentCircleId(currentId);

        setCircles(prev => prev.map(circle => {
            if (circle.id === currentId) {
                return { ...circle, startX: e.clientX, startY: e.clientY, width: 0, height: 0, x: 0, y: 0 }
            }
            return circle;
        })
        )
    };

    const handleMouseMove = (e) => {

        if (currentCircleId === null) {
            return
        }

        const updatedCircles = circles.map(circle => {
            if (currentCircleId === circle.id) {
                const distanceX = e.clientX - circle.startX;
                const distanceY = e.clientY - circle.startY;

                const size = Math.max(Math.abs(distanceX), Math.abs(distanceY));

                const newX = distanceX < 0 ? circle.startX - size : circle.startX;
                const newY = distanceY < 0 ? circle.startY - size : circle.startY;

                return {
                    ...circle,
                    width: size,
                    height: size,
                    x: newX,
                    y: newY
                }
            }
            return circle;
        })

        const doOverlap = checkOverlap(updatedCircles[0], updatedCircles[1])

        const newCircles = updatedCircles?.map(circle => {
            if (currentCircleId === circle.id) {
                return {
                    ...circle,
                    backgroundColor: doOverlap?'blue':'red'
                }
            }
            return circle
        })
        setCircles(newCircles)
    }

    const handleMouseUp = (e) => {
        setCurrentCircleId(null)
    }



    return (
        <div style={{ width: '100vw', height: '100vh', position: 'relative', border: '1px solid red' }} onMouseDown={handleMouseDown} onMouseMove={handleMouseMove} onMouseUp={handleMouseUp}>
            <h1>Draw circles</h1>
            {circles.map((circle) => {
                return (
                    <div
                        key={circle?.id}
                        style={{
                            width: `${circle.width}px`,
                            height: `${circle.height}px`,
                            position: "absolute",
                            top: `${circle.y}px`,
                            left: `${circle.x}px`,
                            background: `${circle.backgroundColor}`,
                            borderRadius: "50%",
                        }}
                    />
                );
            })}
        </div>
    );
}
