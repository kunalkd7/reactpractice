import React, { Component } from 'react'
import Hoc from './hoc'

class Person2 extends Component {
  
    render() {
        console.log("person2 rendered")
        return (<>
            <h3>person {this.props.name} count : {this.props.hoccount}</h3> 
            <h2>{this.props.hocprop}</h2>
            <button onClick={this.props.hoconclick} >click here</button>
        </>)
    }
}

export default Hoc(Person2);