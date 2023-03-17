import './index.css'
import {Component} from 'react'

class BrowserHistoryItem extends Component {
  onClickDelete = () => {
    const {browserHistoryDetails, deleteUser} = this.props
    const {id} = browserHistoryDetails
    deleteUser(id)
  }

  render() {
    const {browserHistoryDetails} = this.props
    const {timeAccessed, logoUrl, title, domainUrl} = browserHistoryDetails
    return (
      <li className="list-container">
        <p className="time">{timeAccessed}</p>
        <div className="details-container">
          <div className="image-container">
            <img src={logoUrl} alt="domain logo" className="image" />
            <p className="title">{title}</p>
            <p className="domain">{domainUrl}</p>
          </div>
          <div className="delete-container">
            <button
              type="button"
              data-testid="delete"
              className="button"
              onClick={this.onClickDelete}
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
                alt="delete"
                className="delete-icon"
              />
            </button>
          </div>
        </div>
      </li>
    )
  }
}

export default BrowserHistoryItem
