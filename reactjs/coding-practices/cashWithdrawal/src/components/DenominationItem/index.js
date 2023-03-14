import './index.css'
import {Component} from 'react'

class DenominationItem extends Component {
  onClickAmount = () => {
    const {denominationDetails, onClickWithdrawal} = this.props
    const {id} = denominationDetails
    onClickWithdrawal(id)
  }

  render() {
    const {denominationDetails} = this.props
    const {value} = denominationDetails

    return (
      <li className="list">
        <button type="button" className="button" onClick={this.onClickAmount}>
          {value}
        </button>
      </li>
    )
  }
}

export default DenominationItem
