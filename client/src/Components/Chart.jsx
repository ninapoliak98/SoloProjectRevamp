import React, {useEffect, useState} from 'react';
import apiServices from "../Context/apiServices";
import moment from "moment";
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
    console.log(data)

    return (
        <div className="flex flex-col w-full">
            <div className="flex gap-1">
            {/*Buttons will go here for different date intervals*/}
            </div>
            <div>
                {/*Filter data, and fill in customizations, find the mins and highs of your data*/}
                <LineChart
                    width={}
                    height={}
                    data= {}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <XAxis dataKey="date"/>
                    <YAxis domain={[1000 , 2000]} allowDataOverflow={true} />
                    <Tooltip />
                    <Line type="monotone" dataKey="price"
                          stroke="black" activeDot={{ r: 8 }}/>
                </LineChart>
            </div>
        </div>
    );
}

export default Chart;