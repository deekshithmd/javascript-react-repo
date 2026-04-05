import { NotificationProvider } from "./NotificationProvider";
import { NotificationsContainer } from "./NotificationsContainer";

export const Notifications = () => {

    return (
        <NotificationProvider>
            <NotificationsContainer position="bottom-right" />
        </NotificationProvider>

    )
}