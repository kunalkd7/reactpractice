import React, { Component, useState, useEffect } from 'react'

// export default class Api extends Component {
//     constructor(props) {
//         super(props)
//         console.log(" Api constructor")
//         this.state = {
//             error: false,
//             data: []
//         }
//     }

//     componentDidMount() {
//         console.log("Api componentDidMount")
//         fetch('https://jsonplaceholder.typicode.com/todos')
//             .then(res => res.json())
//             .then(res => {
//                 //  console.log(res)
//                 this.setState({ data: res })
//             })
//             .catch(err => this.setState({ error: true }))
//     }


//     render() {
//         console.log("Api render")
//         const arr = this.state.data
//         const newarr = arr.map((val,index) => {
//              return <li key = {val.id}>{val.title}</li>
//         })



//         return (
//             <>
//                 <h1>Api Data</h1>
//                 <div>{JSON.stringify(this.state.data[0])}</div>
//                  <ul>
//                      {newarr}
//                  </ul>

//             </>
//         )
//     }
// }


export default function Api() {

    let [error, seterror] = useState(false);
    let [data, setdata] = useState([]);

    //componentdidmount componentDidUpdste
    useEffect(() => {
        console.log("mount")
        async function fetchdata() {
         const res = await fetch('https://swapi.dev/api/planets/1')
            res.json()
            .then((res) => setdata(res))
            .catch(err => seterror(true))
        }

        fetchdata()
       
    },[data])  //[] = componentdidmount [values] = componentdidUpdate

    return (
        <>
        <h3>result</h3>
         <div>
             {JSON.stringify(data)}
         </div>
        </>
    )
}
