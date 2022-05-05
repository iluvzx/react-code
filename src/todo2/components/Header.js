import { Input } from "antd";

export default function Header({ value, handleInputChange, insertTodo }) {
  return (
    <Input
      placeholder="你今天要做什么?"
      value={value}
      onChange={e => handleInputChange(e)}
      onPressEnter={() => insertTodo()}
    />
  )
}