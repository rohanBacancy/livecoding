import { useState } from 'react';
import './App.css';

function App() {

  const [likes,setLikes] = useState(100);
  const [liked,setLiked] = useState(false);
  const [disliked,setDisliked] = useState(false);
  const [disLikes,setDisLikes] = useState(25);

  const increaseLikes = () =>
  {
    if(liked)
    {
      setLikes(likes-1);
      setLiked(false);
    }
    else
    {
      setLikes(likes+1);
      setLiked(true);
      if(disliked)
      {
        setDisliked(false);
        setDisLikes(disLikes-1);
      }
      
    }
  }

  const increaseDisLikes = () =>
  {
    if(disliked)
    {
      setDisLikes(disLikes-1);
      setDisliked(false);
    }
    else
    {
      setDisLikes(disLikes+1);
      setDisliked(true);
      if(liked)
      {
        setLikes(likes-1);
        setLiked(false);
      }
      
    }
  }


  return (
    <div className="App">
      <h1>Live task</h1>
        <div>
            <span>{`Number of likes ${likes}`}</span>
        </div>
        <div>
            <span>{`Number of dislikes ${disLikes}`}</span>
        </div>
        <div>
          <button className={liked ? "like-button liked" : "like-button"} onClick={increaseLikes}>Like | {likes}</button>
          <button className={disliked ? "dislike-button disliked" : "dislike-button"} onClick={increaseDisLikes}>Dislike | {disLikes}</button>
        </div>
    </div>
  );
}

export default App;
