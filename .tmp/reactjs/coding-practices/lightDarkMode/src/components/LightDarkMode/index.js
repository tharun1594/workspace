import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {isLightOn: true}

  lightOn = () => {
    this.setState(prevState => ({isLightOn: !prevState.isLightOn}))
  }

  render() {
    const {isLightOn} = this.state
    const modeClassName = isLightOn ? 'card-light' : 'card-dark'
    const buttonText = isLightOn ? 'Light Mode' : 'Dark Mode'

    return (
      <div className="bg">
        <div className={modeClassName}>
          <h1 className="heading">Click To Change Mode</h1>
          <button className="button" onClick={this.lightOn} type="button">
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
