import { Route, Switch } from 'react-router-dom';

import Login from './pages/Login';
import Main from './pages/Main';
import Register from './pages/Register';

const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact component={Main}/>
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register}/>
        </Switch>
    );
}

export default Routes;