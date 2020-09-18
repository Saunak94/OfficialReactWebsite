import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import { BrowserRouter as BRouter, withRouter, HashRouter, Route} from 'react-router-dom';
import Default from './Components/Default';
import Contact from './Contact';


class App extends Component {
  render(){
  return (
    <HashRouter>
    <div className="App">
      <body>
        <Header></Header>
        <div className="content">
        <BRouter>
        <Route exact path="/" component={withRouter(Default)}/>
        <Route exact path="/contact"component={withRouter(Contact)}/>
        </BRouter>
        </div>
      </body>
    </div>
    </HashRouter>
  );
  }
}
export default App;

