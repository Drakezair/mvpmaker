import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// CREATIVE
import { AppContainer } from '../Containers';
import { 
    Home as CreativeHome, 
    Product, 
    ProjectDetail as CreativeProjectDetail,
    HistoryPage as CreativeHistory,
    CurrentProjectsPage as CreativeCurrentProjectsPage
} from '../pages/CreativePages';

// AUTH
import { 
    LoginPage, 
    RegisterPage, 
    MakerPage, 
    CreativePage 
} from '../pages/AuthPages';

// MAKER
import { 
    ProjectDetail as MakerProjectDetail,
    Home as MakerHome,
    HistoryPage as MakerHistory,
    CurrentProjectsPage as MakerCurrentProjectsPage
} from '../pages/MakerPages';


const AppRouter = () =>{

    
    return(
        <Router >
            <Switch>
                {/* AuthPaths */}
                <Route path="/auth/register/maker"  component={MakerPage} />
                <Route path="/auth/register/creative"  component={CreativePage} />
                <Route path="/auth/register"  component={RegisterPage} />
                <Route path="/auth/" component={LoginPage} />
               
                <AppContainer  >
                    {/* CreativePaths */}
                    <Route path='/creative/home' name='Home' component={CreativeHome} />
                    <Route path='/creative/current' name='Home' component={CreativeCurrentProjectsPage} />
                    <Route path='/creative/history' name='Home' component={CreativeHistory} />
                    <Route path='/creative/product/:title' name='Home' component={Product} />
                    <Route path='/creative/project/:id' name='Home' component={CreativeProjectDetail} />

                    {/* MakerPath */}
                    <Route path='/maker/home' name='Home' component={MakerHome} />
                    <Route path='/maker/history' name='Home' component={MakerHistory} />
                    <Route path='/maker/current' name='Home' component={MakerCurrentProjectsPage} />
                    <Route path='/maker/project/:id' name='Home' component={MakerProjectDetail} />
                    <Route path='/maker/hjome' name='Home' component={MakerHome} />
                </AppContainer>
                

            </Switch>
        </Router>
    )
}

export default AppRouter;