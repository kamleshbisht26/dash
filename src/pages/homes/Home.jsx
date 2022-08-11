
import React from 'react'
import Navbar from '../../Components/navbar/Navbar'
import Sidebar from '../../Components/sidebar/Sidebar'
import Widgets from '../../Components/widget/Widgets';
import './Home.scss';
function Home() {
  return (
    <div className='homes'>

      
      <Sidebar/>

      <div className="home_container">

        <Navbar/>
        <div className="widgets">
                 <Widgets/>
                 <Widgets/>
                 <Widgets/>
                 <Widgets/>
      </div>
      </div>
    

    </div>
  
  )
}

export default Home