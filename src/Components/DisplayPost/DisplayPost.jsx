import React from 'react';
import Buttons from './LikeButton';
import './DisplayPost.css';



const DisplayPost = (props) => {



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

                            <Buttons />
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