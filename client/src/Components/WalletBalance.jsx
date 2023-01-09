import React, {useEffect, useState} from 'react';
import "./ConnectWallet"
import Moralis  from 'moralis';
import { EvmChain } from '@moralisweb3/evm-utils';

function WalletBalance({signer}) {
    const [balance, setBalance] = useState(null)
    console.log(signer)

    const getBalance = async () => {

    }
    useEffect(() => {
        getBalance().then(r => console.log(r))
    }, [])
    return (
     <div class="bg-slate-800 dark:border-slate-500 w-full">
            {signer ?
                    <div className="min-w-0 flex flex-col space-y-1 font-semibold">
                        <div className="flex flex-row justify-between m-6 text-center">
                            <div className="flex flex-col">
                                <p className="text-slate-300 dark:text-slate-50 text-lg">
                                    # ETH
                                </p>
                                <h2 className="text-slate-500 text-sm leading-6 truncate">
                                    Balance : {balance}
                                </h2>
                            </div>
                            <div className="flex flex-col">
                            <p className="text-slate-300 dark:text-slate-50 text-lg">
                               #
                            </p>
                            <h3 className="text-slate-500 dark:text-slate-400 text-sm leading-6 truncate">
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