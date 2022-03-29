import React, { Component } from 'react'


class Login extends Component {
    render() {
        console.log("login page rendered")
        return <>
            <h1> Login page </h1>
            <button onClick={this.props.fun}>signup</button>
        </>
    }
}

class Signup extends Component {
    render() {
        console.log("signup page rendered")
        return <>
            <h1> sign up page </h1>
            <button onClick={this.props.fun}>login</button>
        </>
    }
}

export default class Home extends Component {
    constructor(props) {
        console.log("home constructor")
        super(props);
        this.state = {
            isuserlogin: this.props.value
        }
    }

    signup = () => {
        this.setState({
            isuserlogin: false
        })
    }

    login = () => {
        this.setState({
            isuserlogin: true
        })
    }

    render() {
        console.log("home rendered")
        let isuserlogin = this.state.isuserlogin;

        // if (isuserlogin) {
        //     return <><Login fun={this.signup}/>
        //     </>
        // } else {
        //     return <Signup fun={this.login} />
        // }

        return <>
            { isuserlogin ? <Login fun={this.signup} /> : <Signup fun={this.login} />}
        </>
    }
}