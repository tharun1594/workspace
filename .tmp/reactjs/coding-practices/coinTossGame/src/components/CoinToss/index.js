import './index.css'
import {Component} from 'react'

class CoinToss extends Component {
  state = {
    headsCount: 0,
    tailsCount: 0,
    total: 0,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
  }

  onClickToss = () => {
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      this.setState(prevState => ({
        headsCount: prevState.headsCount + 1,
        total: prevState.total + 1,
        imageUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
      }))
    } else {
      this.setState(prevState => ({
        tailsCount: prevState.tailsCount + 1,
        total: prevState.total + 1,
        imageUrl: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
      }))
    }
  }

  render() {
    const {headsCount, tailsCount, total, imageUrl} = this.state

    return (
      <div className="bg">
        <div className="card">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="desc">Heads (or) Tails</p>
          <img src={imageUrl} alt="toss result" className="image" />
          <button type="button" className="button" onClick={this.onClickToss}>
            Toss Coin
          </button>
          <div className="result-container">
            <p className="result">Total: {total}</p>
            <p className="result">Heads: {headsCount}</p>
            <p className="result">Tails: {tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
