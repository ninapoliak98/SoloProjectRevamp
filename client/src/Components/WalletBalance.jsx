import React, {useEffect, useState} from 'react';
import "./ConnectWallet"
import axios from "axios";
import {chainData} from "../Data/ChainData";



function WalletBalance({signer}) {
    const [balance, setBalance] = useState(null)
    const [loaded, setLoading] = useState(false)
    const [toBlock, setToBlock] = useState("");
    const [chainName, setChainName] = useState("")

    function getChainName(chainId) {
        if(chainId) {
            const result = chainData.filter(obj => {
                return obj.chain_num === chainId
            })
            console.log(result)
            setChainName(result[0].chain_name)
        }
    }

    async function fetchBalance(address, chain) {

        let res;

        if(toBlock){
            res = await axios.get(`http://localhost:3050/balance`, {
                params: { address: address, chain: chain, toBlock: toBlock },
            });
        }else{
            res = await axios.get(`http://localhost:3050/balance`, {
                params: { address: address, chain: chain },
            });
        }

        console.log(res);

        setBalance((res.data.result.balance / 1E18).toFixed(5))
    }
    useEffect(() => {
        if(signer !== null)
        {
            fetchBalance(signer.address, signer.chain).then((r)=> console.log(r))
            getChainName(signer.chain)
        }

    }, [signer])

    return (
     <div className="bg-slate-800 dark:border-slate-500 w-full rounded">
            {signer && chainName ?
                    <div className="min-w-0 flex flex-col space-y-1 font-semibold">
                        <div className="flex flex-row justify-between m-6 text-center">
                            <div className="flex flex-col ">
                                <p>
                                    {/*{chainName ? <h1>{chainName}</h1> : ""}*/}
                                </p>
                                <p className="text-slate-300 dark:text-slate-50 text-lg">
                                    {balance}
                                </p>
                                <h2 className="text-slate-500 text-sm leading-6 truncate">
                                    Balance
                                </h2>
                            </div>
                            <div className="flex flex-col">
                            <p className="text-slate-300 dark:text-slate-50 text-lg">
                               #
                            </p>
                            <h3 className="text-slate-500 dark:text-slate-400 text-sm leading-6 truncate overflow-hidden">
                                Transactions
                            </h3>
                            </div>
                        </div>
                </div> : ""
            }
        </div>

    );
}

export default WalletBalance;