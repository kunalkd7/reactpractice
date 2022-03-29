import React from 'react'

class Comp extends React.Component {

    state = {
      arr: [{name:'fbfg'}, {name:'fbfg'}, {name:'fbfg'}]
      // arr:[1,2,3,4]
    }
    render() {
      return <>
        <h1> Map method </h1>
        <ul>
          {this.state.arr.map((arr, index) => (
            <li key={index}> {arr} </li>
          ))}
        </ul>
      </>
    }
  }

  export default Comp;