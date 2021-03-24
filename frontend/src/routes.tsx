import { Route, Switch } from 'react-router-dom';

import Login from './pages/Login';
import Main from './pages/Main';

const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact component={Main}/>
            <Route path="/login" component={Login}/>
        </Switch>
    );
}

export default Routes;