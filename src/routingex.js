import { func } from 'prop-types';
import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

export default class Routingex extends Component {
    render() {
        return (
            <div>
                <Router>
                    <div>
                        <Header />

                        <Routing />
                    </div>
                </Router>
            </div>
        )
    }
}

function Header() {
    return (<>
        <ul>
            {/* <li><a href="#">Home</a></li> */}
            <li><Link to="/">Home</Link></li>
            <li><Link to="/aboutus">about us</Link></li>
            <li><Link to="/services">services</Link></li>
            <li><Link to="/contactus">contact us</Link></li>
        </ul>
    </>)
}

function Routing() {
    return (<>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/aboutus" component={Aboutus} />
            <Route path="/services" component={Services} />
            {/* <Route path="/contactus" component={Contactus} /> */}
            <Route component={PageNotFound} />
        </Switch>
    </>)
}

function Home() {
    return (<>
        <p>home page </p>
    </>)
}

function Aboutus() {
    return (<>
        <p>Aboutus page </p>
    </>)
}

function Services(props,{ history, location, match }) {
    console.log(history)
    console.log(match)
    return (
    <>
     
        service component
        <ul>
            <li><Link to={`${match.path}/web-designing`}>web-designing</Link></li>
            <li><Link to={`${match.path}/web-development`}>web-development</Link></li>
        </ul>

        <Switch>
           {/* <Route path = {`${match.path}/web-designing`} component={Webdesigning} /> */}
           <Route path = {`${match.path}/:slug`} component={Webdesigning} />

        </Switch>
       
    </>)
}

function Contactus() {
    return (<>
        <p>Contacttus page </p>
    </>)
}

function PageNotFound() {
    return (<>
        <h3>Page not found</h3>
        <h3>Error 404</h3>
    </>)
}

function Webdesigning({match}){
    console.log(match)
    return (<>
    {match.params.slug} service
    </>)
}