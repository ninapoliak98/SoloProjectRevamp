import React from 'react';
import apiServices from "../Context/apiServices";

function Market() {
    const { response }= apiServices("https://api.coingecko.com/api/v3/coins/list");
    console.log(response);
    return (
        <div></div>
    );
}

export default Market;