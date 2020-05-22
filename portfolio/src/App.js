import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';

import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import SnakePage from './pages/SnakePage';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: "Elihu Diaz",
      headerLinks: [
        {title: 'Home', path: '/'},
        {title: 'About', path: '/about'},
        {title: 'Contact', path: '/contact'},
      ],
      home: {
        title: "Be relentless",
        subTitle: 'Projects that make a difference',
        text: 'Checkout my projects below'
      },
      about: {
        title: "About me ",
      },
      snake: {
        title: "Snake",
      },
      contact: {
        title: "Let's talk",
      },
    }
  }


  render() {
    return (

      <Router>
        <Container fluid={true}>
        
          <Navbar className="border-bottom navbar color-nav"  expand="xl" height={700}>
            <Navbar.Brand className="navbar-brand">Elihu Diaz</Navbar.Brand>

            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link link-font" to="/">Home</Link>
                <Link className="nav-link link-font" to="/about">About</Link>
                <Link className="nav-link link-font" to="/snake">Play Caplar</Link>
                <Link className="nav-link link-font" to="/contact">Contact</Link>
              </Nav>
            </Navbar.Collapse>    
          </Navbar>

          <Route 
            path="/" 
            exact 
            render={() => 
              <HomePage 
                title={this.state.home.title}
                subTitle={this.state.home.subTitle}
                text={this.state.home.text}
              />
            }
          />  

          <Route 
            path="/about" 
            render={() => 
              <AboutPage title={this.state.about.title} />}/> 

          <Route 
            path="/snake" 
            render={() => <SnakePage title={this.state.snake.title}/>}/>

          <Route 
            path="/contact" 
            render={() => 
              <ContactPage title={this.state.contact.title}/>}/>  

          <Footer />
     
        </Container>
      </Router>

    );
  }
}

export default App;
