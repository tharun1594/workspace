import './index.css'

const CryptocurrencyItem = props => {
  const {eachItem} = props
  const {currencyName, euroValue, currencyLogo, usdValue} = eachItem

  return (
    <li className="navbar">
      <div className="logo-container">
        <img src={currencyLogo} alt={currencyName} className="logo" />
        <p className="nav-item">{currencyName}</p>
      </div>
      <div className="currency-name-container">
        <p className="nav-item">{usdValue}</p>
        <p className="nav-item">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
