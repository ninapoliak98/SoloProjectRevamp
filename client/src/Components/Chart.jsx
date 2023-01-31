import React, {useEffect, useState} from 'react';
import apiServices from "../Context/apiServices";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
} from 'recharts'

function Chart(coin) {
    const [timeSpan, setTimeSpan] = useState("")
    let {data} = apiServices(`https://api.coingecko.com/api/v3/coins/${coin.coin}/market_chart?vs_currency=USD&days=1`);


    return (
        <div className="flex flex-col w-full">
            <div className="flex gap-1">

            </div>

        </div>
    );
}

export default Chart;