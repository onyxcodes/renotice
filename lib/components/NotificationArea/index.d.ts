import React, { ReactElement } from 'react';
import './index.scss';
import { Notifier } from '../../';
type NotificationAreaElOpts = {
    element?: never;
    alert?: JSX.Element;
    iconMapping?: (type: string) => JSX.Element | undefined;
};
type NotificationAreaOpts = {
    element: ReactElement<Notifier.NotificationElementProps, any>;
    alert?: never;
    iconMapping?: never;
};
interface NotificationAreaProps {
    notifications: Notifier.NotificationObject[];
    types?: Notifier.NotificationType[];
    areaId?: string;
    options?: NotificationAreaElOpts | NotificationAreaOpts;
}
declare const NotificationArea: React.VFC<NotificationAreaProps>;
export default NotificationArea;
