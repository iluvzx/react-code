import { Checkbox } from "antd";

export default function Footer({ todos, checkAllTodo }) {
  return (
    <>
      <div>{<Checkbox onChange={() => checkAllTodo()} checked={todos.filter(item => item.isDone).length === todos.length ? true : false} >全选</Checkbox>}</div>
      <div>任务数量：{todos.length}</div>
      <div>已完成：{todos.filter(item => item.isDone).length}</div>
      <div>未完成：{todos.filter(item => !item.isDone).length}</div>
    </>
  )
}