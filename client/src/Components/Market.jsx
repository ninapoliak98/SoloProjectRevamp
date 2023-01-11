import React from 'react';
import apiServices from "../Context/apiServices";

function Market() {
    const { response }= apiServices('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false');
    return (
        <div></div>
    );
}

export default Market;