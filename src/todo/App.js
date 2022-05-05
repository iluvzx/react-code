import React from 'react';
import store from '../store';
import './App.css'

class App extends React.Component {
  constructor() {
    super()
    this.state = store.getState()
    store.subscribe(() => this.setState(store.getState()))
  }
  render() {
    return (
      <>
        <button onClick={() => this.changeNum('+')}>+</button>
        <span>{this.state.count}</span>
        <button onClick={() => this.changeNum('-')}>-</button>
      </>
    )
  }
  changeNum(flag) {
    store.dispatch({
      type: 'changeNum',
      flag,
    })
  }
}

export default App