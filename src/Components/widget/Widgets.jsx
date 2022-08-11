import React from 'react'
import './Widgets.scss'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
function Widgets({type}) {
    let data;
    
    switch(type){
       case"users":
       data=  {
        title: "user",
        ismoney:"false",
        link:"see all users",
        icons:"<PersonIcon className='icons'/>",
       

    }; 
    break;
    case"order":
    data=  {
     title: "order",
     ismoney:"false",
     link:"see all users",
     icons:"<ShoppingCartIcon className='icons'/>",
    

 }; 
 break;
 case"earning":
 data=  {
  title: "earning",
  ismoney:"true",
  link:"see all users",
  icons:"< MonetizationOnIcon  className='icons'/>",
 

}; 
break;
case"balance":
data=  {
 title: "balance",
 ismoney:"true",
 link:"see all users",
 icons:"<AccountBalanceIcon className='icons'/>",


}; 
break;



}
  return (
<div className="widget">
    <div className="top-left">
  <span className="title">{data.title}</span>
  <span className="counter">{data.ismoney}</span>
  <span className="link">{data.link}</span>


    </div>
    <div className="top-right"><div className="arrow-up"><span><KeyboardArrowUpIcon/></span><span className='percentage positive'>20%</span></div>
     <span className='icon-person'><PersonIcon className='icons'/></span></div>
    
</div>
  )
}


export default Widgets