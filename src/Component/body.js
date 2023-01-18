import './body.css';
import './vote.css';
import C from './comment';
import R from './commentReply';

import React, { useState, useRef } from 'react';
// eslint-disable-next-line 
import Card from '@mui/material/Card';
// eslint-disable-next-line 
import Avatar from '@mui/material/Avatar';
// eslint-disable-next-line 
import TextField from '@mui/material/TextField';
// eslint-disable-next-line 
import Button from '@mui/material/Button';

function CreateCard() {
    const inputRef = useRef(null);
    const [comments, setComments] = useState([]);
    let [count, setCount] = useState(0);

    const addComment = () => {
        setComments([...comments, inputRef.current.value]);
        inputRef.current.value = '';
    }


    const removeComment = (index) => {
        setComments(comments.filter((_, i) => i !== index));
    }

    const editComment = (index, newText) => {
        const newComments = [...comments];
        newComments[index] = newText;
        setComments(newComments);

    }



    return (
        <Card className="center-Wrapper-Dell-Edit-Card">
            {comments.map((comment, index) => (
                <div key={index} className="newPost" >

                    <div className="voteContainer">
                        {/**section uses comment.css file style class */}
                        <button
                            className='btn'
                            variant="text"
                            onClick={() => setCount(count + 1)}

                        >
                            +
                        </button>

                        <div className='display'>{count}</div>

                        <button
                            className='btn'
                            variant="text"
                            onClick={() => setCount(count - 1)}

                        >
                            -
                        </button>

                    </div>

                    <div className="delete-edit-you-txtfield-container">
                        <div className="delete-edit-you-container">
                            <div className="four-items-space-evenly ">
                                <Avatar src='./images/avatars/image-maxblagun.png' alt="poster" />
                                <div className="names">maxblagun</div>
                                <div className="you">You</div>
                                <div className="date">2 weeks ago</div>
                            </div>

                            <div className="flex">

                                <div className='del-Container'>
                                    <Avatar src="./images/icon-delete.svg"
                                        alt='delete icon'
                                    />
                                    <Button
                                        className='delBtn'
                                        variant="text"
                                        sx={{
                                            color: 'red'
                                        }}
                                        onClick={() => removeComment(index)}>
                                        Delete
                                    </Button>
                                    {/**implement the delete alert before deleting comment */}
                                </div>

                                <div className='edit-Container'>
                                    <Avatar src='./images/icon-edit.svg' alt='edit icon' />

                                    <Button
                                        className='editBtn'
                                        variant="text"
                                        onClick={
                                            () => editComment(index, prompt("Enter Text"))
                                        }>
                                        {/** onClick={() => editComment(index, editCommentContainerUseRef)}>  prompt() */}
                                        Edit
                                    </Button>
                                </div>
                            </div>
                        </div>

                        <div className="txtfield-container" >
                            <TextField className="new-TextField"
                                value={comment}
                                variant="outlined"
                                fullWidth
                                InputProps={{
                                    readOnly: true
                                }}
                            />
                        </div>

                        {/**display content when user clicks edit btn:here 

                        <div className="editCommentContainer" ref={editCommentContainerUseRef}>

                        </div>*/}

                    </div>
                </div>
            ))}

            <div className="center-Wrapper">


                <C />

                <R />
                
                <C />

                {/**put component design copy */}

                <div className="Wrapper">
                    <Avatar
                        src=''
                        alt="avatar"
                    />

                    <input
                        className="wrapperInput"
                        id='posttxtfield'
                        placeholder="Add a comment"
                        ref={inputRef}
                    />

                    <Button

                        variant="contained"
                        onClick={addComment}>
                        SEND
                    </Button>
                </div>
            </div>
        </Card>
    )
}

export default CreateCard;
