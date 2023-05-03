import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import './PrivateRoute.css'

const PrivateRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    console.log('user in private route', user);

    if (user) {
        return children;
    }
    if (loading) {
        return <div class="loader mx-auto"></div>
    }
    return <Navigate state={{from: location}} to="/login" replace></Navigate>;
    
};

export default PrivateRoute;