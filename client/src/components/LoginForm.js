import React, { Component } from "react";
import "../components/style/LoginForm.css";

class LoginForm extends Component {
  // Setting the component's initial state
  state = {
    email: "",
    password: ""
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const value = event.target.value;
    const name = event.target.name;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

    // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
    alert(`Email:  ${this.state.firstName} Password: ${this.state.lastName}`);
    this.setState({
      email: "",
      password: ""
    });
  };

  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <div className="container">
        <div class="row">
          <div class="col-sm">
            <div class="card">
              <div class="card-header">
                Login
                </div>
              <div class="card-body">
                <form className="form">
                  <p>Email:</p>
                  <input
                    value={this.state.email}
                    name="email"
                    onChange={this.handleInputChange}
                    type="email"
                    placeholder="email@email.com"
                  />
                  <p>Password:</p>
                  <input
                    value={this.state.password}
                    name="password"
                    onChange={this.handleInputChange}
                    type="password"
                    placeholder="Password"
                  />
                  <button onClick={this.handleFormSubmit} className="button">Login</button>

                </form>
              </div>
            </div>
          </div>
          <div class="col-sm">
            <div class="card">
              <div class="card-header">
                Register
                </div>
              <div class="card-body">
              <form className="form">
                  <p>Email:</p>
                  <input
                    value={this.state.email}
                    name="email"
                    onChange={this.handleInputChange}
                    type="email"
                    placeholder="email@email.com"
                  />
                  <p>Password:</p>
                  <input
                    value={this.state.password}
                    name="password"
                    onChange={this.handleInputChange}
                    type="password"
                    placeholder="Password"
                  />
                  <button onClick={this.handleFormSubmit} className="button">Register</button>

                </form>
              </div>
            </div>
          </div>

        </div>







      </div>
    );
  }
}

export default LoginForm;