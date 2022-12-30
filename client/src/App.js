import './App.css';
import Signup from "./Components/Signup";
import {AuthProvider} from "./Context/firebaseContext";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import Login from "./Components/Login";
import PrivateRoute from "./Components/PrivateRoute";
import ForgotPassword from "./Components/ForgotPassword";

function App() {
    return (
        <div>
            <Router>
                <AuthProvider>
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <PrivateRoute>
                                    <Dashboard />
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
