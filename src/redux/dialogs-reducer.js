const SEND_MESSAGE = 'SEND-MESSAGE'

let initialState = {
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
    {id: 2, message: '))'},
    {id: 3, message: 'ss'},
    {id: 4, message: 'мяу'},
    {id: 5, message: 'гав'}
  ]
}

const dialogsReducer = (state = initialState, action) => {
  switch(action.type) {
    case SEND_MESSAGE: {
      let body = action.newMessageBody
      return {
        ...state,
        messages: [...state.messages, {id: 6, message: body}]
      }
    }
    default:
      return state
  }
}

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody})

export default dialogsReducer

  