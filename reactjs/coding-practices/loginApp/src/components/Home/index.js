import {Component} from 'react'

import './index.css'

class Home extends Component {
  state = {isLoggedIn: false}

  onLogin = () => {
    this.setState(prevState => ({
      isLoggedIn: !prevState.isLoggedIn,
    }))
  }

  render() {
    const {isLoggedIn} = this.state
    return (
      <div className="app-container">
        <div className="count-container">
          <h1 className="count">
            {isLoggedIn ? 'Welcome User' : 'Please Login'}
          </h1>
          <button
            type="button"
            className="increment-button"
            onClick={this.onLogin}
          >
            {isLoggedIn ? 'Logout' : 'Login'}
          </button>
        </div>
      </div>
    )
  }
}

export default Home
