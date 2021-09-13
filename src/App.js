import './App.css';
import React from 'react';
import { Route, Switch, Link } from "react-router-dom";
import {Navbar, Container, Nav, NavItem} from 'react-bootstrap';
import About from './About';
import Contact from './Contact';
import Home from './Home';

class App extends React.Component {
  render() {
      return (
        <div className="App">
          <div>
		  <Navbar bg="dark" variant="dark">
				  <Container>
					<Navbar.Brand href="#home">Beyond News</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
					  <Nav className="me-auto">
						<Nav.Link href="/">Home</Nav.Link>
						<Nav.Link href="/about">About</Nav.Link>
						<Nav.Link href="/contact">Contact</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				  </Container>
				</Navbar>
			
          </div>
            <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
          </Switch>
          </div>
            );
  }
}

export default App;