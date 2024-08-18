import React from 'react';
import { useDispatch } from 'react-redux';
import { Button } from "alenite-design"
import {createNotification} from "renotice"

const NotificationButton: React.FC = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(createNotification({ id: "trigger-notification", message: 'This is a basic notification!', type: 'success' }));
  };

  return <Button onClick={handleClick}>Show Notification</Button>;
};

export default NotificationButton;