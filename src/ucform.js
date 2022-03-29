import React from 'react'

//uncontrolled component

export default class Form extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            number: ""
        }
        this.inputdata = React.createRef();
    }

    onsubmit = (e) => {
        e.preventDefault();
        console.log(this.inputdata.current)
        let key = this.inputdata.current.name;
        let val = this.inputdata.current.value;
        this.setState({
            [key]: val
        })
    }

    render() {
        console.log("form render")
        return <>

            <h3>Name : {this.state.name} , Email : {this.state.email} , Number : {this.state.number}</h3>
            <h1> React form</h1>

            <form onSubmit={this.onsubmit}>
                <label>
                    Name:
                 <input type="text" name="name" defaultValue="name" ref={this.inputdata} />
                </label>
                <br /><br />
                <label>
                    Email:
                 <input type="email" name="email" defaultValue="email"  />
                </label>
                <br /><br />
                <label>
                    Number:
                 <input type="text" name="number" defaultValue="number" />
                </label>
                <br /><br />
                <input type="submit" value="Submit" />
            </form>
        </>
    }
}
