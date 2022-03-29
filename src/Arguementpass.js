import React from 'react'

class Arguementpass extends React.Component {
    state = {
      name: this.props.name,
      id: 5
    }
  
    myfun = (id, e) => {
      console.log(id)
      console.log(e)
      this.setState({
        id: id
      })
    }
  
    render() {
      return <>
        <h1> name : {this.state.name} </h1>
        <h1>  id : {this.state.id} </h1>
        <h1>{this.props.children}</h1>
        {/* //passing arguement to function we need to pass event in the end*/}
        <button onClick={(e) => this.myfun(3, e)}>click</button>
      </>
    }
  }

  export default Arguementpass