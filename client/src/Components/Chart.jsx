import React from 'react';
import apiServices from "../Context/apiServices";

function Chart(props) {
    const {coinMarket, loading }= apiServices("https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=USD&days=1");

    return (
        <div>


        </div>
    );
}

export default Chart;