import { List, Button, Checkbox } from "antd";

export default function TodoItem({ item, index, removeTodo, handleCheckboxChange }) {
  return (
    <List.Item >
      <div>
        <p>
          <Checkbox onChange={() => handleCheckboxChange(index)}  checked={item.isDone ? true : false} />&nbsp;&nbsp;
          <span className={item.isDone ? 'isDone' : ''}>{item.name}</span>
        </p>
        {/* <p>添加时间：{item.date.toString()}</p> */}
      </div>
      <Button type="danger" onClick={() => removeTodo(index)} >delete</Button>
    </List.Item>
  )
}