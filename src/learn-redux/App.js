// 1.安装所需redux框架：yarn add redux react-redux

// redux特点:
// 1.唯一数据源
// 2.数据向外界只提供可读性

import React, { Component } from 'react'
// 引入store，取出里面的数据
import store from './store'

export default class App extends Component {
  constructor() {
    super()
    this.state = store.getState()
    store.subscribe(() => this.setState(store.getState()))
  }
  render() {
    return (
      <>
        <button onClick={() => this.increment()}>+1</button>
        <span>{this.state.count}</span>
        <button>-1</button>
      </>
    )
  }
  increment() {
    const action = {
      type: 'increment'
    }
    // 派发事件给reducer处理
    store.dispatch(action)
  }
}
