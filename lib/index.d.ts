/// <reference types="react" />
export declare namespace Notifier {
    type NotificationType = 'info' | 'pending' | 'warning' | 'prompt' | 'error' | 'debug' | string;
    type NotificationObject = {
        id?: string;
        active?: boolean;
        type?: NotificationType;
        message?: string;
        actions?: {
            label: string;
            payload?: {
                [key: string]: any;
            };
            callback: string;
        }[];
        clearable?: boolean;
        timeout?: number;
        timestamp?: EpochTimeStamp;
    };
    interface NewNotificationObject extends NotificationObject {
        id: string;
        message: string;
    }
    interface UpdatedNotificationObject extends NotificationObject {
        id: string;
    }
    interface NotificationElementProps extends NotificationObject {
        areaId?: string;
        alert?: JSX.Element;
        showIcon?: boolean;
        buttons?: JSX.Element[];
        onClose?: () => void;
        showElapsedTime?: boolean;
        closeOnAction?: boolean;
        iconMapping?: (type: string) => JSX.Element | undefined;
    }
    type NotificationElement<P extends NotificationElementProps = NotificationElementProps> = React.VFC<P>;
}
export { default as notificationsMiddleware } from './utils/middleware';
export { default as NotificationArea } from './components/NotificationArea';
export { default as NotificationElement } from './components/NotificationElement';
export { default as notifications } from "./utils/notifications";
export * from './utils/notifications';
export * from './utils/middleware';
export { default as ReactFromModule } from 'react';
