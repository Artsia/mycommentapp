import { Avatar, TextField, Button } from '@mui/material';
import './comment.css';
import Vote from './vote';


/*ramailesa I couldn't agree more with this. Everything moves so fast and it always seems like
everyone knows the newwest library/ framework. but the fundementals are what stay constant.*/


function Comment() {
    return (
        <div className='three-Items-Container'>

            <Vote />

            <div className="two-Items-Container">

                <div className="two-item-space-betweencontainer">

                    <div className='four-items-space-evenly'>
                        <Avatar src='./images/avatars/image-juliusomo.webp' alt="poster" />
                        <div className="names">@juliusomo</div>
                        <div className="you">You</div>
                        <div className="date">2 days ago</div>
                    </div>

                    <div className="flex">

                        <div className='del-Container'>
                            <Avatar src="./images/icon-delete.svg"
                                alt='delete icon'
                            />
                            <Button
                                className='delBtn'
                                sx={{
                                    color: 'red'
                                }}
                            >Delete</Button>
                        </div>

                        <div className='edit-Container'>
                            <Avatar src='./images/icon-edit.svg' alt='edit icon' />
                            <Button className='editBtn'>Edit</Button>
                        </div>


                    </div>

                </div>

                <div className="txtField-container">
                    <TextField
                        className="txtField"
                        fullWidth
                        multiline
                        disabled
                        value="@ramailesa I couldn't agree more with this. Everything moves so fast and it always seems like
                        everyone knows the newwest library/ framework. but the fundementals are what stay constant.
                        "
                    />

                </div>
            </div>

        </div>

    )
}

export default Comment;