// Write your code here.
import './index.css'

const NavBar = props => {
  const {currentScore, topScore, isGameInProcess} = props
  return (
    <nav className="nav-bar-container">
      <div className="logo-score-container">
        <div className="logo-title-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png "
            alt="emoji logo"
            className="logo"
          />
          <h1 className="logo-title">Emoji Game</h1>
        </div>
        {isGameInProcess && (
          <div className="scores-container">
            <p className="score">Score: {currentScore}</p>
            <p className="score">Top Score: {topScore}</p>
          </div>
        )}
      </div>
    </nav>
  )
}

export default NavBar
