import React from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';

import { alertActions } from '../_actions';
import { SignupPage, SigninPage } from "../Auth";

import "../../style.scss";

const Root = (props) => {

  console.log(props);
  const {dispatch, alert} = props;

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

        <div>
          {
            alert.message &&
            <div className={`alert ${alert.type}`}>{alert.message}</div>
          }
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

const connectedApp = connect(mapStateToProps)(Root);
export { connectedApp as App };
