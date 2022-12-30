import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {useAuth} from "../Context/firebaseContext";

function Dashboard() {
    const [error, setError] = useState('')
    const {currentUser, logout } = useAuth();
    const navigate  = useNavigate();

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
        <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50">
            <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-gray-100 shadow-md sm:max-w-lg sm:rounded-lg">
                <div className="flex flex-col text-grey-600 text-center justify-center items-center">
                    <h1 className="mt-2">Profile</h1>
                    <h2>Email: {currentUser.email}</h2>
                    <Link to="/update-profile" className="w-80 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-6 ">Update Profile</Link>
                </div>
            </div>
            {error &&  <div
                className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
                role="alert">
                <span className="font-medium">{error}</span>
            </div>}
            <div className="mt-4">
                <button className="text-purple-600 hover:underline" onClick={handleLogout}>Log Out</button>
            </div>
        </div>
    );
}

export default Dashboard;