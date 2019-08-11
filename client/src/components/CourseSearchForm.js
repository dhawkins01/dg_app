import React, { Component } from "react";
import API from "../utils/API";
// import API from "./utils/API";

class CourseSearchForm extends Component {
    // Setting the component's initial state
  state = {
    zipcode: "",
    courses: []
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

    // alert(`Hello ${this.state.zipcode}`);
    API.getCourses(this.state.zipcode)
        .then(res => this.setState({courses: res.data}))
        .catch(err => console.log(err));
  };

  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <div>
        
        <form className="form">
          <input
            value={this.state.zipcode}
            name="zipcode"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Enter Zipcode"
          />
          
          <button onClick={this.handleFormSubmit}>Submit</button>
        </form>
      </div>
    );
  }
    
}

export default CourseSearchForm;