// 1.定义默认数据
const initialState = {
  count: 0
}

// 2.导出一个函数
export default (state = initialState, { type, payload }) => {
  // switch (type) {

  // case first:
  //   return { ...state, ...payload }

  // default:
  //   return state
  // }
  return state
}
