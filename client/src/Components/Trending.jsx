import React from 'react';
import apiServices from "../Context/apiServices";
import CoinTrending from "./CoinTrending";

function Trending(props) {
    const { response, loading }= apiServices("https://api.coingecko.com/api/v3/search/trending");

    return (
        <div className="bg-slate-800 m-4 rounded">
            <h1 className="text-slate-300 font-bold p-3">Trending:</h1>
            <div className="m-2 grid grid-cols-3 gap-2 p-2">
                {response && response.coins.map(elem => <CoinTrending key = {elem.item.id} coin = {elem.item}/>)}

            </div>
        </div>
    );
}

export default Trending;