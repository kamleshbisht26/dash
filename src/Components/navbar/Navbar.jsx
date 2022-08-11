import React from 'react'
import './Navbar.scss'
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import MessageIcon from '@mui/icons-material/Message';
import MenuIcon from '@mui/icons-material/Menu';
function Navbar() {
  return (
 <div className="navbar">
  <div className="wrapper">
    
    <div className="search">
      <input type="text" placeholder='search...' /> <SearchIcon className='searchicon'/>
    </div>

   <div className="items">
 <div className="item">  <LanguageIcon className='LanguageIcon'/>   <span>English</span></div>
 <div className="item">  <DarkModeIcon className='DarkModeIcon'/>   </div>
 <div className="item">  <FullscreenExitIcon className='FullscreenExitIcon'/>   </div>
 <div className="item">  <CircleNotificationsIcon  className='CircleNotificationsIcon '/>  
 <div className="counter">1</div> </div>
 <div className="item">  <MessageIcon className='MessageIcon'/> <div className="counter">1</div>  </div>
 <div className="item">  <MenuIcon className='MenuIcon'/>   </div>
 <div className="item">  <img src="./assets/images/smart.png" alt="image-icon" className='image-icon' />   </div>


  
 
   </div>

  
   
   
  </div>

 </div>
  )
}

export default Navbar