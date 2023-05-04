// Write your code here
import Header from '../Header'
import './index.css'

const Home = () => (
  <div>
    <Header />
    <div className="home-small">
      <img
        src="https://assets.ccbp.in/frontend/react-js/home-sm-img.png"
        alt="home"
      />
    </div>
    <div className="home-big">
      <img
        src="https://assets.ccbp.in/frontend/react-js/home-lg-img.png"
        alt="home"
      />
    </div>
  </div>
)

export default Home
