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
    // eslint-disable-next-line


   
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
                <Card key={index} className="newPost">
                    <Avatar
                        src=''
                        alt=''
                        className="space-element"
                    />

                    <TextField className="new-TextField"
                        value={comment}
                        variant="outlined"
                        multiline
                        fullWidth
                        InputProps={{
                            readOnly: true,
                        }}

                        sx={{ width: 200 }}
                    />

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
