import DashboardIcon from '@mui/icons-material/Dashboard';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import SettingsIcon from '@mui/icons-material/Settings';



export const navData = [
    {
        id: 0,
        icon: <DashboardIcon style={{color:"#2990ad"}}/>,
        text: "Dashboard",
        link: "/"
    },
    {
        id: 1,
        icon: <AnalyticsIcon style={{color:"#2990ad"}}/>,
        text: "Analytics",
        link: "/crypto"
    },
    {
        id: 2,
        icon: <SettingsIcon style={{color:"#2990ad"}}/>,
        text: "Settings",
        link: "/settings"
    },

]