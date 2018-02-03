import React from "react";
import {Link} from "react-router-dom";


export const Navbar = ({loggedIn, links, logout}) => {

  return (
    <header className="Navbar">

      <div className="Navbar__logo">
        <h1>My Application</h1>
      </div>


      <ul className="Navbar__links">
        {
          links.map(({label, route, isPrivate}) => {
              if (isPrivate && !loggedIn) {
                return;
              }
              return (
                <li key={label} className="Navbar__links__item">
                  <Link to={route}> {label} </Link>
                </li>
              );
            }
          )
        }
      </ul>

      <ul className="Navbar__account">
        {
          loggedIn ? (
            <React.Fragment>
              <li className="Navbar__account__item">
                <button>Account</button>
              </li>
              <li className="Navbar__account__item">
                <button onClick={logout}>Logout</button>
              </li>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <li className="Navbar__account__item">
                <Link to="signin">
                  <button>Signin</button>
                </Link>
              </li>
              <li className="Navbar__account__item">
                <Link to="signup">
                  <button>Signup</button>
                </Link>
              </li>
            </React.Fragment>
          )
        }
      </ul>
    </header>
  )

};
