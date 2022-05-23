import React, {useState} from 'react';
import NavBar from '../NavBar/NavBar';
import CreatePost from '../CreatePost/CreatePost';
import DisplayPost from './DisplayPost';
import './DisplayPost.css';
import './Post.css';



const Post = (props) => {

    const [posts, setPosts] = useState([{name: 'John Barnes', post: 'Today is the day I become Optimus Prime for real!' , date: '11-30-2025'}])
    function addNewPost(post){
        let tempPost = [...posts, post]
        
        setPosts(tempPost);
    }
    return(
        <div>
            <div>
                <div>
                    <NavBar/>
                </div>
            </div>
            <div className='post-background'>
                <div>
                    <div className='post-border-box'>
                        <CreatePost addNewPostProperty={addNewPost}/>
                    </div>
                </div>
                <div>
                    <div className='post-border-box'>
                        <div className='table'>
                            <table>
                                <DisplayPost parentPost={posts}/>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Post;