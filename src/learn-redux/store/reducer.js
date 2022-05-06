// 1.定义默认数据
const initialState = {
  count: 0
}

// 2.导出一个函数
// state为默认的状态，将返回给store进行保存
// action是组建调用store中的dispatch方法，action是一个对象，这个对象有一个type属性，属性值为派发事件的名称

// eslint-disable-next-line 
export default (state = initialState, action) => {
  const newState = JSON.parse(JSON.stringify(state))
  switch (action.type) {
    case 'increment':
      return {
        count: state.count + 1
      }
    default:
      return newState
  }
}
