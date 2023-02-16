import React from 'react';
import apiServices from "../Context/apiServices";
import CoinTrending from "./CoinTrending";
import {Table} from "@mui/material";

function Market() {
    const { response }= apiServices('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false');
    function tablePages() {
        
    }
    console.log(response)
    return (
        <div className="bg-slate-800 rounded">
            <h1 className="text-slate-300 font-bold p-3">Trending:</h1>
                <table className="min-w-full divide-y divide-gray-200">
                    <thead>
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cryptocurrency</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Market Cap</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Volume</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price Change 24h</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Percent Change 24h</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Trend</th>
                    </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                    {response && response.map(elem =>
                        <tr key={elem.id}>
                            <td className="flex flex-row text-left items-center px-6 py-4 whitespace-nowrap h-1/3 max-h-20">
                                {elem.id}
                                <img className="scale-[.25] ml-auto" src={elem.image} alt={elem.id}/>
                            </td>
                            <td className="text-left px-6 py-4 pl-0 whitespace-nowrap m-0">
                                {elem.current_price}
                            </td>
                            <td className="text-left px-6 py-4 whitespace-nowrap m-0">
                                {elem.market_cap}
                            </td>
                            <td className="text-left px-6 py-4 whitespace-nowrap m-0">
                                {elem.total_volume}
                            </td>
                            <td className="text-left px-6 py-4 whitespace-nowrap m-0">
                                {elem.price_change_24h}
                            </td>
                            <td className="text-left px-6 py-4 whitespace-nowrap m-0">
                                {elem.price_change_percentage_24h}
                            </td>
                            <td className="text-left px-6 py-4 whitespace-nowrap m-0">
                             {/*Check precent change if pos add a pos trend if neg add neg trend*/}
                            </td>
                        </tr>

                    )}
                    </tbody>
                </table>
            </div>
    );
}

export default Market;