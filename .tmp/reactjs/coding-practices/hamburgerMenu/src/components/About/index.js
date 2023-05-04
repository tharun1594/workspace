// Write your code here
import Header from '../Header'
import './index.css'

const About = () => (
  <div>
    <Header />
    <div className="about-small">
      <img
        src="https://assets.ccbp.in/frontend/react-js/about-sm-img.png"
        alt="about"
      />
    </div>
    <div className="about-big">
      <img
        src="https://assets.ccbp.in/frontend/react-js/about-lg-img.png"
        alt="about"
      />
    </div>
  </div>
)

export default About