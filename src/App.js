import {Route, Switch} from 'react-router-dom'

import Home from './components/Home'
import NotFount from './components/NotFound'
import TeamMatches from './components/TeamMatches'

import './App.css'

const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/team-matches/:id" component={TeamMatches} />
      <Route component={NotFount} />
    </Switch>
  </div>
)

export default App
