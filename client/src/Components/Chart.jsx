import React, {useState} from 'react';
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
    const {day} = apiServices("https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=USD&days=1");



    return (
        <div className="flex flex-col w-full">
        <div className="flex gap-1">
            <button>1 hr</button>
            <button>1 day</button>
            <button>1 week</button>
            <button>2 week</button>
            <button>1 month</button>
        </div>

        </div>
    );
}

export default Chart;