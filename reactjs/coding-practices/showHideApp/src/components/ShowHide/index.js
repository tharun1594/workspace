// Write your code here
import './index.css'
import {Component} from 'react'

class ShowHide extends Component {
  state = {
    firstCard: false,
    lastCard: false,
  }

  firstName = () => {
    const {firstCard} = this.state
    this.setState(() => ({
      firstCard: !firstCard,
    }))
  }

  lastName = () => {
    const {lastCard} = this.state
    this.setState(() => ({
      lastCard: !lastCard,
    }))
  }

  render() {
    const {firstCard, lastCard} = this.state
    return (
      <div className="bg-container">
        <h1>Show/Hide</h1>
        <div className="cards-container">
          <div className="card-container">
            <button
              onClick={this.firstName}
              className="btn-style"
              type="button"
            >
              Show/Hide Firstname
            </button>
            {firstCard ? <p className="name-card"> Joe</p> : ''}
          </div>
          <div className="card-container">
            <button onClick={this.lastName} className="btn-style" type="button">
              Show/Hide Lastname
            </button>
            {lastCard ? <p className="name-card">Jonas</p> : ''}
          </div>
        </div>
      </div>
    )
  }
}
export default ShowHide
