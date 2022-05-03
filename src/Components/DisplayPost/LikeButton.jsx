import "./LikeButton.css";
import React, { useState } from "react";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';



const Buttons = (props) => {
  const [like, setLike] = useState("inactive");
  const [dislike, setDislike] = useState("inactive");

  function likeClick() {
    if (dislike === "inactive" && like === "inactive") {
      setLike("active-like");
    } else if (dislike === "active-dislike" && like === "inactive") {
      setLike("active-like");
      setDislike("inactive");
    } else {
      setLike("inactive");
    }
  }
  function dislikeClick() {
      if (like === 'inactive' && dislike === 'inactive') {
          setDislike('active-dislike')
      }
      else if (like === 'active-like' && dislike === 'inactive'){
          setDislike("active-dislike")
          setLike("inactive")
      }
      else {
          setDislike("inactive")
      }
  }

  return (
    <div className="post-buttons">
      <div>
        <button className={like} onClick={() => likeClick()}><ThumbUpIcon/>
        </button>
      </div>
      <div>
        <button className={dislike} onClick={() => dislikeClick()}><ThumbDownIcon/></button>
      </div>
    </div>
  );
};

export default Buttons;