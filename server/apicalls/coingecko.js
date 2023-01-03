const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false";
const trendingUrl = "https://api.coingecko.com/api/v3/search/trending";

exports.getCoinGeckoALl = async (req, res) => {
        res = await fetch(trendingUrl);
        const json = await res.json();
        console.log(json)
}
