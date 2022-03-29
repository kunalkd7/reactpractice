import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// import App from './App';
// import Mapcomp from './Mapmethod'
// import Arguement from './Arguementpass'
// import Compcombine from './Compcombine'
// import Proptypes from './Proptypes'
// import Mounting from './mounting'
// import CompA from './CompA'
// import Unmount from './unmounting'
// import PureComp from './purecomp'
// import Hooks from './hooks'
// import Condition from './condition'
// import Style1 from './style1.module.css';
// import Style2 from './style2.module.css';
// import Example from './emaple'
// import Formdata from './Formdata'
// import Form from './ucform'
// import Providercomp from './providercomp'
// import Persons from './Persons'
import Router from './routingex'
// import Api from './api'

import reportWebVitals from './reportWebVitals';
// import { render } from '@testing-library/react';




// class Style extends React.Component {
//   render() {
//     return <>
//       <Example />
//       <h1 className={Style1.text}>hello</h1>
//       <ul>{newarr}</ul>
//       <h1 className={Style2.text}>heyyyy</h1>
//     </>
//   }
// }

class A extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 1
    }
  }

  onchange = (e) => {
    let key = e.target.name;
    let val = e.target.value;
    this.setState({
      [key]: val
    })
  }

  render() {
    return <>
      <h1>comp A count : {this.state.count}</h1>

      <form>
        <label>
          count:
                 <input type="text" name="count" value={this.state.count} onChange={this.onchange} />
        </label>
        <br /><br />
        <input type="submit" value="Submit" />
      </form>


      <B val={this.state.count} />
    </>
  }
}

class B extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <>
      <h1>comp B count : {this.props.val}</h1>
    </>
  }
}

ReactDOM.render(
  // <Style />,
  // <App />,
  // <Mapcomp />,
  // <Arguement name = "abc" />,
  // <Compcombine />,
  // <Proptypes />,
  // <Mounting />,
  // <CompA />,
  //<Unmount />,
  // <PureComp />,
  // <Hooks />,
  // <Condition value={true} />,
  // <Formdata />,
  // <Form />,
  // <A />,
  // <Providercomp />,
  // <Persons />,
  <Router />,
  // <Api />,
  
  document.getElementById('root')
);

// ReactDOM.unmountComponentAtNode( document.getElementById('root'))


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
