import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import styled from 'styled-components';

import 'antd/dist/antd.css';

import {Header} from './components';

import Home from './pages/Home/Home';
import Form from './pages/Form/Form';

import Store from './stores';

const App = () => {
  return (
    <Store>
      <Container>
        <Router>
          <Header/>
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/submit-form">
              <Form/>
            </Route>
          </Switch>
        </Router>
      </Container>
    </Store>
  );
};

export default App;

const Container = styled.div`
  flex: 1;
  display: flex;
  padding: 0 50px;
  flex-direction: column;
  justify-content: center;
`;
