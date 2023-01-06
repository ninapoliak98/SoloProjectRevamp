import React, {useState} from 'react';
import WalletBalance from "./WalletBalance";

function Wallet() {
    const [account, setAccount] = useState(null)



    return (
        <div>
            <WalletBalance/>
        </div>
    );
}

export default Wallet;