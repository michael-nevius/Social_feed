import React, { useState } from 'react';



const CreatePost = (props) => {

    const [name, setName] = useState('');
    const [post, setPost] = useState('');

    function handleCreatePost(event) {
        event.preventDefault();
        let newPost = {
            name: name,
            post: post,
        }
        props.addNewPostProperty(newPost)
    }


    return ( 
        <form onSubmit={handleCreatePost} className='form-grid'>
            <div className='form-group'>
                <label>Name</label>
                <input type='number' className='form-control' value={name} onChange={(event) => setName(event.target.value)} />
            </div>
            <div className='form-group'>
                <label>Post</label>
                <input type='date' className='form-control' value={post} onChange={(event) => setPost(event.target.value)} />
            </div>
            <button type='submit' className='btn btn-primary' style={{'margin-top': '1em'}}>Add</button>
        </form>
     );
}
 
export default CreatePost;