import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {useAuth} from "../Context/firebaseContext";
import {navData} from "../Data/NavData"
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import ConnectWallet from "./ConnectWallet";


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
            <div className={`${open ? "w-72" :" w-20"} flex flex-col overflow-y-auto py-4 px-3 bg-[#1c2125] rounded dark:bg-gray-800 h-full`}>
                <span className="ml-3 items-center">Logo</span>
                <button className={"flex items-center m-4"} onClick={toggleMenu}>
                    {open? <KeyboardDoubleArrowLeftIcon style={{color:"#2990ad"}}/>: <KeyboardDoubleArrowRightIcon style={{color:"#2990ad"}} />}
                </button>
                {navData.map(item =>{
                    return <div key={item.id} className="flex items-center  p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-400 dark:hover:bg-gray-700">
                        {/*Fix so that on click the logout logs the account out*/}
                        <Link to={item.link}>
                            {item.icon}
                        </Link>
                        {open ? <span className="ml-3 text-white">{item.text}</span> : <span></span>}
                    </div>
                })}
                <div className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-400 dark:hover:bg-gray-700">
                    <button onClick={handleLogout}>
                        <ExitToAppIcon style={{color:"#2990ad"}}/>
                        {open ? <span className="ml-3 text-white text-base font-norma">Log Out</span> : <span></span>}
                    </button>
                </div>
            </div>
    );
}

export default SideNav;