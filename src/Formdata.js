import React, { Component } from 'react'
import Form from './form'

export default class Formdata extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {}
        }
    }
    formdata = (formdata) => {
        this.setState({
            data: formdata
        })
    }
    
    render() {
        console.log("formdata render")
        console.log(this.state.data)
        return <>
            <Form func={this.formdata} />
            <h1>{this.state.data.name} {this.state.data.email} {this.state.data.number}</h1>
        </>
    }
}