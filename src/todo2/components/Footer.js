import { Checkbox, Button } from "antd";

function Footer({ todos, checkAllTodo, clearDoneTodo }) {
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        {
          <>
            <Checkbox
              onChange={() => checkAllTodo()} checked={todos.filter(item => item.isDone).length === todos.length ? true : false} >全选
            </Checkbox>
            <Button type="danger" onClick={() => clearDoneTodo()} >清除已完成</Button>
          </>
        }
      </div>
      <div>任务数量：{todos.length}</div>
      <div>已完成：{todos.filter(item => item.isDone).length}</div>
      {/* <div>已完成：{todos.reduce((prev, todo) => prev + (todo.isDone ? 1 : 0), 0)}</div> */}
      <div>未完成：{todos.filter(item => !item.isDone).length}</div>
    </>
  )
}

export default Footer