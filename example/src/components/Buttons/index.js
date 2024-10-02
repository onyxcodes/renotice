import React from 'react'
import { useAppDispatch } from '../../hooks'
import { fetchExampleData, fetchFailingData } from '../../features/api'
import { createNotification } from 'renotice'

export const ApiButton = () => {
    const dispatch = useAppDispatch()

    const handleClick = React.useCallback(() => {
        dispatch(fetchExampleData())
    }, [dispatch])

    return <button onClick={handleClick}>Call fake api</button>
}

export const FailingApiButton = () => {
    const dispatch = useAppDispatch()

    const handleClick = React.useCallback(() => {
        dispatch(fetchFailingData())
    }, [dispatch])

    return <button onClick={handleClick}>Call failing api</button>
}

export const NotificationButton = () => {
    const dispatch = useAppDispatch()

    const handleClick = () => {
        dispatch(
            createNotification({
                id: 'trigger-notification',
                message: 'This is a basic notification!',
                type: 'success'
            })
        )
    }

    return <button onClick={handleClick}>Show Notification</button>
}
