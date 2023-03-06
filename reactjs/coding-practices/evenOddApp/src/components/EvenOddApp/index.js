import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(prevState => ({
      count: prevState.count + Math.floor(Math.random() * 100),
    }))
  }

  render() {
    const {count} = this.state

    return (
      <div className="bg">
        <div className="card">
          <h1 className="heading">Count {count}</h1>
          {count % 2 === 0 ? (
            <p className="text">Count is Even</p>
          ) : (
            <p className="text">Count is Odd</p>
          )}
          <button className="button" type="button" onClick={this.onIncrement}>
            Increment
          </button>
          <p className="note">*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
