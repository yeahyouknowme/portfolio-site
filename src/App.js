import {Row, Col, Navbar, Container} from 'react-bootstrap';
import {BrowserRouter as Router, Switch, Route, useLocation, Link, Redirect} from 'react-router-dom';
import Calculator from './pages/calculator';
import Splash from './pages/splash';
import DrumMachine from './pages/drum-machine';
import MarkdownEditor from './pages/markdown-editor';
import QuoteMachine from './pages/quote-machine';
import SessionTimer from  './pages/session-timer';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <Router>
        <div className="App p-0">
          <Container fluid className="p-0">
                <Switch>
                  <Route path="/" exact component={Splash} />
                  <Route path="/drum-machine" component={DrumMachine} />
                  <Route path="/markdown-editor" component={MarkdownEditor} />
                  <Route path="/quotes" component={QuoteMachine} />
                  <Route path="/calculator" component={Calculator} />
                  <Route path="/timer" component={SessionTimer} /> 
                  <Route 
                    path="/timestamp-service" 
                    component={() => {
                      window.location.href = 'https://fcc-timestamp.yeahyouknowme.repl.co/';
                      <Redirect to="/" />
                    }} 
                  />
                  <Route
                    path="/header-parser"
                    component={() => {
                      window.location.href = 'https://fcc-get-header.yeahyouknowme.repl.co/'
                    }}
                  />
                  <Route
                    path="/url-shortener"
                    component={() => {
                      window.location.href = 'https://fcc-url-shortener.yeahyouknowme.repl.co/#'
                    }}
                  />
                  <Route
                    path="/exercise-tracker"
                    component={() => {
                      window.location.href = 'https://fcc-exercisetracker.yeahyouknowme.repl.co/#'
                    }}
                  />
                  <Route
                    path="/file-metadata"
                    component={() => {
                      window.location.href = 'https://fcc-metadata.yeahyouknowme.repl.co/#'
                    }}
                  />
                </Switch>
          </Container>
        </div>
      </Router>
    )
  }
}
export default App;
