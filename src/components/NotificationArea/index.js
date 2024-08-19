/* eslint-disable no-unused-vars */
import React, { useRef, useCallback } from 'react'

import { removeNotification, callback } from '../../'

const NotificationArea = (props) => {
  const {
    notifications,
    types,
    areaId = 'notification-area',
    render,
    dispatch
  } = props
  // const containerRef = (useRef < HTMLDivElement) | (null > null)
  // const [gotRef, markRefPresence] = React.useState(false)

  // Sets the container's ref, only when areaId was not provided
  // and the ref hasn't been already set
  // const refSetter = useCallback((node) => {
  //   if (areaId && !containerRef.current && node) {
  //     containerRef.current = node
  //     markRefPresence(true)
  //   }
  // }, [])

  const closeNotification = React.useCallback(
    (id) => {
      id && dispatch(removeNotification(id))
    },
    [dispatch]
  )

  const renderedNotifications = React.useMemo(() => {
      return notifications
        .filter((n) => {
          if (types?.length && n.type) return types.includes(n.type)
          else return true
        })
        .map((notification, i) => {
          const buttons = notification.actions?.map((action, i) => {
            const buttonAction = () => {
              dispatch(
                callback(action.callback, notification.id, action.payload)
              )
            }
            return {
              label: action.label,
              onClick: buttonAction
            }
          })

          return render({
            key: i,
            buttons,
            onClose: () => closeNotification(notification.id),
            message: notification.message,
            type: notification.type
          })
        })
  }, [notifications])

  const style = {
    position: "absolute",
    bottom: 0,
    right: 0,
    maxHeight: "100%",
    maxWidth: "100%",
    flexDirection: "column-reverse",
  }

  return (
    <div style={style} id={areaId} className='notification-area f aie'>
      {renderedNotifications}
    </div>
  )
}

export default NotificationArea
