import React, { Component } from 'react'

import { List } from 'antd'

import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import TodoItem from './components/TodoItem'

export default class App extends Component {
  state = {
    todos: [
      { id: 1, name: '吃饭', isDone: true, date: new Date() },
      { id: 2, name: '睡觉', isDone: false, date: new Date() },
      { id: 3, name: '写代码', isDone: true, date: new Date() },
      { id: 4, name: '弹吉他', isDone: false, date: new Date() },
    ],
    value: '',
    checkAll: false
  }
  render() {
    const { value, todos, checkAll } = this.state
    return (
      <div className="todo">
        <List
          size="large"
          header=
          {
            <Header
              value={value}
              handleInputChange={e => this.handleInputChange(e)}
              insertTodo={() => this.insertTodo()}
            />
          }
          footer={
            <Footer
              todos={todos}
              checkAllTodo={() => this.checkAllTodo()}
              checkAll={checkAll}
              removeCheckedTodo={() => this.removeCheckedTodo()}
            />
          }
          bordered
          dataSource={todos}
          renderItem={(item, index) => <TodoItem
            item={item}
            index={index}
            removeTodo={() => this.removeTodo(index)}
            handleCheckboxChange={() => this.handleCheckboxChange(index)}
          />}
        />
      </div>
    )
  }
  // 输入框改变
  handleInputChange(e) {
    const value = e.target.value
    this.setState({ value })
  }

  // 插入数据
  async insertTodo() {
    const obj = {
      name: this.state.value,
      idDone: false,
      date: new Date()
    }
    await this.setState({
      todos: [obj, ...this.state.todos],
      value: ''
    })
  }

  // 删除数据
  removeTodo(index) {
    this.setState({
      todos: this.state.todos.filter((_, indey) => indey !== index)
    })
  }

  // 多选框发生改变
  handleCheckboxChange(index) {
    const todos = [...this.state.todos]
    todos[index].isDone = !todos[index].isDone
    this.setState({
      todos
    })
  }

  // 全选
  checkAllTodo() {
    const todos = [...this.state.todos]
    let checkAll = !this.state.checkAll
    todos.map(item => item.isDone = checkAll)
    this.setState({
      todos,
      checkAll,
    })
  }

  // 删除选中
  removeCheckedTodo() {
    const todos = this.state.todos.filter(ele => !ele.isDone)
    this.setState({ todos })
  }
}