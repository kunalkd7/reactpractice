import React, { Component } from 'react'

class Comp extends Component {
    constructor(props) {
        super(props);
         this.state = {
             name : "abx"
         }

        console.log("constructor")
    }
 
    componentDidMount(){
        console.log("componentdidmount")
        this.setState({name : "webu"})
    }

    static getDerivedStateFromProps(state,props){
        console.log("static getDerivedStateFromProps()")
        return null;
    }
    
    render(){
        console.log("render")
        return <h1>hello : {this.state.name}</h1>
    }
    
}

export default Comp;