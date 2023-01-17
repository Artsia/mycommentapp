import { Avatar, TextField, Button } from '@mui/material';
import './commentReply.css';
import VoteReplyFour from './voteReply';


/*ramailesa I couldn't agree more with this. Everything moves so fast and it always seems like
everyone knows the newwest library/ framework. but the fundementals are what stay constant.*/


function ReplyContainer() {
    return (
        <div className='three-Items-Container'>

            <VoteReplyFour 

            />

            <div className="two-Items-Container">

                <div className="two-item-space-betweencontainer">

                    <div className='four-items-space-evenly'>
                        <Avatar src='./images/avatars/image-ramsesmiron.png' alt="poster" />
                        <div className="names">ramsesmiron</div>
                        <div className="you">You</div>
                        <div className="date">1 week ago</div>
                    </div>

                    <div className="flex">

                        <div className='reply-Container'>
                            <Avatar src='./images/icon-edit.svg' alt='edit icon' />
                            <Button className='replyBtn'>Reply</Button>
                        </div>

                    </div>

                </div>

                <div className="txtField-container">
                    <TextField
                        className="txtField"
                        fullWidth
                        multiline
                        disabled
                        value="@juliusomo I couldn't agree more with this. Everything moves so fast and it always seems like
                        everyone knows the newwest library/ framework. but the fundementals are what stay constant.
                        "
                    />

                </div>
            </div>

        </div>

    )
}

export default ReplyContainer;