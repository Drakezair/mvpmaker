import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// PAGES
import { 
    LoginPage, 
    RegisterPage, 
    MakerPage, 
    CreativePage 
} from '../pages/AuthPages';

const AuthRouter = () =>{

    return(
        <Router basename='auth' >
            <Switch>
                <Route exact path="/"  component={LoginPage} />
                <Route path="/register/maker"  component={MakerPage} />
                <Route path="/register/creative"  component={CreativePage} />
                <Route path="/register"  component={RegisterPage} />
            </Switch>
        </Router>
    )
}

export default AuthRouter;