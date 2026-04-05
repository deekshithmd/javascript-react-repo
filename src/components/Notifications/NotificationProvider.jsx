import { createContext, useContext, useRef, useState } from 'react';

const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
    const [notifications, setNotifications] = useState([]);
    const notificationClearRefs = useRef([])

    const handleClose = (id) => {
        clearTimeout(notificationClearRefs.current.find(ref => ref.id === id)?.timerId)
        notificationClearRefs.current = notificationClearRefs.current.filter(ref => ref.id !== id)
        setNotifications(notifications => notifications?.filter(notification => notification?.id !== id))
    }

    const triggerNotification = ({ type, content, duration = 5000 }) => {
        const newNotification = {
            id: Date.now(),
            type,
            content,
            duration
        }
        setNotifications(prev => [...prev, newNotification])
        const timerId = setTimeout(() => handleClose(newNotification.id), duration)
        notificationClearRefs.current.push({ timerId, id: newNotification.id })
    }

    return (
        <NotificationContext.Provider value={{ notifications, triggerNotification, handleClose }}>
            {children}
        </NotificationContext.Provider>
    )
}

export const useNotification = () => useContext(NotificationContext)