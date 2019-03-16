port React, { Component } from 'react';
import {BrowserRouter, Route } from 'react-router-dom';
import SideBar from './SideBar';

import Home from '../pages/Home.js';
import About from '../pages/About.js';
import Contact from '../pages/Contact.js';
import Portfolio from '../pages/Portfolio.js';

class App extends Component {

    render() {
    	return (
    		<div className="container">
    			<BrowserRouter>
    				<div>
    					<SideBar />
    					<Route exact path="/" component={Home} />
    					<Route exact path="/About" component={About} />
    					<Route path="/Contact" component={Contact} />
            <Route path="/Portfolio" component={Portfolio} />
    				</div>
    			</BrowserRouter>
    		</div>
    	);
    }

}

export default App;

Management Company ID : 6587
Association ID : APRM
Unit Account Number : 186591
Amount Paid : \$283.96
Confirmation Number : 14430700
