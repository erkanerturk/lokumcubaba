import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Container } from 'semantic-ui-react';

import FormPage from './components/FormPage';
import SuccessPage from './components/SuccessPage';
import NotFoundPage from './components/NotFoundPage';

const App = () => (
  <Container text>
    <Switch>
      <Route path="/" component={FormPage} exact />
      <Route path="/success" component={SuccessPage} exact />
      <Route component={NotFoundPage} />
    </Switch>
  </Container>
);

export default App;
