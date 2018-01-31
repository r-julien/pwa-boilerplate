import React from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';

import SignupPage from "../Auth/SignupPage/SignupPage";
import SigninPage from "../Auth/SigninPage/SigninPage";

import "../../style.scss";

const App = (store) => {

  console.log(store);
  return (
    <Router>
      <React.Fragment>
        <div className="header">
          <h1 className="title">My application</h1>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/signin">Signin</Link></li>
            <li><Link to="/signup">Signup</Link></li>
          </ul>
        </div>


        <Route exact path="/" component={Home} />
        <Route path="/signin" component={SigninPage} />
        <Route path="/signup" component={SignupPage} />

        <footer>
          <div>2018, Rousseau Julien</div>
        </footer>
      </React.Fragment>
    </Router>
  );
};

const Home = () => <div><h2>Home</h2></div>;

function mapStateToProps(state) {
  const {alert} = state;
  return {
    alert
  };
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App };

export default App;
