import './index.css'
import {Component} from 'react'

class RandomNumberGenerator extends Component {
  state = {number: 0}

  onGenerate = () => {
    const randomNumber = Math.floor(Math.random() * 100)
    this.setState({
      number: randomNumber,
    })
  }

  render() {
    const {number} = this.state
    return (
      <div className="bg">
        <div className="card-bg">
          <h1 className="heading">Random Number</h1>
          <p>Generate a random number in the range of 0 to 100</p>
          <button className="button" type="button" onClick={this.onGenerate}>
            Generate
          </button>
          <p className="number">{number}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
