import React, {useState} from 'react';
import Web3Modal from 'web3modal'
import {ethers} from 'ethers'
import walletConnect from "@web3-onboard/walletconnect";

const providerOptions = {}

function ConnectWallet(props) {
    const [account, setAccount] = useState(null)

    const connectWallet = async () => {
        try {
            const web3modal = new Web3Modal({
                cacheProvider: false,
                providerOptions
            })
            const web3modalInstances = await web3modal.connect();
            const web3modalProvider = new ethers.providers.Web3Provider(web3modalInstances)
            console.log(web3modalProvider)
        } catch (e) {
            console.log(`connecting wallet error: ${e}`)
        }
    }
    return (
        <div>
            web3modal wallet connect
            <button onClick={connectWallet}>Connect</button>
        </div>
    );
}

export default ConnectWallet;