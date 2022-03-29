import React, { Component } from 'react'

export default class Comp extends Component {

    componentDidMount() {
        console.log("component did mount");
    }

    componentWillUnmount() {
        console.log("component unmounted")
    }

    render() {
         console.log("Component render");
        return <>
            <h1>unmounting</h1>
        </>
    }
}