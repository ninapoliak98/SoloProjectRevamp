import React, {useEffect, useState} from 'react';
import apiServices from "../Context/apiServices";
import axios from "axios";
import Chart from "./Chart";

function CoinDetails({coin, show, setShow}) {
    const [response, setResponse] = useState(null)

    const close = () => {
        setShow(false)
    }
    const fetchData = async (coinName) => {
            try {
                const result = await axios(`https://api.coingecko.com/api/v3/coins/${coinName}?localization=false&tickers=true&market_data=true&community_data=false&developer_data=false&sparkline=false`);
                setResponse(result.data);
                console.log(result.data)
            } catch (err) {
                console.log(err)
            }
    }
    useEffect( () => {
        if(show) fetchData(coin.name.toLowerCase())


    }, [show])

    return ((show) ? (
        <div className="flex flex-col w-4/5 h-auto  bg-slate-700 absolute -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2 shadow-2xl shadow-slate-900 rounded">
            <button onClick={close} className="text-2xl absolute top-0 right-0 h-8 w-10 font-semibold">x</button>
            <hr className="h-px mt-9 bg-gray-200 border-0 dark:bg-gray-700 shadow shadow-slate-800"></hr>
            {coin && response ? <div className="flex flex-col gap-4 m-4">
                <div className="flex flex-row justify-start col-span-3 bg-slate-800 rounded shadow shadow-slate-900 max-w-full max-h-20">
                   <div className="flex flex-col m-4 text-left justify-center">
                        <p className=" text-xs m-0 font-semibold">{coin.name}</p>
                        <h1 className="text-xl m-0 font-semibold">{response.market_data.current_price.usd}</h1>
                        <p className=" text-xs m-0 font-semibold">Percent/{response.market_data.price_change_percentage_1h_in_currency.usd}</p>
                    </div>
                </div>
                <div className="row-span-3 col-span-2 bg-slate-800 rounded shadow shadow-slate-900 max-w-full max-h-72 min-h-full">
                    <h1>Graph</h1>
                    <Chart coin = {coin.name}/>
                </div>
                <div className="flex flex-row gap-4 w-full ">
                    <div className=" bg-slate-800 text-left rounded shadow shadow-slate-900 overflow-auto max-h-52 p-5 min-w-fit">
                        <h1 className="font-bold text-xl ml-2">Statistics</h1>
                     <div className="ml-4 mb-4 mt-2">
                            <p>  Market Cap  {response.market_cap_rank}</p>
                            <p>  Volume  {response.market_data.total_volume.usd}</p>
                            <p>  Circulating Supply {response.market_data.circulating_supply} </p>
                            <p>  ATH {response.market_data.ath.usd}</p>
                            <p>  ATL {response.market_data.atl.usd}</p>
                        </div>
                    </div>
                    <div className=" bg-slate-800 text-left rounded shadow shadow-slate-900 overflow-auto max-h-52 p-5  max-w-7xl">
                        <h1 className="font-bold text-xl ml-2">About</h1>
                       <div className="ml-4 mb-4 mt-2">
                            <p>  Symbol: {coin.symbol} </p>
                            <p className=" m-0">  {response.description.en}:  </p>
                        </div>
                    </div>
                </div>
            </div> : ""}
        </div>
        ) : ""
    );
}

export default CoinDetails;