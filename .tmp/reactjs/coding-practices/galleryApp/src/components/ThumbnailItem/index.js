import './index.css'

const ThumbnailItem = props => {
  const {thumbnailDetails, updateImageUrl, isActive} = props
  const {id, thumbnailUrl, thumbnailAltText} = thumbnailDetails

  const onClickThumbnail = () => {
    updateImageUrl(id)
  }

  const addClassName = isActive ? 'add-thumbnail' : ''

  return (
    <li>
      <button type="button" className="thumbnail" onClick={onClickThumbnail}>
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={`thumbnail-image ${addClassName}`}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
