import React from 'react';

function Send(props) {

    const sendETH = () => {

    }
    return (
        <form className="flex flex-col text-slate-300 dark:text-slate-50 text-sm">
            <label htmlFor="receiverAdd" className="block text-sm font-medium text-gray-700 undefined text-center">
                Receiver
            </label>
            <div className="flex flex-col items-center">
                <input
                    name="receiver"
                    type="receiver"
                    className="block w-1/3 h-8 mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
            </div>
            <label htmlFor="amountSend" className="block text-sm font-medium text-gray-700 undefined text-center">
                Amount
            </label>
            <div className="flex flex-col items-center">
                <input
                    name="amount"
                    type="amount"
                    className="block w-1/3 h-8 mt-1 border-gray-300 rounded-md shadow-sm"
                />
            </div>
            <button className="m-2">
                Send
            </button>
        </form>
    );
}

export default Send;