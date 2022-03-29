import React, { PureComponent, Component } from 'react'
 
class A extends Component {

    // shouldComponentUpdate(nextprop, nextstate) {
    //     console.log(this.props.name , nextprop)
    //     if(this.props.name === nextprop.name){
    //         return false;
    //     }else{
    //         return true
    //     }
    // }

    render() {
        console.log(" regular comp rendered ")
        return <>
            <h1> regular component  {this.props.name}</h1>
        </>
    }
}

// it include shouldcomponentupdate() method and check prop with prev prop
// React.memo() is same but its for functional component
class B extends PureComponent {
    render() {
        console.log(" pure comp rendered ")
        return <>
            <h1> pure component {this.props.name}</h1>
        </>
    }
}

export default class C extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "abc"
        }
    }

    myfun = () => {
        setInterval(() => {
            this.setState({ name: "xyz" })
        }, 2000)
    }

    render() {
        console.log("main component rendered")
        return <>
            <h1> component</h1>
            <A name={this.state.name} />
            <B name={this.state.name} />
            <button onClick={this.myfun} >click here</button>
        </>
    }

}