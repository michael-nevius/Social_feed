import React, { useState } from 'react';
import CreatePost from './Components/CreatePost/CreatePost'
import './App.css'

function App() {

  const [posts, setPosts] = useState([{name: 'Mike Nevius', post: 'What a wonderful day to go ride a bike'}, {name: 'John Barnes', post: 'Today is the day I become Optimus Prime for real!'}])

  function addNewPost(post){
    let tempPosts = [ ...posts, post];
    setPosts(tempPosts);
  }

  return (
<div className='container-fluid'>
      <div className='row'>
        <h3 style={{margin: '1em'}}>Social
        <small className='text-muted'>Feed</small></h3>
        <div className='col-md-6'>
          <div className='border-box'>
            <DisplayPost parentEntries={entries} />
          </div>
          <div className='border-box'>
            <CreatePost addNewPostProperty={addNewPost} />
          </div>  
        </div>
        <div className='col-md-6'>
          <div className='border-box'>
            <EntriesChartTracker parentEntries={entries} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
