import { forwardRef } from "react"

export const Note = forwardRef(({ note, position, ...props }, ref) => {
    return (
        <div
            ref={ref}
            style={{
                position: 'absolute',
                left: `${position?.x}px`,
                top: `${position?.y}px`,
                border: '1px solid black',
                userSelect: 'none',
                padding: '10px',
                width: '200px',
                cursor: 'move',
                backgroundColor: 'lightyellow'
            }}
            {...props}
        >
            📌{note}
        </div>
    )
})