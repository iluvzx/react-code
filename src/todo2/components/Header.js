import { Input } from "antd";

export default function Header({ value, handleInputChange, insertTodo }) {
  return (
    <Input

      placeholder="What are you doing today?"
      value={value}
      onChange={e => handleInputChange(e)}
      onPressEnter={e => insertTodo()}

    />
  )
}