import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {useAuth} from "../Context/firebaseContext";

function Sidebar(props) {
    const [error, setError] = useState('')
    const {currentUser, logout } = useAuth();
    const navigate  = useNavigate();
;

    async function handleLogout() {
        setError("")
        try {
            await logout();
            navigate("/login")
        } catch  {
            setError("failed to logout")
        }
    }
    return (
            <div className="flex flex-col overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800 h-screen">

            </div>

    );
}

export default Sidebar;