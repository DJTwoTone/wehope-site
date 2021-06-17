import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home,  AboutUs, BlogEntry, History, Events, Volunteer, Programs, Blog, Contact, Donate} from './Pages'

function Routes() {
    return (
        <div>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/aboutus">
                    <AboutUs />
                </Route>
                <Route exact path="/blog">
                    <Blog />
                </Route>
                {/* make a route with the date for blog entries */}
                <Route exact path="/history">
                    <History />
                </Route>
                <Route exact path="/events">
                    <Events />
                </Route>
                <Route exact path="/volunteer">
                    <Volunteer />
                </Route>
                <Route exact path="/programs">
                    <Programs />
                </Route>
                <Route exact path="/contact">
                    <Contact />
                </Route>
                <Route exact path="/donate">
                    <Donate />
                </Route>
                
            </Switch>
        </div>
    )
};


export default Routes
