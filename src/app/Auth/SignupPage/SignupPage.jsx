import React from "react";
import { connect } from 'react-redux';
import { userActions } from '../../_actions';

class SignupPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        username: "",
        password: "",
        email: ""
      },
      submited: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const {name, value} = event.target;
    const {user} = this.state;
    this.setState({
      user: {
        ...user,
        [name]: value
      }
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    this.setState({submitted: true});
    // const {user} = this.state;
    // const {dispatch} = this.props;
    // if (user.firstName && user.lastName && user.username && user.password) {
    //   dispatch(userActions.register(user));
    // }
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

const connectedSignupPage = connect(mapStateToProps)(SignupPage);
export { connectedSignupPage as SignupPage };