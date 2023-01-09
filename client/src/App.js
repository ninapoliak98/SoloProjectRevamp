import './App.css';
import Signup from "./Components/Signup";
import {AuthProvider} from "./Context/firebaseContext";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import Login from "./Components/Login";
import PrivateRoute from "./Components/PrivateRoute";
import ForgotPassword from "./Components/ForgotPassword";
import { Web3ReactProvider } from '@web3-react/core'
import { Web3Provider } from "@ethersproject/providers";


function getLibrary(provider) {

    return new Web3Provider(provider);

}

function App() {
    return (
        <div className="">
            <Router>
                <AuthProvider>
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <PrivateRoute>
                                        <Web3ReactProvider getLibrary={getLibrary}>
                                            <Dashboard />
                                        </Web3ReactProvider>
                                </PrivateRoute>
                            }
                        />
                        <Route path="/signup" element={<Signup/>}/>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/forgot-password" element={<ForgotPassword/>}/>
                    </Routes>
                </AuthProvider>
            </Router>
        </div>
    );
}

export default App;
