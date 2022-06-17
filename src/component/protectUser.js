import React from 'react'
import { Navigate } from 'react-router-dom';

const ProtectUser = ({children}) => {
    const userDetails = JSON.parse(localStorage.getItem("userDetails"));
    if(!userDetails?.login){
        return <Navigate to="/" replace/>
    }
    return children;
}

export default ProtectUser