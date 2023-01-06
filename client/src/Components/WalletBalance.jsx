import React from 'react';
import "./ConnectWallet"
import {ethers} from "ethers";


function WalletBalance({signer}) {

    const getBalance = () => {

    }


    return (
     <div class="bg-slate-800 dark:border-slate-500 w-1/4">
            {signer ?
                <div className="flex items-center space-x-4">
                    <div className="min-w-0 flex-auto space-y-1 font-semibold">
                        <h2 className="text-slate-500 dark:text-slate-400 text-sm leading-6 truncate">
                            Balance
                        </h2>
                        <p className="text-slate-900 dark:text-slate-50 text-lg">

                        </p>
                    </div>
                </div> : ""
            }
        </div>

    );
}

export default WalletBalance;