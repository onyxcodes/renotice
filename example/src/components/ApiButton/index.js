import React from 'react'
import { useAppDispatch } from '../../hooks'
import { fetchExampleData } from '../../features/api';
const ApiButton = () => {
    const dispatch = useAppDispatch();

    const handleClick = React.useCallback(() => {
        dispatch(fetchExampleData())
    },[dispatch])

    return <button onClick={handleClick}>Call fake api</button>
}

export default ApiButton;