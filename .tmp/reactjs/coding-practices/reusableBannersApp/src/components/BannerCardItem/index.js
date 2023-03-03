import './index.css'

const BannerCardItem = props => {
  const {bannerCardsDetails} = props
  const {headerText, description, className} = bannerCardsDetails

  return (
    <div className="card-container">
      <div className={className}>
        <h1>{headerText}</h1>
        <p>{description}</p>
        <div>
          <button type="button">Show More</button>
        </div>
      </div>
    </div>
  )
}

export default BannerCardItem
