import React, {createContext, useContext, useState} from 'react';
import Web3Modal from "web3modal";
import {ethers} from "ethers";
import WalletConnectProvider from "@walletconnect/web3-provider";
import WalletLink from "walletlink";
import WalletBalance from "./WalletBalance";
const providerOptions = {
    binancechainwallet: {
        package: true
    },
    walletconnect: {
        package: WalletConnectProvider,
        options: {
            infuraId: process.env.INFURA_KEY
        }
    },
    walletlink: {
        package: WalletLink,
        options: {
            appName: "Crypto App",
            infuraId: process.env.INFURA_KEY,
            rpc: "",
            chainId: 1,
            appLogoUrl: null,
            darkMode: true
        }
    },
};
let web3Modal = new Web3Modal({
    providerOptions,
    network: "rinkeby",
    theme: "dark",
    cacheProvider: true,
})



function ConnectWallet() {
    const [accounts, setAccounts] = useState(null)
    const [connectedWallet, setConnectedWallet] = useState(false)
    const [loading, setLoading] = useState(false)


    const connect = async () => {
        if(!accounts) setAccounts("no account connected yet")
        try {
            setLoading(true);
            const web3ModalInstances = await web3Modal.connect();
            const web3ModalProvider = new ethers.providers.Web3Provider(web3ModalInstances);
            const signer = await web3ModalProvider.getSigner();
            setConnectedWallet(true)
            setAccounts({address: await signer.getAddress(),
                                chain: await signer.getChainId()})
        } catch (e) {
            console.error(e)
        } finally {
            setLoading(false)
        }
    }
    const disconnect = async () => {
        web3Modal.clearCachedProvider();
        window.localStorage.clear();
        setConnectedWallet(false);
        setAccounts("")
    }
    return(
        <div>
            <div className= "flex flex-row w-2/3 m-4">
                <div className="w-1/3">
                    <h1 className="mb-3">Overview:</h1>
                    <WalletBalance signer = {accounts}/>
                </div>
                <div className="w-2/3">
                    <div className="flex flex-row text-center align-middle justify-between ml-4">
                        <h1 className="mb-3">Connect Wallet: </h1>
                        {!connectedWallet ?
                            <button className="h-8 px-4 font-bold text-sm text-white transition-colors duration-150 bg-[#2990ad] rounded-full focus:shadow-outline hover:bg-slate-800" onClick={connect}>Connect</button>
                            :
                            <button className="h-8 px-4 font-bold text-sm text-white transition-colors duration-150 bg-[#2990ad] rounded-full focus:shadow-outline hover:bg-slate-800" onClick={disconnect}>Disconnect</button>}
                    </div>

                </div>
            </div>
        </div>

    );

}

export default ConnectWallet;