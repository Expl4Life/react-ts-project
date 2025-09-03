import React from 'react';

import { useCounter } from '@/hooks/useCounter';

const Counter: React.FC = () => {
    const { count, increment, decrement, reset } = useCounter(0);

    return (
        <div className="counter">
            <h2>Счетчик</h2>
            <div className="counter-display">
                <span className="count-value">{count}</span>
            </div>
            <div className="counter-controls">
                <button onClick={decrement} className="btn btn-secondary">
                    -1
                </button>
                <button onClick={reset} className="btn btn-outline">
                    Сброс
                </button>
                <button onClick={increment} className="btn btn-primary">
                    +1
                </button>
            </div>
        </div>
    );
};

export default Counter;
