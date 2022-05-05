import React, { Component } from 'react'
import './App.css'
import { List, Input } from 'antd'
import store from '../store/index'
import Header from './components/Header'

export default class App2 extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState()
    store.subscribe(() => this.setState(store.getState()))
  }
  render() {
    return (
      <div className="todo">
        <List
          size="large"
          header={<Header
            insertTodo={() => this.insertTodo()}
            handleInputChange={(e) => this.handleInputChange(e)}
          />}
          footer={<div>Footer</div>}
          bordered
        dataSource={this.state.todos}
        renderItem={item => {
          {
            if(this.state.flag) {
              return <List.Item onDoubleClick={() => this.changeinnerHTML()}>{item}</List.Item>
            } else {
              return <Input />
            }
          }
        }}
        />
      </div>
    )
  }
  // 插入数据
  insertTodo() {
    store.dispatch({
      type: 'insertTodo'
    })
  }

  // 处理输入框变化
  handleInputChange(e) {
    store.dispatch({
      type: 'handleInputChange',
      val: e.target.value
    })
  }
  changeinnerHTML() {
    store.dispatch({
      type: 'changeinnerHTML'
    })
  }
}
