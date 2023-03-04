import './index.css'
import {Components} from 'react'

class LightDarkMode extends Components {
  state = {isLightOn: false}

  lightOn = () => {
    this.setState({isLightOn: true})
  }

  lightOff = () => {
    this.setState({isLightOn: false})
  }

  renderLightOn = () => {
    const {isLightOn} = this.state

    if (isLightOn === true) {
      return (
        <div className="card-light">
          <h1 className="heading">Click To Change Mode</h1>
          <button type="button" className="button" onClick={this.lightOff}>
            Dark Mode
          </button>
        </div>
      )
    }
    return (
      <div className="card-dark">
        <h1 className="heading">Click To Change Mode</h1>
        <button type="button" className="button" onClick={this.lightOn}>
          Light Mode
        </button>
      </div>
    )
  }

  render() {
    return <div className="bg">{this.renderLightOn}</div>
  }
}

export default LightDarkMode
