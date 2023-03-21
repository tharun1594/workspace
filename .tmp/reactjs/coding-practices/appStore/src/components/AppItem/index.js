import './index.css'

const AppItem = props => {
  const {eachAppDetails} = props
  const {appName, imageUrl} = eachAppDetails

  return (
    <li className="app-container">
      <img src={imageUrl} alt={appName} className="image" />
      <p className="heading">{appName}</p>
    </li>
  )
}

export default AppItem
