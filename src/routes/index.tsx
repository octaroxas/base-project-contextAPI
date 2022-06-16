import React from 'react'
import AppRoutes from './AppRoutes';
import AuthRoutes from './AuthRoutes';

const Routes = () => {

    const auth = false;

    return (
        auth ? <AppRoutes /> : <AuthRoutes />
    )
}

export default Routes;
