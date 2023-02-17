import React, {useState} from 'react';
import Send from "./Send";
import Receive from "./Receive";

function Wallet() {
    const [transaction, setTransaction] = useState("")
    return (
        <div className="flex justify-between ">
          <div className="m-auto p-9 bg-slate-800 dark:border-slate-500 w-full hover:bg-gray-600 rounded" onMouseEnter={() => setTransaction("send")} onMouseLeave={() => console.log('org')}>
                Send
          </div>
           <div className="m-auto p-9 w-full hover:bg-gray-600 bg-[#2990ad] rounded" onMouseEnter={() => console.log('receive')} onMouseLeave={() => console.log('orig')}>
               Receive
           </div>
          {/*<Send/>*/}
          {/* <Receive/>*/}
        </div>
    );
}

export default Wallet;