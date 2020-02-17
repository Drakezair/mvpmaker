import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// ROUTERS
import AuthRouter from './AuthRouter'
import MakerRouter from './MakerRouter';

const AppRouter = () =>{

    return(
        <Router>
            <Switch>
                <Route path="/auth" component={AuthRouter} />
                <Route path="/maker" component={MakerRouter} />
            </Switch>
        </Router>
    )
}

export default AppRouter;