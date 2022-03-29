import React from 'react'
import propTypes from 'prop-types'

function Component(props) {
    return(
      <div>
        <h1>property : {props.name}</h1>
        <h1>id : {props.id}</h1> 
      </div>
    )
  }
  
  Component.defaultProps = {
    name : "xyz",
    id : 123
  }
  
  Component.propTypes={
    name : propTypes.string.isRequired,
    id : propTypes.number.isRequired
  }
  
  export default Component;