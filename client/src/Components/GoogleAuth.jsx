import React, {useState} from 'react';
import {useAuth} from "../Context/firebaseContext";
import {useNavigate} from "react-router-dom";

function GoogleAuth() {
    const {loginGoogle, currentUser } = useAuth();
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate  = useNavigate();

    function handleSubmit() {
        try {
            setError("")
            loginGoogle();
            navigate("/")
        } catch {
            setError("Error logging in with Google Please try again")
        }
    }
    return (
        <button onClick={handleSubmit}>
            google
        </button>
    );
}

export default GoogleAuth;