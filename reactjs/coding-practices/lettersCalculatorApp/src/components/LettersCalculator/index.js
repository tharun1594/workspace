// Write your code here.
import './index.css'
import {Component} from 'react'

class LettersCalculator extends Component {
  state = {
    inputText: '',
  }

  onChangeLettersCount = event => {
    const newText = event.target.value
    this.setState({inputText: newText})
  }

  render() {
    const headingText = 'Calculate the Letters you enter'
    const imageURL =
      'https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png'
    const {inputText} = this.state
    const count = inputText.length

    return (
      <div className="app-container">
        <div className="container">
          <div className="calculate-container">
            <h1 className="heading">{headingText}</h1>
            <label className="label-text" htmlFor="userInput">
              Enter the phrase
            </label>
            <input
              className="user-input"
              type="text"
              placeholder="Enter the phrase"
              id="userInput"
              onChange={this.onChangeLettersCount}
            />
            <p className="count-box">No.of letters: {count}</p>
          </div>
          <img className="image" src={imageURL} alt="letters calculator" />
        </div>
      </div>
    )
  }
}
export default LettersCalculator
