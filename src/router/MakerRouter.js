import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// PAGES
import { Home } from '../pages/MakerPages.js';

// Container
import { MakerContainer } from '../Containers/index.js';

const MakerRouter = () =>{

    return(
        <Router basename='/maker' >
            <MakerContainer basename='/maker'  >
                <Switch>
                    <Route exact path='/' name='Home' component={Home} />
                    <Route exact path='/aaa' name='hola' component={Home} />
                </Switch>
            </MakerContainer>
        </Router>
    )
}

export default MakerRouter;