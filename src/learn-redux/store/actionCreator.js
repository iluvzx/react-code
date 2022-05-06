// import { INCREMENT } from "./actionTypes"

export const increment = () => {
  return {
    type: 'increment',
    value: 1
  }
}

export const decrement = () => {
  return {
    type: 'decrement',
    value: -1
  }
}