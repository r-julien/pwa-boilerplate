import React from "react";
import {connect} from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Link,
} from "react-router-dom";

import {userActions} from "../_actions"
import {PrivateRoute} from "../_components";
import {SignupPage, SigninPage} from "../Auth";

import "../../style.scss";

const Root = (props) => {

  const {dispatch, alert} = props;

  const logout = () => {
    dispatch(userActions.logout());
  };

  return (
    <Router>
      <React.Fragment>
        <div className="header">
          <h1 className="title">My application</h1>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/protected">Protected</Link></li>
            <li><Link to="/signin">Signin</Link></li>
            <li><Link to="/signup">Signup</Link></li>
            <li>
              <button onClick={logout}>Logout</button>
            </li>
          </ul>
        </div>

        <div>
          {
            alert.message &&
            <div className={`alert ${alert.type}`}>{alert.message}</div>
          }
        </div>

        <Route exact path="/" component={Home}/>

        <PrivateRoute exact path="/protected" component={Protected}/>
        <Route path="/signin" component={SigninPage}/>
        <Route path="/signup" component={SignupPage}/>

        <footer>
          <div>2018, Rousseau Julien</div>
        </footer>
      </React.Fragment>
    </Router>
  );
};

const Home = () => <div><h2>Home</h2></div>;
const Protected = () => <div><h2>Protected Page</h2></div>;

function mapStateToProps(state) {
  const {alert} = state;
  return {
    alert
  };
}

const connectedApp = connect(mapStateToProps)(Root);
export {connectedApp as App};