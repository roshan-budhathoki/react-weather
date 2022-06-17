import React from 'react'
import { Navigate } from 'react-router-dom';

const PreventUser = ({children}) => {
    const userDetails = JSON.parse(localStorage.getItem("userDetails"));
    if(userDetails.login){
        return <Navigate to="/dashboard" replace />;
    }
    return children;
}

export default PreventUser