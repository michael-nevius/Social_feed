import React, { useState } from 'react';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import Button from '@material-ui/core/Button';
import './DisplayPost.css';
const DisplayPost = (props) => {
const [countUp, setCountUp] = useState(0)
const [countDown, setCountDown] = useState(0)


    return(
        <div>
            <div>
            {props.parentPost.map((post, index) => {
                return(
                    <tr key={index}>
                        <div>
                            <td><b>{post.name}</b></td>
                        </div>
                        <br></br>
                        <div>
                            <td>{post.post}</td>
                            <Button onClick= {() => setCountUp(countUp + 1)}><ThumbUpIcon />{`${countUp === 0 ? '' : countUp}`}</Button><Button onClick={() => setCountDown(countDown + 1)}><ThumbDownIcon />{`${countDown === 0 ? '' : countDown}`}</Button>
                        </div>
                        <br></br>
                        <br></br>
                    </tr>
                    
                    
                );
            })}
            </div>
        </div>
    );
}

export default DisplayPost;