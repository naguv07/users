import React from 'react';
import { Container } from 'react-bootstrap';
import { Route } from 'react-router-dom';
import UserDetailed from '../users/UserDetails/UserDetailed';
import Users from '../users/UserList/Users';

function App() {
  return (
    <Container className="content-body">
      <Route exact path={"/"} component={Users}/>
      <Route exact path={"/user/:userid"} component={UserDetailed}/>
    </Container>
  );
}

export default App;
