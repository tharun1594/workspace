// Write your code here
import './index.css'

const PlanetItem = props => {
  const {planetDetails} = props
  const {name, imageUrl, description} = planetDetails

  return (
    <div className="comp-bg">
      <img src={imageUrl} alt={`planet ${name}`} className="image" />
      <h1 className="text">{name}</h1>
      <p className="text">{description}</p>
    </div>
  )
}

export default PlanetItem
