import './index.css'
import {Component} from 'react'
import DenominationItem from '../DenominationItem/index'

class CashWithdrawal extends Component {
  State = {balance: 2000}

  onClickWithdrawal = () => {
    // const {balance} = this.State
    const {denominationsList} = this.props
    const {value} = denominationsList
    this.setState(prevState => ({balance: prevState.balance - value}))
  }

  render() {
    const {balance} = this.State
    const {denominationsList} = this.props

    return (
      <div className="bg">
        <div className="card">
          <div className="profile-container">
            <p className="profile-image">S</p>
            <h1 className="name">Sarah Williams</h1>
          </div>
          <div className="balance-container">
            <p>Your Balance</p>
            <h1 className="balance">{balance}</h1>
          </div>
          <div>
            <h1>Withdraw</h1>
            <p>CHOOSE SUM (IN RUPEES)</p>
          </div>
          <ul className="denomination">
            {denominationsList.map(each => (
              <DenominationItem
                denominationsDetails={each}
                key={each.id}
                onClickWithdrawal={this.onClickWithdrawal}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
