import React from 'react'

import { NotificationArea } from 'renotice'
import { useAppDispatch, useAppSelector } from './hooks'
import {BasicNotificationBtn, ApiButton, FailingApiButton, WithActionButton} from './components/Buttons'

const App = () => {
  const dispatch = useAppDispatch()
  const notifications = useAppSelector(s => s.notifications)
  return <>
    <h1>Renotice Example</h1>
    <div style={{display: "flex", flexDirection:"row", gap: 5, padding: 5}}>
      <BasicNotificationBtn />
      <ApiButton />
      <FailingApiButton />
      <WithActionButton />
    </div>
    <NotificationArea
      notifications={notifications}
      dispatch={dispatch}
      render={(notification) => {
        return <div key={notification.key}style={{border: "1px solid black", padding: "10px", margin: "10px", backgroundColor: "lightgrey"}}>
          <h3>{notification.message}</h3>
          <p>{notification.type}</p>
          <div style={{display: "flex", flexDirection:"row", gap: 3, padding: 3, justifyContent: "end"}}>
            {notification.buttons.map( (button, i) => {
              return <button key={`renotice-btn-${i}`} onClick={button.onClick}>{button.label}</button>
            })}
          </div>
          <button onClick={notification.onClose}>X</button>
        </div>
      }}
    />
  </>
}

export default App
