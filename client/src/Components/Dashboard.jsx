import React, {useEffect, useState} from 'react';
import apiServices from "../Context/apiServices";
import SideNav from "./SideNav";
import ConnectWallet from "./ConnectWallet";
import Trending from "./Trending";
import Market from "./Market";

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
                    <div className="w-3/5">
                        <Trending/>
                    </div>
                </div>
            <Market/>

        </div>
    );
}

export default Dashboard;