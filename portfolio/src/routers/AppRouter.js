import React from 'react';
import { Switch, BrowserRouter, Route} from 'react-router-dom';
import HomePage from '../components/Home';
import NotFoundPage from '../components/NotFound';
import Header from '../components/Header';
import PortfolioPage from '../components/Portfolio';
import PortfolioItemPage from '../components/PortfolioItemPage';
import ContactPage from '../components/ContactPage';

const AppRouter = () => {
    return <BrowserRouter key="browser-route">
        <div>
            <Header/>
            <Switch>
                <Route exact={true} path="/" component={HomePage}/>
                <Route exact={true} path='/portfolio' component={PortfolioPage}/>
                <Route path='/portfolio/:id' component={PortfolioItemPage}/>
                <Route path="/contact" component={ContactPage} />
                <Route  component={NotFoundPage}/>
        </Switch> 
        </div>
    </BrowserRouter>
}

export default AppRouter;