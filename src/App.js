import './App.css';
import React from 'react';
import { Route, Switch } from "react-router-dom";
import {Navbar, Container, Nav} from 'react-bootstrap';
import Science from './Science';
import News from './News';
import Contact from './Contact';
import Home from './Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import NewsContext from './NewsContext';

const newsItems = [
{link: "https://dl.prokerala.com/downloads/ringtones/files/mp3/emergency-3087.mp3", type: "audio", thumbnail: "https://doubekmedical.com/wp-content/uploads/2020/03/covid-19-pictures-256x256.jpg", label: "POD 1", date:"12-Sept-2021", line1: "Listen to this one", line2: "Good for your kids"},
{link: "https://dl.prokerala.com/downloads/ringtones/files/mp3/horn-23360.mp3", type: "audio", thumbnail: "https://www.incredibleindia.org/content/dam/incredible-india-v2/images/events/the-golden-chariot.jpg/jcr:content/renditions/cq5dam.web.256.256.jpeg", label: "POD 2", date:"13-Sept-2021", line1: "Listen to this one too!", line2: "Really nice.."},
{link: "https://www.youtube.com/watch?v=TnDsCIICI-k", type: "video", thumbnail: "https://i.ytimg.com/vi/PE8uAwfFXYM/mqdefault.jpg", label: "POD 3", date:"13-Sept-2021", line1: "Watch this one too!", line2: "So nice.."}
];


class App extends React.Component {
  
  render() {
      return (
	  <NewsContext.Provider value={newsItems}>
        <div className="App">
          <div>
		  <Navbar bg="dark" variant="dark">
				  <Container>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
					  <Nav className="me-auto">
						<Nav.Link href="#/">Home</Nav.Link>
						<Nav.Link href="#news">News</Nav.Link>
						<Nav.Link href="#science">Science</Nav.Link>
						<Nav.Link href="#contact">Contact</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				  </Container>
				</Navbar>
			
          </div>
            <Switch>
            <Route exact path="/">
				<Home />
			</Route>
            <Route path="/news">
				<News />
			</Route>
              
			<Route path="/science">
				<Science />
			</Route>
              
			<Route path="/contact">
              <Contact />
            </Route>
          </Switch>
          </div>
		 </NewsContext.Provider>
            );
  }
}

export default App;