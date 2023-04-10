import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './App.css'
import About from './components/About'
import Header from './components/Header'
import Contact from './components/Contact'
import Home from './components/Home'
import NotFound from './components/NotFound'

const App = () => (
  <>
    <div className="bg">
      <BrowserRouter>
        <div className="page">
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  </>
)

export default App
