import './index.css'
import {Component} from 'react'
import FeedbackItem from '../FeedbackItem/index'

class Feedback extends Component {
  state = {isFeedbackGiven: false}

  changeToThanks = () => {
    this.setState({isFeedbackGiven: true})
  }

  render() {
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources
    const {isFeedbackGiven} = this.state
    return (
      <div className="bg">
        {isFeedbackGiven === true ? (
          <div className="card">
            <img src={loveEmojiUrl} alt="love emoji" className="love-emoji" />
            <br />
            <h1>Thank You</h1>
            <p>
              We will use your feedback to improve our customer support
              performance
            </p>
          </div>
        ) : (
          <div className="card">
            <h1>
              How satisfied are you with our customer support performance?
            </h1>
            <ul className="list-container">
              {emojis.map(eachItem => (
                <FeedbackItem
                  resourceDetails={eachItem}
                  key={eachItem.id}
                  changeToThanks={this.changeToThanks}
                />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default Feedback
