import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Quiz from './components/Quiz';
import { Container } from './styles/styles';

const App = () => {
  return (
    <Router>
      <Container>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/quiz" component={Quiz} />
        </Switch>
      </Container>
    </Router>
  );
};

export default App;
