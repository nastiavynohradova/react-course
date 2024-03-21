import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import { sidebarReducer } from "./sidebar-reducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hi, how are you?", likesCount: 12 },
        { id: 2, message: "It's my first post", likesCount: 10 },
        { id: 3, message: "Blala", likesCount: 20 },
      ],
      newPostText: "Write here",
    },
    dialogsPage: {
      messages: [
        { id: 1, message: "Hi" },
        { id: 2, message: "How are you?" },
        { id: 3, message: "What's up?" },
        { id: 4, message: "I am on vacation" },
      ],
      dialogs: [
        { id: 1, name: "Ihor" },
        { id: 2, name: "Iryna" },
        { id: 3, name: "Sasha" },
        { id: 4, name: "Katya" },
      ],
      newMessageBody: "",
    },
    sideBar: {
      friends: [
        { id: 1, name: "Ihor" },
        { id: 2, name: "Iryna" },
        { id: 3, name: "Sasha" },
        { id: 4, name: "Katya" },
      ],
    },
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  _callSubscriber() {
    console.log("State was changed");
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sideBar = sidebarReducer(this._state.sidebar, action);
    this._callSubscriber(this._state);
  },
};

export default store;

window.state = store;
