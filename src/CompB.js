import React, { Component } from 'react'

export default class Comp extends Component {
    constructor(props) {
        super(props);
        console.log(" class B constructor ");
        this.state = {
            id_b: this.props.prop,
        }
    }
    static getDerivedStateFromProps(props, state) {
        console.log(" getDerivedStateFromProps ")
        console.log(props, state)
        if (props.prop !== state.id_b) {
            return { id_b: props.prop }
        }
        return null
    }

    shouldComponentUpdate(nextprops, nextstate) {
        console.log(" shouldComponentUpdate")
        console.log(this.props.prop)
        console.log(nextprops, nextstate);
        if (nextstate.id_b > 3) {
            return false;
        }
        return true;
    }

    render() {
        console.log(" class B render")
        return <>
            <h2>class B id {this.state.id_b}</h2>
        </>
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("getSnapshotBeforeUpdate")
        console.log(prevProps, prevState);
        return 1;
    }
    
    componentDidUpdate(prevProps, prevState, snapshot){
        console.log(" componentDidUpdate")
        console.log(prevProps,prevState,snapshot);
    }

    componentDidMount(){
        console.log("b class componentDidMount")
    }

}