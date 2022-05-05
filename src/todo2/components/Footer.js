import { Checkbox, Button } from "antd";

export default function Footer({ todos, checkAllTodo, removeCheckedTodo }) {
  return (
    <>
      <div style={{display: 'flex', justifyContent: 'space-between'}}>{
        <>
          <Checkbox onChange={() => checkAllTodo()} checked={todos.filter(item => item.isDone).length === todos.length ? true : false} >全选</Checkbox>
          <Button type="danger" onClick={() => removeCheckedTodo()} >删除选中</Button>
        </>
      }</div>
      <div>任务数量：{todos.length}</div>
      <div>已完成：{todos.filter(item => item.isDone).length}</div>
      <div>未完成：{todos.filter(item => !item.isDone).length}</div>
    </>
  )
}