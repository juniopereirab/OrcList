import { Route, Redirect, RouteProps } from 'react-router-dom';
import { getCurrentUser } from './services/auth';

export const ProtectedRoute = ({...routesProps}: RouteProps) => {
    if(getCurrentUser()){
        return <Route {...routesProps}/>;
    }
    else {
        return <Redirect to={{pathname: '/login'}} />
    }
};