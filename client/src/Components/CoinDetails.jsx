import React, {useEffect, useState} from 'react';
import apiServices from "../Context/apiServices";
import axios from "axios";

function CoinDetails({coin, show, setShow}) {
    const [response, setResponse] = useState(null)

    const close = () => {
        setShow(false)
    }
    const fetchData = async (coinName) => {
            try {
                const result = await axios(`https://api.coingecko.com/api/v3/coins/${coinName}?localization=false&tickers=true&market_data=true&community_data=false&developer_data=false&sparkline=false`);
                setResponse(result.data);
            } catch (err) {
                console.log(err)
            }
    }
    useEffect( () => {
        if(show) fetchData(coin.name.toLowerCase())

    }, [show])

    return ((show) ? (
        <div className="flex flex-col w-2/3 h-auto bg-slate-700 absolute -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2 shadow-2xl shadow-slate-900 rounded">
            <button onClick={close} className="text-2xl absolute top-0 right-0 h-8 w-10 font-semibold">x</button>
            <hr className="h-px mt-9 bg-gray-200 border-0 dark:bg-gray-700 shadow shadow-slate-800"></hr>
            <div className="grid grid-rows-4 grid-flow-col gap-4 m-4">
                <div className="flex flex-row justify-start col-span-3 bg-slate-800 rounded shadow shadow-slate-900">
                    <div className="flex flex-col m-4 text-left justify-center">
                        <p className=" text-xs m-0 font-semibold">{coin.name}</p>
                        <h1 className="text-xl m-0 font-semibold">Current Price</h1>
                        <p className=" text-xs m-0 font-semibold">Percent/Dollar change</p>
                    </div>
                </div>
                <div className="col-span-1 bg-slate-800 text-left rounded shadow shadow-slate-900 overflow-auto">
                    <h1 className="font-bold text-xl ml-2">About</h1>
                    {coin && response ? <div className="ml-4 mb-4 mt-2">
                        <p>  Symbol: {coin.symbol} </p>
                        <p>  Rank: {coin.market_cap_rank} </p>
                        <p className="break-words">  {response.description.en}:  </p>
                    </div> : ""}
                </div>
                <div className="row-span-2 col-span-1 bg-slate-800 rounded shadow shadow-slate-900 text-left">
                    <h1 className="font-bold text-xl ml-2">Statistics</h1>
                    <div className="ml-4 mb-4 mt-2">
                        <p>  Market Cap </p>
                        <p>  Volume </p>
                        <p>  Circulating Supply </p>
                        <p>  Popularity </p>
                        <p>  ATH </p>
                        <p>  ATL </p>
                    </div>

                </div>
                <div className="row-span-3 col-span-2 w-100 bg-slate-800 rounded shadow shadow-slate-900">
                    <h1>Graph</h1>
                </div>
            </div>
        </div>
        ) : ""
    );
}

export default CoinDetails;