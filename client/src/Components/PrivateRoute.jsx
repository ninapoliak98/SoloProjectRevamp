import React from 'react';
import {Navigate, Route} from "react-router-dom";
import {useAuth} from "../Context/firebaseContext";

function PrivateRoute({ children }) {
    const {currentUser } = useAuth();

    return currentUser ? children : <Navigate to="/login" />;
}

export default PrivateRoute;