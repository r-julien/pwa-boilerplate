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
    const {user} = this.state;
    const {dispatch} = this.props;

    if (user.username && user.password && user.email) {
      dispatch(userActions.register(user));
    }
  }

  render() {
    const {registering} = this.props;
    const {user, submitted} = this.state;

    return (
      <div className="col-md-6 col-md-offset-3">
        <h2>Register</h2>
        <form name="form" onSubmit={this.handleSubmit}>

          <div
            className={'form-group' + (submitted && !user.email ? ' has-error' : '')}>

            <label htmlFor="email">First Name</label>
            <input type="text" className="form-control" name="email"
                   value={user.email} onChange={this.handleChange} />
            {
              submitted && !user.email && (
                <div className="help-block">First Name is required</div>
              )
            }

          </div>

          <div
            className={'form-group' + (submitted && !user.username ? ' has-error' : '')}>

            <label htmlFor="username">Username</label>
            <input type="text" className="form-control" name="username"
                   value={user.username} onChange={this.handleChange} />
            {
              submitted && !user.username && (
                <div className="help-block">Username is required</div>
              )
            }
          </div>

          <div
            className={'form-group' + (submitted && !user.password ? ' has-error' : '')}>

            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" name="password"
                   value={user.password} onChange={this.handleChange} />
            {
              submitted && !user.password && (
                <div className="help-block">Password is required</div>
              )
            }

          </div>

          <div className="form-group">
            <button className="btn btn-primary">Register</button>
            {
              registering && (
                <div>
                  <h1>LOADING</h1>
                </div>
              )
            }
          </div>

        </form>
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