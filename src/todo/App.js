import React, { Component } from 'react'

// 引入组件
import { List } from 'antd'
import Header from './components/Header'
import Footer from './components/Footer'
import TodoItem from './components/TodoItem'

// 引入样式
import './App.css'

export default class App extends Component {
  state = {
    todos: [
      { id: 1, name: '吃饭', isDone: true, },
      { id: 2, name: '睡觉', isDone: false },
      { id: 3, name: '写代码', isDone: true },
      { id: 4, name: '弹吉他', isDone: false },
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
              clearDoneTodo={() => this.clearDoneTodo()}
            />
          }
          bordered
          dataSource={todos}
          renderItem={(todo, index) => <TodoItem
            item={todo}
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
  insertTodo() {
    const obj = {
      name: this.state.value,
      idDone: false,
    }
    this.setState({
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
    this.setState({ todos })
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

  // 清除已完成任务
  clearDoneTodo() {
    const todos = this.state.todos.filter(ele => !ele.isDone)
    this.setState({ todos })
  }

}