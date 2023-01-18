import './vote.css';
import React, { useState } from 'react';

function VoteReplyFour() {
    const [countf, setCountf] = useState(4);
    return (
        <div className='voteContainer'>

            <button className='btn'
                onClick={() => setCountf(countf + 1)}>+</button>
            <div className='display'>
                {countf}
            </div>
            <button className='btn'
                onClick={() => setCountf(countf - 1)}>-</button>

        </div>
    )

}

export default VoteReplyFour;