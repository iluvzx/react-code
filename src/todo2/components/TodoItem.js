import { List, Button, Checkbox } from "antd";

function TodoItem({ item, index, removeTodo, handleCheckboxChange }) {
  return (
    <List.Item >
      <div>
        <p>
          <Checkbox onChange={() => handleCheckboxChange(index)} checked={item.isDone ? true : false} />&nbsp;&nbsp;
          <span className={item.isDone ? 'isDone' : ''}>{item.name}</span>
        </p>
      </div>
      <Button type="danger" onClick={() => removeTodo(index)} >删除</Button>
    </List.Item>
  )
}

export default TodoItem