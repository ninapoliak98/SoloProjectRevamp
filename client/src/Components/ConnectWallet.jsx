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
            console.log(signer)
            setAccounts({address: await signer.getAddress()})
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
    const value = {
       accounts
    }

    return(
        <div>
            <div className={`${loading ? "backdrop-blur-xl bg-white/30" : "backdrop-filter-none"} w-2/3 m-4`}>
                {!connectedWallet ?  <button className="w-100 m-3" onClick={connect}>Connect</button> :
                    <button className="w-100 m-3" onClick={disconnect}>Disconnect</button>}
                <WalletBalance signer = {accounts}/>
            </div>
        </div>

    );

}

export default ConnectWallet;