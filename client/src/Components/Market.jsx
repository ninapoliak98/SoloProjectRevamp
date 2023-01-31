import React from 'react';
import apiServices from "../Context/apiServices";
import CoinTrending from "./CoinTrending";

function Market() {
    const { response }= apiServices('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false');
    console.log(response)
    return (
        <div className="bg-slate-800 m-4 rounded">
            <h1 className="text-slate-300 font-bold p-3">Trending:</h1>
            <div className="m-2 grid grid-cols-3 gap-2 p-2">
                {response && response.map(elem => <CoinTrending key = {elem.id} coin = {elem}/>)}
            </div>
        </div>
    );
}

export default Market;