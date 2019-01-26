import React, { Component } from 'react';

class SignIn extends Component {


    render() {
        return (
            <div>
                <p>

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
