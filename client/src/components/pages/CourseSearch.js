import React, { Component } from "react";
// import API from "./utils/API";
import CourseSearchForm from "../CourseSearchForm";
import "../style/CourseSearch.css";

class CourseSearch extends Component {
    



    render() {
        return(
            <div className="container">
            <div className="jumbotron jumbotron-fluid text-center">
                <div className="container">
                    {/* <h1 className="display-4">Welcome to</h1> */}
                    <img src ="/images/logobig.png" width="600" height="100" />
                    <p className="lead">Course Search</p>
                    <p>Enter a zipcode search for nearby courses.</p>
                    <CourseSearchForm />
                    
                </div>
                
            </div>

        </div>
        )
    }
}

export default CourseSearch;