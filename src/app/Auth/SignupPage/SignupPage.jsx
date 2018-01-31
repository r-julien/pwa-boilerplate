import React from "react";
import { connect } from 'react-redux';
import { userActions } from '../../_actions';

class SignupPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
        <h2>Signup</h2>
      </div>
    );
  }

}

function mapStateToProps(state) {
  const {registering} = state.registration;
  return {
    registering
  };
}

const connectedSignupPage = connect(mapStateToProps(SignupPage));
export { connectedSignupPage as SignupPage };