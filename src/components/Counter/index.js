import {Component} from 'react'
import './index.css'
class Counter extends Component {
  state = {count: 0}
  onIncrrment = () => {
    this.setState(prevState => {
      console.log(`previous state value ${prevState.count}`)
      return {count: prevState.count + 1}
    })
  }
  onDecrease = () => {
    this.setState(prevState => {
      return {count: prevState.count - 1}
    })
  }
  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="heading">Counter</h1>
        <p className="count">{count}</p>
        <div>
          <button className="button" onClick={this.onIncrrment}>
            Increase
          </button>
          <button className="button" onClick={this.onDecrease}>
            Decrease
          </button>
        </div>
      </div>
    )
  }
}
export default Counter
