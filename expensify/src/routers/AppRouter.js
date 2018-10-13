import React from 'react';
import { Switch, BrowserRouter, Route} from 'react-router-dom';
import ExpenseDashboard from '../components/ExpenseDashboard';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';



const AppRouter = () => {
    return <BrowserRouter key="browser-route">
        <div>
            <Header/>
            <Switch>
                <Route exact={true} path="/" component={ExpenseDashboard} />
                <Route  path="/create" component={AddExpensePage}/>
                <Route  path="/edit/:id" component={EditExpensePage}/>
                <Route  path="/help" component={HelpPage}/>
                <Route  component={NotFoundPage}/>
        </Switch> 
        </div>
    </BrowserRouter>
}

export default AppRouter;