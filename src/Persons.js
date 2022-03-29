import React, { Component } from 'react'
import Person1 from './person1'
import Person2 from './person2'

export default class Persons extends Component {
    render() {
      console.log("persons render")
        return (<>
          <Person1  name = "A"/>
          <Person2  name = "B" />
        </>)
    }
}

