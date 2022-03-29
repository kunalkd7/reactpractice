import React, { Component } from 'react'
import Consumercomp from './consumercomp'
import {MyContext} from './mycontext'

export default class A extends Component {
    static contextType = MyContext;
    render() {
        const {salary , myfun} = this.context;
        return <>
        <h3>Random Comp</h3>
        {salary}
        <Consumercomp />
        </>
    }
}