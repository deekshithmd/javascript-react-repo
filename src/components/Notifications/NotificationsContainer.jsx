import { Notification } from "./Notification";
import { useNotification } from "./NotificationProvider";

import "./style.css"

const POSITIONS = {
    'top-right': 'top-right-notifications',
    'bottom-right': 'bottom-right-notifications',
    'top-left': 'top-left-notifications',
    'bottom-left': 'bottom-left-notifications',
}

export const NotificationsContainer = ({ position = 'top-right' }) => {
    const { notifications, handleClose, triggerNotification } = useNotification()

    return (
        <>
            <div>
                <h1>Notifications</h1>
                <button onClick={() => triggerNotification({ type: 'error', content: 'Something went wrong' })}>Trigger Error</button>
                <button onClick={() => triggerNotification({ type: 'info', content: 'Something went wrong' })}>Trigger Info</button>
                <button onClick={() => triggerNotification({ type: 'success', content: 'Something went wrong' })}>Trigger Success</button>
                <button onClick={() => triggerNotification({ type: 'warning', content: 'Something went wrong' })}>Trigger Warning</button>
            </div>
            <div className={POSITIONS[position]} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {
                    notifications?.map((notification) => {
                        return (
                            <Notification key={notification?.id} data={notification} handleClose={handleClose} />
                        )
                    })
                }
            </div>
        </>

    )
}