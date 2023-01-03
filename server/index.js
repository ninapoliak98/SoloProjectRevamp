//imports
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const coinGeckoAPI = require("./apicalls/coingecko");
const express = require('express');
const app = express();
const router = require('./router.js');
const cors = require('cors');
//Port
const PORT = 8095;
//Cors
app.use(cors());
//app.use
app.use(express.json());
app.use(router);

// app.get('/coins', coinGeckoAPI.getCoinGeckoALl)
app.get("/coins", async (req, res) => {
    const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false";
    const response = await fetch(url);
    const json = await res.json();
    console.log(json)
})

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
})
