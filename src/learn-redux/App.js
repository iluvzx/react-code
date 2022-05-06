// 1.安装所需redux框架：yarn add redux react-redux

// redux特点:
// 唯一数据源
// 数据向外界只提供可读性

import React, { Component } from 'react'
// 引入store，取出里面的数据
import store from './store'

import { increment, decrement } from '../learn-redux/store/actionCreator'

export default class App extends Component {
  constructor() {
    super()
    // 订阅redux
    this.state = store.getState()
    // 更新状态
    store.subscribe(() => this.setState(store.getState()))
  }
  render() {
    return (
      <>n 
        <button onClick={() => this.increment()}>+1</button>
        <span>{this.state.count}</span>
        <button onClick={() => this.decrement()} >-1</button>
      </>
    )
  }
  increment() {
    const action = increment()
    // 派发事件给reducer处理
    store.dispatch(action)
  }
  decrement() {
    const action = decrement() 
    store.dispatch(action)
  }
}
