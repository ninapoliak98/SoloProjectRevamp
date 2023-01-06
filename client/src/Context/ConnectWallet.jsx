import React, {useState} from 'react';
import Web3Modal from "web3modal";
import {ethers} from "ethers";
import WalletConnectProvider from "@walletconnect/web3-provider";
import WalletLink from "walletlink";

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

    const connect = async () => {
        try {
            const web3ModalInstances = await web3Modal.connect();
            const web3ModalProvider = new ethers.providers.Web3Provider(web3ModalInstances);
            const signer = web3ModalProvider.getSigner();
            setConnectedWallet(true)
            console.log(web3ModalProvider)
            console.log(signer.getAddress())
        } catch (e) {
            console.error(e)
        }
    }
    const disconnect = async () => {
        web3Modal.clearCachedProvider();
        window.localStorage.clear();
        setConnectedWallet(false);
    }

    return (
        <div>
            {!connectedWallet ?  <button className="w-100 m-3" onClick={connect}>Connect</button> :
                <button className="w-100 m-3" onClick={disconnect}>Disconnect</button>}
        </div>
    );
}

export default ConnectWallet;