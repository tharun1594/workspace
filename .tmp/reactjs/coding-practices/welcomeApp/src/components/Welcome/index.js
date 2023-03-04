import './index.css'
import {Component} from 'react'

class Welcome extends Component {
  state = {isLoggedIn: false}

  unSubscribe = () => {
    this.setState({isLoggedIn: false})
  }

  subscribe = () => {
    this.setState({isLoggedIn: true})
  }

  render() {
    const {isLoggedIn} = this.state
    let authButton
    if (isLoggedIn) {
      authButton = (
        <button type="button" className="button" onClick={this.unSubscribe}>
          Subscribed
        </button>
      )
    } else {
      authButton = (
        <button type="button" className="button" onClick={this.subscribe}>
          Subscribe
        </button>
      )
    }
    return (
      <div className="bg">
        <h1 className="heading">Welcome</h1>
        <p>ThankYou! Happy Learning</p>
        {authButton}
      </div>
    )
  }
}

export default Welcome
