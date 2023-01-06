import React, {useEffect, useState} from 'react';
import {Link, useNavigate,} from "react-router-dom";
import {useAuth} from "../Context/firebaseContext";
import Sidebar from "./Sidebar";
import apiServices from "../Context/apiServices";
import SideNav from "./SideNav";
import ConnectWallet from "./ConnectWallet";
import MainContent from "./MainContent";

function Dashboard() {
   const { response }= apiServices("https://api.coingecko.com/api/v3/search/trending");
    console.log(response);

    return (
        <div className="flex bg-[#161a1d] text-white">

                {/*Sidebar*/}
                <div>
                    <SideNav/>
                </div>
                {/*Center*/}
                <div className=" w-full">
                    <ConnectWallet/>
                    <MainContent/>
                </div>

        </div>
    );
}

export default Dashboard;