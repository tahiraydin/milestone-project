import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import NavBar from '../components/NavBar';
const AppRouter = () => {
    return (
        <Router>
            <NavBar/>
            <Switch>
                <Route path = "/" component = {Dashboard} />
            </Switch>
        </Router>
    )
}
export default AppRouter;
