import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, useHistory } from 'react-router-dom';

import { FeedbackPage } from './pages';

const App = () => {
  const history = useHistory();
  return (
    <Router history={history} >
      <Switch>
        <Route exact path="/feedback" component={FeedbackPage} />
        <Redirect to="/feedback" />
      </Switch>
    </Router>
  )
}

export default App;