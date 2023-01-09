import React from 'react';

function CoinTrending({coin}) {
    return (
        <div className="flex flex-col mb-2 hover:bg-gray-600  bg-slate-900 text-slate-300 rounded">
                <div className="flex justify-between">
                    <p className="m-4">{coin.name}</p>
                    <p className="m-4 border-2 border-green-300 rounded-full px-4 py-1 text-center text-xs">price</p>
                </div>
                <div className="w-full flex justify-center m-2 mb-6">
                    <img src={coin.small} alt={coin.name} className="m-2 p-5 rounded-full shadow-2xl shadow-slate-800"/>
                </div>
        </div>
    );
}

export default CoinTrending;