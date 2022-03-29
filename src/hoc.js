import React, { Component } from 'react'

const Hoc = (Oldcomp) => {

    class Newcomp extends Component {
        state = {
            count: 0
        }
    
        onclick = () => {
            this.setState({
             count : this.state.count + 1
            })
        }

        render() {
           console.log("hoc render")
            return (<>
                <Oldcomp hocprop = "click to add" hoccount={this.state.count} hoconclick={this.onclick}  {...this.props}/>
            </>)
        }
    }
    return Newcomp;
}

export default Hoc;