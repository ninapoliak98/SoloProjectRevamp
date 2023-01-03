import React, {useEffect, useState} from 'react';
import {Link, useNavigate,} from "react-router-dom";
import {useAuth} from "../Context/firebaseContext";
import Sidebar from "./Sidebar";
import apiServices from "../Context/apiServices";
import SideNav from "./SideNav";

function Dashboard() {
   const { response }= apiServices("https://api.coingecko.com/api/v3/search/trending");
    console.log(response);

    return (
        <div className="flex">

                {/*Sidebar*/}
                <div>
                    <SideNav/>
                </div>
                {/*Center*/}
                <div className="bg-gray-400 w-full">
                </div>

        </div>
    );
}

export default Dashboard;