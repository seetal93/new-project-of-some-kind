import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class SignIn extends Component {


    render() {
        return (
            <div>
                <p>
                <Router>
                <Route exact path="/Components/SignIn" component={SignIn} />
                </Router>
                </p>
                <img src="/Banner.png" width="150" height="80" alt="Banner" />
                <p>Username: </p>
                <input id="text" type="text" onChange={(this.handleInput)}></input>
                <p>Password: </p>
                <input id="text" type="text" onChange={(this.handleInput)}></input><br/><br/>
                <input type="button" onClick={this.retrieveData} value="Sign In"></input>

            </div>
        );
    }
}

export default SignIn;
