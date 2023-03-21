import './index.css'

const FeedbackItem = props => {
  const {resourceDetails, changeToThanks} = props
  const {id, name, imageUrl} = resourceDetails

  const onClickEmoji = () => {
    changeToThanks(id)
  }

  return (
    <li key={id} className="emoji-container">
      <img src={imageUrl} alt={name} onClick={onClickEmoji} className="image" />
      <p>{name}</p>
    </li>
  )
}

export default FeedbackItem
