import React from 'react'
import './Sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import InventoryIcon from '@mui/icons-material/Inventory';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import BarChartIcon from '@mui/icons-material/BarChart';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream';
import PsychologyIcon from '@mui/icons-material/Psychology';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonPinIcon from '@mui/icons-material/PersonPin';
function Sidebar() {
  return (
<div className="sidebar">
    <div className="top">

      <span className='logo'>lamadmin</span>

    </div>
    <hr />

    <div className="middle">
   <ul className='middle_ul'>

    <p className="title">Main</p>
    <li>  <DashboardIcon className='icon'/>   <span>dashboard</span></li>
    <p className="list">List</p>
    <li>   <PersonIcon className='icon'/>  <span>Users</span></li>
    <li>  < InventoryIcon className='icon'/>   <span>Products</span></li>
    
    <li> <FavoriteBorderIcon className='icon' />  <span>Orders</span></li>
    <li>  <LocalPostOfficeIcon className='icon'/>   <span>Delivery</span></li>
    <p className="useful">Useful</p>
    <li>  <BarChartIcon className='icon'/>   <span>stats</span></li>
    <li>   <CircleNotificationsIcon className='icon' />  <span>Notification</span></li>
   <p className="services">Services</p>
    <li>   <SettingsSystemDaydreamIcon className='icon'/>  <span>System Health</span></li>

    <li>  <PsychologyIcon className='icon'/>   <span>Logs</span></li>
    <li>  <SettingsIcon className='icon'/>   <span>Settings</span></li>
    <p className="user">User</p>
    <li>   <PersonPinIcon className='icon'/>  <span>Profile</span></li>
    <li>   <LogoutIcon className='icon'/>  <span>Logout</span></li>
   </ul>



    </div>

    <div className="bottom"> 
    
    <div className="coloroption"></div>
    <div className="coloroption"></div>
    <div className="coloroption"></div>
    </div>



</div>
  )
}

export default Sidebar