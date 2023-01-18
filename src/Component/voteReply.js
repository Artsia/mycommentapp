import './vote.css';
import React, { useState } from 'react';

function VoteReplyFour() {
    const [count, setCount] = useState(4);
    return (
        <div className='voteContainer'>

            <button className='btn'
                onClick={() => setCount(count + 1)}>+</button>
            <div className='display'>
                {count}
            </div>
            <button className='btn'
                onClick={() => setCount(count - 1)}>-</button>

        </div>
    )

}

export default VoteReplyFour;