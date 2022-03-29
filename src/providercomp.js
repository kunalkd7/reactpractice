import React, { Component } from 'react'
import Random from './random'

// export const MyContext = React.createContext();
import {Provider} from './mycontext'

export default class A extends Component {
    constructor(props) {
        super(props);
        this.state = {
            salary: 10000
        }
    }

    onclick = () => {
        this.setState({
            salary : this.state.salary+500
        })
    }

    render() {
        const data = {
            salary : this.state.salary,
            myfun : this.onclick
        }
        return <>
       
            <h3>Provider Comp</h3>
            <Provider value={data} >

            <Random />

            </Provider>
          
        </>
    }
}