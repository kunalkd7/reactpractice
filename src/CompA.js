import React, { Component } from 'react'
import CompB from './CompB'

export default class CompA extends Component {
    constructor(props) {
        super(props);
        console.log(" class A constructor ");
        this.state = {
            id_a: 1
        }
    }

     myfun = () => {
      console.log("button clicked");
       this.setState({
           id_a : this.state.id_a+1
       })
    }

    render() {
        console.log(" class A render")
        return <>
            <h2>class A id {this.state.id_a}</h2>
            <CompB prop={this.state.id_a} />
            <button onClick={this.myfun} > click here</button>
        </>
    }
    componentDidMount(){
        console.log("a class componentDidMount")
    }

}