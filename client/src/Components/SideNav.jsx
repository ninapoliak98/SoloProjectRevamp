import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {useAuth} from "../Context/firebaseContext";
import {navData} from "./NavData"
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';


function SideNav(props) {
    const [error, setError] = useState('')
    const {logout } = useAuth();
    const [open, setOpen] = useState(false);
    const navigate  = useNavigate();

    const toggleMenu = () => {
        return setOpen(!open)
    }

    async function handleLogout() {
        setError("")
        try {
            await logout();
            navigate("/login")
        } catch  {
            setError("failed to logout")
        }
    }

    return (
        <div className={`${open ? "w-72" :" w-20"} flex flex-col overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800 h-screen`}>
            <button className={"flex items-center m-4"} onClick={toggleMenu}>
                {open? <KeyboardDoubleArrowLeftIcon />: <KeyboardDoubleArrowRightIcon />}
            </button>
            {navData.map(item =>{
                    return <div key={item.id} className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                        <Link to={item.link} >
                            {item.icon}
                        </Link>
                        {open ? <span className="ml-3">{item.text}</span> : <span></span>}
                    </div>
            })}

        </div>
        // <div className="flex flex-col overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800 h-screen">
        //
        //     {/*Logo*/}
        //     <span className="ml-3 whitespace-nowrap" >Crypto</span>
        //     {/*Links to other pages*/}
        //     <div className="flex flex-col h-screen justify-between">
        //         <ul className="space-y-2 mt-4">
        //             <li>
        //                 <Link to="/"
        //                       className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
        //                     {/*Icon here*/}
        //                     <span className="ml-3">Dashboard</span>
        //                 </Link>
        //             </li>
        //             <li>
        //                 <Link to="/analytics"
        //                       className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
        //                     {/*Icon here*/}
        //                     <span className="flex-1 ml-3 whitespace-nowrap">Analytics</span>
        //                 </Link>
        //             </li>
        //             <li>
        //                 <Link to="/settings"
        //                       className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
        //                     {/*Icon Here*/}
        //                     <span className="flex-1 ml-3 whitespace-nowrap">Settings</span>
        //                 </Link>
        //             </li>
        //         </ul>
        //         {/* Profile Pic and Logout  */}
        //         <div className="">
        //             <button onClick={handleLogout}>Log Out</button>
        //         </div>
        //     </div>
        // </div>

    );
}

export default SideNav;