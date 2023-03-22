import './index.css'
import {v4 as uuidv4} from 'uuid'
import {Component} from 'react'
import AppointmentItem from '../AppointmentItem/index'

class Appointments extends Component {
  state = {title: '', date: '', appointmentList: []}

  addFavourite = id => {
    this.setState(prevState => ({
      appointmentList: prevState.appointmentList.map(eachAppoint => {
        if (id === eachAppoint.id) {
          return {...eachAppoint, isFavourite: !eachAppoint.isFavourite}
        }
        return eachAppoint
      }),
    }))
  }

  onClickAdd = event => {
    event.preventDefault()
    const {title, date} = this.state
    const newAppointment = {
      id: uuidv4(),
      title,
      date,
      isFavourite: false,
    }
    console.log(newAppointment)

    this.setState(prevState => ({
      appointmentList: [...prevState.appointmentList, newAppointment],
      title: '',
      date: '',
    }))
  }

  onChangeTitle = event => {
    this.setState({title: event.target.value})
  }

  onChangeDate = event => {
    this.setState({date: event.target.value})
  }

  onClickStarred = () => {
    this.setState(prevState => ({
      appointmentList: prevState.appointmentList.filter(
        each => each.isFavourite === true,
      ),
    }))
  }

  render() {
    const {title, date, appointmentList} = this.state
    console.log(appointmentList)
    return (
      <div className="bg">
        <div className="container">
          <h1 className="heading">Add Appointment</h1>
          <div className="top-container">
            <form className="input-container" onSubmit={this.onClickAdd}>
              <label htmlFor="titleInput" className="label">
                TITLE
              </label>
              <br />
              <input
                id="titleInput"
                type="text"
                className="title-input"
                placeholder="Title"
                value={title}
                onChange={this.onChangeTitle}
              />
              <label htmlFor="dateInput" className="label">
                DATE
              </label>
              <br />
              <input
                id="dateInput"
                type="date"
                className="title-input"
                placeholder="dd/mm/yyyy"
                value={date}
                onChange={this.onChangeDate}
              />
              <button type="submit" className="button1">
                Add
              </button>
            </form>
            <img
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
              alt="appointments"
            />
          </div>
          <hr className="hr-line" />
          <div className="heading-and-starred">
            <h1 className="heading">Appointments</h1>
            <button
              type="button"
              className="button"
              onClick={this.onClickStarred}
            >
              Starred
            </button>
          </div>
          <ul className="appointments">
            {appointmentList.map(eachAppoint => (
              <AppointmentItem
                eachAppoint={eachAppoint}
                key={eachAppoint.id}
                addFavourite={this.addFavourite}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Appointments
