import React, { Component } from "react";
import LoginForm from "../LoginForm.js";
import "../style/Welcome.css";

function Welcome() {
    return (
        <div className="container">
            <div className="jumbotron jumbotron-fluid text-center">
                <div className="container">
                    {/* <h1 className="display-4">Welcome to</h1> */}
                    <img src ="/images/logobig.png" width="600" height="100" />
                    <p className="lead">Track your rounds, find new courses, and more!</p>
                    <p>Login or Register below to get started.</p>
                </div>
                
                <div className="container">
                    <LoginForm />
                </div>
            </div>

        </div>


    )
}

export default Welcome;