import './vote.css';
import React, { useState } from 'react';

function Vote() {
    const [count, setCount] = useState(2);
    return (
        <div className='container'>

            <button
                className='btn'
                onClick={() => setCount(count + 1)}
            >+</button>
            <div className='display'>
                {count}
            </div>
            <button
                className='btn'
                onClick={() => setCount(count - 1)}>-</button>

        </div>
    )

}

export default Vote;