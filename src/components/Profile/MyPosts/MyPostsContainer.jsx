import React from "react";
import MyPosts from "./MyPosts";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import StoreContext from "../../../StoreContext"

const MyPostsContainer = (props) => {
  

  return (
    <StoreContext.Consumer>
        { (store) => {
            let state= props.store.getState()
            let addPost = () => {
                store.dispatch(addPostActionCreator());
            }
          
            let onPostChange = (text) => {
                let action = updateNewPostTextActionCreator(text)
                store.dispatch(action);
          
            }
            return <MyPosts updateNewpostText={onPostChange} 
                    addPost={addPost}
                    post= {store.getState().profilePage.posts} 
                    newPostText={store.getState().profilePage.newPostText} />}
            }
    </StoreContext.Consumer>
    )
}

  

export default MyPostsContainer;
