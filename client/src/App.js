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
import Market from "./Components/Market";
import SideNav from "./Components/SideNav";


function getLibrary(provider) {

    return new Web3Provider(provider);

}

function App() {
    return (
        <div className="">
            <Router>
                <AuthProvider>
                    <Routes>
                        <Route path="/signup" element={<Signup/>}/>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/forgot-password" element={<ForgotPassword/>}/>
                    </Routes>
                    <div className="flex bg-[#161a1d] text-white">
                    <SideNav/>
                        <div className="w-full">
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
                        <Route path="/crypto" element={<Market/>}/>
                        <Route path="/settings" element={<ForgotPassword/>}/>
                    </Routes>
                        </div>
                    </div>
                </AuthProvider>
            </Router>
        </div>
    );
}

export default App;
