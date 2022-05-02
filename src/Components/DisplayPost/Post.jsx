const Post = (props) => {

    const [posts, setPosts] = useState([{name: 'Mike Nevius', post: 'What a wonderful day to go ride a bike'}, {name: 'John Barnes', post: 'Today is the day I become Optimus Prime for real!'}])
    function addNewPost(post){
        let tempPost = [...posts, post]
        
        setPost(tempPost);
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