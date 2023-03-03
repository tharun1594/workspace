import './index.css'
import {Component} from 'react'

class FruitsCounter extends Component {
  state = {banana: 0, mango: 0}

  eatMango = () => {
    this.setState(prevState => ({mango: prevState.mango + 1}))
  }

  eatBanana = () => {
    this.setState(prevState => ({banana: prevState.banana + 1}))
  }

  render() {
    const {banana, mango} = this.state
    return (
      <div className="container">
        <div className="card-bg">
          <h1 className="heading">
            Bob ate <span id="span">{mango}</span> mangoes{' '}
            <span id="span">{banana}</span> bananas
          </h1>
          <div className="card-containers">
            <div className="card">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
                className="image"
              />
              <br />
              <button type="button" className="button" onClick={this.eatMango}>
                Eat Mango
              </button>
            </div>
            <div className="card">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
                className="image"
              />
              <br />
              <button type="button" className="button" onClick={this.eatBanana}>
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
