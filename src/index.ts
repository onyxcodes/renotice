export namespace Notifier {
  // TODO: Consider changing name to Type or Category
  export type NotificationType =
    | 'info'
    | 'pending'
    | 'warning'
    | 'prompt'
    | 'error'
    | 'debug'
    | string

  export type NotificationObject = {
    id?: string
    active?: boolean
    type?: NotificationType
    message?: string
    actions?: {
      label: string
      payload?: { [key: string]: any }
      callback: string
    }[]
    clearable?: boolean
    timeout?: number
    timestamp?: EpochTimeStamp
  }

  // A new notification should at least contain a message
  export interface NewNotificationObject extends NotificationObject {
    id: string
    message: string
    // type: 'info' | 'pending' | 'warning' | 'prompt' | 'error' | 'debug';
  }

  // The usal purpose of the update notification object is to
  // update a already present notification's content
  export interface UpdatedNotificationObject extends NotificationObject {
    id: string
  }

  // TODO: Consider not extending NotificationObject
  // or omit the not-needed props:
  // actions
  // id (since the component rendering the notification will apply the key)
  // timeout (since the parent decides when to unmount the component)

  // TODO: Consider moving the icon mapping function to notificationArea,
  // since all notifications will use the same mapping
  // This would avoid having to create a component that returns a customized notification
  // while letting the notificationArea handle the customizations
  // i.e.: useNotifications( Component?: AlertType, iconMappingFn );
  // instead of useNotifications(MyCustomNotification)
  // What about both?
  export interface NotificationElementProps extends NotificationObject {
    // areaId determines in which area the notification will be mounted
    // I decided to specify this option at this (component) type
    // to allow different "types"/"category" of notifications to be
    // placed in separate spaces
    areaId?: string
    alert?: JSX.Element
    showIcon?: boolean
    buttons?: JSX.Element[]
    onClose?: () => void
    showElapsedTime?: boolean
    closeOnAction?: boolean
    iconMapping?: (type: string) => JSX.Element | undefined
  }

  export type NotificationElement<
    P extends NotificationElementProps = NotificationElementProps
  > = React.VFC<P>
}

// export { NotificationElement, NotificationArea }
// export {
//   createNotification,
//   clearNotifications,
//   updateNotification,
//   removeNotification,
//   loadNotifications,
//   callback
// }
// export { notifications, notificationsMiddleware }

export { default as notificationsMiddleware } from './middleware'
export { default as NotificationArea } from './components/NotificationArea'
export { default as NotificationElement } from './components/NotificationElement'
export * from './notifications'
