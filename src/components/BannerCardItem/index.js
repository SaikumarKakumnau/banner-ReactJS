// Write your code here.
import './index.css'

const BannerList = props => {
  const {bannerDetails} = props
  const {headerText, description, className} = bannerDetails
  return (
    <li className={`${className} banner-card-item`}>
      <div className="text-content">
        <h1 className="heading">{headerText}</h1>
        <p className="description">{description}</p>
        <button className="show-more-button" type="button">
          Show More
        </button>
      </div>
    </li>
  )
}

export default BannerList
