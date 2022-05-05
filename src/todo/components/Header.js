import { Input } from "antd";
import store from "../../store";

export default function Header({ insertTodo, handleInputChange }) {
  const { val } = store.getState()
  return (
    <Input
      placeholder="你今天要做什么？"
      value={val}
      onChange={(e) => handleInputChange(e)}
      onPressEnter={() => insertTodo()}
    />
  )
}