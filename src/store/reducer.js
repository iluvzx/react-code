const initialState = {
  count: 0,
  todos: ['todo1', 'todo2', 'todo3'],
  val: '',
  flag: true
}
// eslint-disable-next-line
export default (state = initialState, action) => {
  const newState = JSON.parse(JSON.stringify(state))
  switch (action.type) {
    case 'handleInputChange':
      newState.val = action.val
      break
    case 'changeinnerHTML':
     
      newState.flag = !newState.flag
      console.log(newState.flag)
      break
    case 'insertTodo':
      newState.todos.push(newState.val)
    // break
    default:
      return newState
  }
}