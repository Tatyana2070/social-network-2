import profileReducer, { addPostActionCreator } from "./profile-reducer";

test('new post should be added', () => {
  //1. исходные данные
  let action = addPostActionCreator('love')
  let state = {
    posts: [
      { id: 1, message: 'Привет, ты как?', likesCount: 19 },
      { id: 2, message: 'Я единорог', likesCount: 25 },
    ]
  }
  //2. action
  let newState = profileReducer(state, action)

  //3. проверяем ожидание
  expect(newState.posts.length).toBe(3)
});

