import './index.css'
import {Component} from 'react'
import CryptocurrencyItem from '../CryptocurrencyItem'

class CryptocurrenciesList extends Component {
  render() {
    const {cryptoList} = this.props
    return (
      <ul className="crypto-list">
        {cryptoList.map(eachItem => (
          <CryptocurrencyItem eachItem={eachItem} key={eachItem.id} />
        ))}
      </ul>
    )
  }
}

export default CryptocurrenciesList
