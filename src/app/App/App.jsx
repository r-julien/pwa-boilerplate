import React from "react";
import {connect} from "react-redux";
import {
  Router,
  Route,
  Link,
} from "react-router-dom";

import {userActions} from "../_actions"
import {SignupPage, SigninPage} from "../Auth";
import {history, siteMap} from "../_config";

import {PrivateRoute, Navbar} from "../_components";
import "../Style.scss";

const Root = (props) => {

  const {dispatch, alert, loggedIn} = props;
  const {links} = siteMap;

  const logout = () => {
    dispatch(userActions.logout());
  };

  return (
    <Router history={history}>
      <React.Fragment>

        <Navbar loggedIn={loggedIn} links={links} logout={logout}/>

        <div>
          {
            alert.message &&
            <div className={`alert ${alert.type}`}>{alert.message}</div>
          }
        </div>

        <Route exact path="/" component={Home}/>
        <Route exact path="/home" component={Home}/>

        <PrivateRoute exact path="/private" component={Protected}/>
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
  const {alert, authentication} = state;
  const {loggedIn} = authentication;
  return {
    alert,
    loggedIn
  };
}

const connectedApp = connect(mapStateToProps)(Root);
export {connectedApp as App};