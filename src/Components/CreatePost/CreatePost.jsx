import React, { useState } from 'react';
import './AddEntryForm.css';

const AddPost = (props) => {

    const [name, setName] = useState(0);
    const [post, setPost] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        let newPost = {
            name: name,
            post: post
        }
        console.log(newPost)
        props.addNewPost(newPost)
    }


    return ( 
        <form onSubmit={handleSubmit} className='form-grid'>
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
 
export default AddPost;