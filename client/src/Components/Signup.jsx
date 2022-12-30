import React, {useRef, useState} from 'react';
import {useAuth} from "../Context/firebaseContext";
import {Link, useNavigate} from "react-router-dom";

function Signup() {
    const {signup, currentUser } = useAuth();
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate  = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        if(e.target.password.value !== e.target.confirm.value) {
            console.log('passwords dont match')
            return setError('passwords do not match');
        }

        try {
            setError('')
            setLoading(true)
            await signup(e.target.email.value, e.target.password.value)
            navigate('/login')
        } catch {
            setError('failed to create an account')
        }
        setLoading(false)
    }
    return (
        <div>
            <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50">

                {error &&  <div
                    className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
                    role="alert">
                    <span className="font-medium">{error}</span>
                </div>}
                <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-gray-100 shadow-md sm:max-w-lg sm:rounded-lg">
                    <div className="mt-2 text-center">
                        <h1 className="block text-3xl font-bold text-indigo-600 undefined">Sign Up</h1>
                    </div>
                    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                        {/*Email*/}
                        <div className="mt-4">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 undefined">
                                Email
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    name="email"
                                    type="email"
                                    className="block w-full h-8 mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                            </div>
                        </div>
                        {/* Password */}
                        <div className="mt-4">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 undefined">
                                Password
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="password"
                                    name="password"
                                    className="block w-full h-8 mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label htmlFor="password_confirmation" className="block text-sm font-medium text-gray-700 undefined">
                                Confirm Password
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="password"
                                    name = "confirm"
                                    className="block w-full h-8 mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                            </div>
                        </div>
                        <button disabled={loading}
                                type="submit"
                                className="mt-8 group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                            Sign Up
                        </button>
                    </form>
                    {/*Already have an account Sign In*/}
                    <div className="mt-4 text-grey-600 text-center">
                        Already have an account?{" "}
                        <span>
                           <Link className="text-purple-600 hover:underline" to="/login">Login</Link>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;