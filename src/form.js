import React from 'react'

//controlled component

export default class Form extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "name",
            email: "email",
            number: "number",
            sub : false
        }
    }

    onchange = (e) => {
        // console.log(e.target.name)
        // console.log(e.target.value)
        let i = e.target.name;
        let j = e.target.value;
        this.setState({
            [i]: j
        })
    }

    onsubmit = (e) => {
        e.preventDefault()
        // console.log(e.target.email.value)
        this.props.func(this.state)
    }

    render() {
        console.log(" form render")
        return <>
            <h1> React form</h1>
            <form onSubmit={this.onsubmit}>
                <label>
                    Name:
                 <input type="text" name="name" value={this.state.name} onChange={this.onchange} />
                </label>
                <br /><br />
                <label>
                    Email:
                 <input type="email" name="email" value={this.state.email} onChange={this.onchange} />
                </label>
                <br /><br />
                <label>
                    Number:
                 <input type="text" name="number" value={this.state.number} onChange={this.onchange} />
                </label>
                <br /><br />
                <input type="submit" value="Submit" />
            </form>
        </>
    }
}
