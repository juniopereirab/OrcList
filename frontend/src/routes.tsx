import { Route, Switch } from 'react-router-dom';

import Login from './pages/Login';

const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact component={Login}/>
        </Switch>
    );
}

export default Routes;