import './index.css'
import {Component} from 'react'

class ReviewsCarousel extends Component {
  state = {presentObject: 0}

  getFilteredReviews = () => {
    const {presentObject} = this.state
    const {reviewsList} = this.props
    const filterReviewDetails = reviewsList[presentObject]
    return filterReviewDetails
  }

  onClickRight = () => {
    const {presentObject} = this.state
    if (presentObject < 3) {
      this.setState(prevState => ({presentObject: prevState.presentObject + 1}))
    }
  }

  onClickLeft = () => {
    const {presentObject} = this.state
    if (presentObject > 0) {
      this.setState(prevState => ({presentObject: prevState.presentObject - 1}))
    }
  }

  render() {
    const filterReviewDetails = this.getFilteredReviews()
    const {imgUrl, username, companyName, description} = filterReviewDetails

    return (
      <div className="bg">
        <h1>Reviews</h1>
        <div className="review-container">
          <img src={imgUrl} alt={username} className="image" />
          <div className="nav-container">
            <div>
              <button
                type="button"
                className="button"
                onClick={this.onClickLeft}
                data-testid="leftArrow"
              >
                <img
                  src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                  alt="left arrow"
                  className="icon"
                />
              </button>
            </div>
            <div className="name-container">
              <p className="name">{username}</p>
              <p className="company">{companyName}</p>
            </div>
            <div>
              <button
                type="button"
                className="button"
                onClick={this.onClickRight}
                data-testid="rightArrow"
              >
                <img
                  src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                  alt="right arrow"
                  className="icon"
                />
              </button>
            </div>
          </div>
          <p className="description">{description}</p>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
