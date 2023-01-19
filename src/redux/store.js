import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        {id: 1, message: 'Привет, ты как?', likesCount: 19},
        {id: 2, message: 'Я единорог', likesCount: 25},
      ],
      newPostText: ''
    },
    dialogsPage: {
      dialogs: [
        {id: 1, name: 'Даниил'},
        {id: 2, name: 'Екатерина'},
        {id: 3, name: 'Алиса'},
        {id: 4, name: 'Анастасия'},
        {id: 5, name: 'Савелий'},
        {id: 6, name: 'Дмитрий'}
      ],
      messages: [
        {id: 1, message: 'Привет!'},
        {id: 2, message: 'Хочу чоколадку'},
        {id: 3, message: 'Ты скоро устроишься на работу!!!'},
        {id: 4, message: 'мяу'},
        {id: 5, message: 'Это гиблое место, но пока здесь есть ты, я зову его мэджик ситиииии'}
      ],
      newMessageBody: ''
    },
    sidebar: {}
  },
  _callSubscriber() {
    console.log('HEY')
  },


  getState() {
    return this._state
  },
  subscribe(observer) {
    this._callSubscriber = observer
  },


  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
    this._state.sidebar = sidebarReducer(this._state.sidebar, action)
    this._callSubscriber(this._state)
  }
}



export default store
window.store = store