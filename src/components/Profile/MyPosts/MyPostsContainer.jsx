import React from "react";
import MyPosts from "./MyPosts";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";


const MyPostsContainer = (props) => {

  let state= props.store.getState()
  debugger
  
  let addPost = () => {
      props.store.dispatch(addPostActionCreator());
  }

  let onPostChange = (text) => {
      let action = updateNewPostTextActionCreator(text)
      props.store.dispatch(action);

  }
  return (<MyPosts updateNewpostText={onPostChange} 
    addPost={addPost}
    post= {state.profilePage.posts} 
    newPostText={state.profilePage.newPostText} />)
}

  

export default MyPostsContainer;
