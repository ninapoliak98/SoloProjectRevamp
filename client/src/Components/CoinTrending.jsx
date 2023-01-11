import React, {useState} from 'react';
import CoinDetails from "./CoinDetails";
import apiServices from "../Context/apiServices";

function CoinTrending({coin}) {
    const [show, setShow] = useState(false)
    const [details, setDetails] = useState(null)

    const handleClick = () => {
        setShow(!show)
    }
    return (
        <div className="flex flex-col hover:bg-gray-600  bg-slate-900 text-slate-300 rounded text-center" onClick={handleClick}>
                <div className="flex justify-between">
                    <p className="m-4">{coin.name}</p>
                    <p className="m-4 border-2 border-green-300 rounded-full px-4 py-1 text-center text-xs">price</p>
                </div>
                <div className="w-full flex justify-center m-2 mb-6">
                    <img src={coin.small} alt={coin.name} className="m-4 p-5 rounded-full shadow-2xl shadow-slate-800"/>
                    <CoinDetails show={show}  setShow={setShow} coin={coin}/>
                </div>
            <h1 className="mb-5">Price</h1>
        </div>
    );
}

export default CoinTrending;