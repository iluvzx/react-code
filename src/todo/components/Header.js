import { Input } from "antd";
import PropTypes from 'prop-types'

function Header({ value, handleInputChange, insertTodo }) {
  return (
    <Input
      placeholder="你今天要做什么?"
      value={value}
      onChange={e => handleInputChange(e)}
      onPressEnter={() => insertTodo()}
    />
  )
}

Header.propTypes = {
  value: PropTypes.string,
  handleInputChange: PropTypes.func,
  insertTodo: PropTypes.func
}

export default Header