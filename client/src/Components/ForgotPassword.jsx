import React, {useRef, useState} from 'react';
import {useAuth} from "../Context/firebaseContext";
import {Link} from "react-router-dom";

function ForgotPassword() {
    const {currentUser, passwordReset } = useAuth();
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState("")

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            setMessage("")
            setError('')
            setLoading(true)
            await passwordReset(e.target.email.value);
            setMessage('Reset successful please check your email')
        } catch {
            setError('failed to reset password please try again')
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
                {message &&  <div
                    className="p-4 mb-4 text-sm text-green-800 bg-green-200 rounded-lg dark:bg-red-200 dark:text-red-800"
                    role="alert">
                    <span className="font-medium">{message}</span>
                </div>}
                <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-gray-100 shadow-md sm:max-w-lg sm:rounded-lg">
                    <div className="mt-2 text-center">
                        <h1 className="block text-3xl font-bold text-indigo-600 undefined">Reset Password</h1>
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
                        <button disabled={loading}
                                type="submit"
                                className="mt-8 group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                            Reset
                        </button>
                    </form>
                    {/*Already have an account Sign In*/}
                    <div className="mt-4 text-grey-600 text-center">
                        <span>
                           <Link className="text-purple-600 hover:underline" to="/login">Login</Link>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ForgotPassword;