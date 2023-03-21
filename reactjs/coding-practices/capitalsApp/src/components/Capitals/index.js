import './index.css'
import {Component} from 'react'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
class Capitals extends Component {
  state = {selectedId: countryAndCapitalsList[0].id}

  returnOptionItems = each => {
    const {id, capitalDisplayText} = each
    return (
      <>
        <option value="select-country" key={id}>
          {capitalDisplayText}
        </option>
      </>
    )
  }

  onChangeCapital = event => {
    this.setState({
      selectedId: event.target.value,
    })
  }

  render() {
    const {selectedId} = this.state
    // const {capitalDisplayText, country} = countryAndCapitalsList[selectedId]
    const newList = countryAndCapitalsList.filter(
      each => each.id === selectedId,
    )
    const {country} = newList[0]
    console.log(newList)

    return (
      <div className="bg">
        <div className="card">
          <h1 className="heading">Countries And Capitals</h1>
          <div className="select-container">
            <select
              className="select-items"
              onChange={this.onChangeCapital}
              value={selectedId}
            >
              {countryAndCapitalsList.map(eachCapital => (
                <option
                  key={eachCapital.id}
                  value={eachCapital.id}
                  className=""
                >
                  {eachCapital.capitalDisplayText}
                </option>
              ))}
            </select>
            <label htmlFor="select">is capital of which country?</label>
          </div>
          <p className="country">{country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
