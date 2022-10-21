import React from 'react'
// import {BrowserRouter, Routes as Router, Route} from 'react-router-dom'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import About from '../pages/About'
import Contact from '../pages/Contact'
import Home from '../pages/Home'

const Routes = () => (
    <BrowserRouter basename="react-multiples">
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
        </Switch>
        {/* <Router>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/contact" element={<Contact />} />
        </Router> */}
    </BrowserRouter>
)

export default Routes