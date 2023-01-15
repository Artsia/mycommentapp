import './body.css';

import React, { useState, useRef } from 'react';
// eslint-disable-next-line 
import Card from '@mui/material/Card';
// eslint-disable-next-line 
import Avatar from '@mui/material/Avatar';
// eslint-disable-next-line 
import TextField from '@mui/material/TextField';
// eslint-disable-next-line 
import Button from '@mui/material/Button';
// eslint-disable-next-line 
import Input from "@mui/material/Input";



/**Convert json to javascript object 
let db =  '../DataBase/data.json';
let preDefinedComments = JSON.parse(db);
let contentOne = preDefinedComments.comments[0].content;
console.log(contentOne)*/




function CreateCard() {
    const inputRef = useRef(null);
    const [comments, setComments] = useState([]);

    let [count, setCount] = useState(0);
    const upDowntTextFieldRef = useRef(null);

    /* const oneMinuteAgoRef = useRef(null);
     let [time, setTime] = useRef(null);*/

    // eslint-disable-next-line

    const increaseCount = () => {
        setCount(count, upDowntTextFieldRef.current.value);
        upDowntTextFieldRef.current.value = count + 1;

    }

    const decreaseCount = () => {
        /*if (upDowntTextFieldRef.current.value === 0) {
            setCount(count, upDowntTextFieldRef.current.value);
            upDowntTextFieldRef.current.value = count - 1;
        }*/

        setCount(count, upDowntTextFieldRef.current.value);
        count = upDowntTextFieldRef.current.value;
        upDowntTextFieldRef.current.value = count - 1;
    }


    /*const updateTime = () => {
       setTime(time,oneMinuteAgoRef.current.value);
        /*moment().endOf('day').fromNow(); 
    }*/


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
                <Card key={index} className="newPost" >

                    <Card className="UpDown-vote">
                        <Button
                            variant="text"
                            onClick={() => increaseCount()}
                            sx={{ height: 75 }}
                        >
                            +
                        </Button>

                        <TextField
                            value={0}
                            sx={{ width: 75 }}
                            ref={upDowntTextFieldRef}
                        />

                        <Button
                            variant="text"
                            onClick={() => decreaseCount()}
                            sx={{ height: 75 }}
                        >
                            -
                        </Button>

                    </Card>

                    <Card className="delete-edit-you-txtfield-container">
                        <Card className="delete-edit-you-container">
                            <Avatar
                                src=''
                                alt=''
                                className="space-element"
                            />

                            <Button
                                variant="contained"
                            >YOU
                            </Button>

                            <Button
                                className="space-element"
                                variant="contained"
                                onClick={() => removeComment(index)}>
                                Delete
                            </Button>

                            <Button
                                className="space-element"
                                variant="contained"
                                onClick={() => editComment(index, prompt('New Comment'))}>
                                Edit
                            </Button>
                        </Card>

                        <Card className="txtfield-container">
                            <TextField className="new-TextField"
                                value={comment}
                                variant="outlined"
                               
                                fullWidth
                                InputProps={{
                                    readOnly: true
                                }}
                            />
                        </Card>

                    </Card>


                </Card>
            ))}

            <Card className="center-Wrapper">
                <Card className="Wrapper">
                    <Avatar
                        src=''
                        alt="avatar"
                        className="space-element"

                    />

                    <TextField
                        className="space-element"
                        id='posttxtfield'
                        placeholder="Add a comment"
                        inputRef={inputRef}
                        variant="outlined"
                        multiline
                        sx={{ width: 300 }}
                       
                    />

                    <Button
                        className="space-element"
                        variant="contained"
                        onClick={addComment}>
                        Post
                    </Button>
                </Card>
            </Card>
        </Card>
    )
}

export default CreateCard;
