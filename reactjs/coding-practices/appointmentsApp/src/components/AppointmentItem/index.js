import './index.css'
import {format} from 'date-fns'

const AppointmentItem = props => {
  const {eachAppoint, addFavourite} = props
  const {id, title, date, isFavourite} = eachAppoint

  const onClickFavourite = () => {
    addFavourite(id)
  }

  // const addClass = isFavourite ? 'favorite' : 'not-favorite'
  const imageUrl = isFavourite
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  return (
    <li className="appointment-box">
      <div className="title-box">
        <p className="title">{title}</p>
        <button
          type="button"
          className="button2"
          data-testid="star"
          onClick={onClickFavourite}
        >
          <img src={imageUrl} alt="star" />
        </button>
      </div>
      <p className="date-text">
        {format(new Date(date), 'dd MMMM yyyy, EEEE')}
      </p>
    </li>
  )
}

export default AppointmentItem
