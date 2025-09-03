import { useState, useCallback } from 'react'

export interface UseCounterReturn {
    count: number
    increment: () => void
    decrement: () => void
    reset: () => void
    setValue: (value: number) => void
}

export const useCounter = (initialValue: number = 0): UseCounterReturn => {
    const [count, setCount] = useState(initialValue)

    const increment = useCallback(() => {
        setCount(prevCount => prevCount + 1)
    }, [])

    const decrement = useCallback(() => {
        setCount(prevCount => prevCount - 1)
    }, [])

    const reset = useCallback(() => {
        setCount(initialValue)
    }, [initialValue])

    const setValue = useCallback((value: number) => {
        setCount(value)
    }, [])

    return {
        count,
        increment,
        decrement,
        reset,
        setValue
    }
}