import React, { Component } from 'react'
// import { MyContext } from './providercomp'
// import {Consumer} from './mycontext'
import {MyContext} from './mycontext'


export default class A extends Component {

    static contextType = MyContext;
    render() {
        const {salary , myfun} = this.context;
        return <>
            <h3>Consumer Comp</h3>
            {/* <Consumer>
                {data => <>
                <h1>{data.salary}</h1>
                <button onClick = {data.myfun} >click here</button>
                </>
                }
            </Consumer> */}
            
            {/* <h1>{this.context.salary}</h1>
            <button onClick = {this.context.myfun} >click here</button> */}

            <h1>{salary}</h1>
            <button onClick = {myfun} >click here</button>
        </>
    }
}