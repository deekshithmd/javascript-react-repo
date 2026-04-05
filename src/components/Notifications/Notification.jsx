export const NOTIFICATION_STYLES = {
    success: {
        backgroundColor: "green",
        color: "white",
    },
    error: {
        backgroundColor: "red",
        color: "white",
    },
    warning: {
        backgroundColor: "yellow",
        color: "black",
    },
    info: {
        backgroundColor: "blue",
        color: "white",
    },
};

export const Notification = ({ data, handleClose }) => {
    return (
        <div
            style={{
                color: NOTIFICATION_STYLES[data?.type]?.color,
                backgroundColor: NOTIFICATION_STYLES[data?.type]?.backgroundColor,
                border: "1px solid blue",
                padding: "10px",
                borderRadius: "5px",
                cursor: "pointer",
            }}
        >
            {data?.content + data?.id}
            <button onClick={() => handleClose(data?.id)}>X</button>
        </div>
    );
};
