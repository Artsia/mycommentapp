import './vote.css';
import React, { useState } from 'react';

function Vote() {
    const [countT, setCountT] = useState(2);
    return (
        <div className='container'>

            <button
                className='btn'
                onClick={() => setCountT(countT + 1)}
            >+</button>
            <div className='display'>
                {countT}
            </div>
            <button
                className='btn'
                onClick={() => setCountT(countT - 1)}>-</button>

        </div>
    )

}

export default Vote;