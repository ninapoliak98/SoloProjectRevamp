import React, {useState} from 'react';
import {Link, useNavigate,} from "react-router-dom";
import {useAuth} from "../Context/firebaseContext";
import Sidebar from "./Sidebar";


function Dashboard() {

    return (
        <div>
            <div className="w-80">
                <Sidebar/>
            </div>
        </div>







    );
}

export default Dashboard;