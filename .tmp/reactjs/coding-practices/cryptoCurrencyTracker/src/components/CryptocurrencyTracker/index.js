import {Component} from 'react'
import Loader from 'react-loader-spinner'
import CryptocurrenciesList from '../CryptocurrenciesList'
import './index.css'

class CryptocurrencyTracker extends Component {
  state = {cryptoList: [], isLoading: true}

  componentDidMount() {
    this.getCryptoData()
  }

  getCryptoData = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const fetchedData = data.map(eachItem => ({
      id: eachItem.id,
      currencyName: eachItem.currency_name,
      usdValue: eachItem.usd_value,
      euroValue: eachItem.euro_value,
      currencyLogo: eachItem.currency_logo,
    }))
    this.setState({cryptoList: fetchedData, isLoading: false})
  }

  renderCryptocurrenciesList = () => {
    const {cryptoList} = this.state

    return (
      <div className="">
        <div className="crypto-container">
          <h1 className="heading">Cryptocurrency Tracker</h1>
          <img
            src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
            alt="cryptocurrency"
            className="image"
          />
        </div>
        <div className="card">
          <div className="navbar">
            <p className="nav-item">Coin Type</p>
            <div className="currency-name-container">
              <p className="nav-item">USD</p>
              <p className="nav-item">EURO</p>
            </div>
          </div>
          <CryptocurrenciesList cryptoList={cryptoList} />
        </div>
      </div>
    )
  }

  renderLoader = () => (
    <div data-testid="loader">
      <Loader type="Rings" color="#ffffff" height={80} width={80} />
    </div>
  )

  render() {
    const {isLoading} = this.state
    console.log(isLoading)

    return (
      <div className="bg">
        {isLoading ? this.renderLoader() : this.renderCryptocurrenciesList()}
      </div>
    )
  }
}

export default CryptocurrencyTracker
