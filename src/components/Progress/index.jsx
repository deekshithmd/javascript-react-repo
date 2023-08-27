import React from "react";

export default function Progress() {
    const [progress, setProgress] = React.useState(0);
    const iRef = React.useRef(null);

    const handleProgress = () => {
        iRef.current = setInterval(() => {
            setProgress((prev) => prev + 1);
        }, 100);
    };

    React.useEffect(() => {
        if (progress === 100) {
            clearInterval(iRef.current);
        }
    }, [progress]);

    return (
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h1>Progress Bar</h1>
            <button onClick={() => handleProgress()}>Progress</button>
            <div
                style={{
                    width: "300px",
                    border: "1px solid black",
                    borderRadius: "15px",
                    height: "20px"
                }}
            >
                {/* {`${progress}%`} */}
                <div
                    style={{
                        height: "100%",
                        width: `${progress}%`,
                        background: "green",
                        borderRadius: "15px"
                    }}
                ></div>
            </div>
        </div>
    );
}
