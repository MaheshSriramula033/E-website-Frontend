import React, { useContext, useState ,useRef} from 'react'
import './Navbar.css'
import logo from '../Images/logo.png'
import cart_icon from '../Images/cart_icon.png'
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
import menu_icon from '../Images/icons8-menu-50.png';
import close_icon from '../Images/close.png'
<link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/svg-with-js.min.css'></link>
export default function Navbar() {
    const[menu,setmenu]=useState("shop");
    const{getTotalCartItems}=useContext(ShopContext);
    const menuRef=useRef(null);
    const closeIconRef=useRef(null);
    const dropdown_toggle = (e) => {
      if (menuRef.current) {
        menuRef.current.classList.toggle('show'); // Toggle the 'sidebar' class
      } if(closeIconRef.current){
        closeIconRef.current.classList.toggle('visible');
      }
      document.body.classList.toggle('no-scroll');
    };
    const close_menu=(e)=>{
      if(menuRef.current){
        menuRef.current.classList.remove('show');
      }
      if(closeIconRef.current){
        closeIconRef.current.classList.remove('visible');
      }
      document.body.classList.toggle('no-scroll');
    }

  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt="" />
            <p>SHOPPING</p>
        </div>
        
        <form className="d-flex" role="search" id='search'>
  <input
    className="form-control me-2"
    type="search"
    placeholder="Search"
    aria-label="Search"
  />
  <button className="btn btn-outline-success" type="submit">
    Search
  </button>
</form>
        <div className='nav-menu-container'>
        <img className='nav-dropdown' onClick={dropdown_toggle} src={menu_icon} alt=''/>
        <ul className='nav-menu'>
        <li onClick={()=>{setmenu("shop")}}><Link to="/">Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
        <li onClick={()=>{setmenu("mens")}}><Link to="/mens">Men</Link>{menu==="mens"?<hr/>:<></>}</li>
        <li onClick={()=>{setmenu("womens")}}><Link to="/women">Women</Link>{menu==="womens"?<hr/>:<></>}</li>
        <li onClick={()=>{setmenu("kids")}}><Link to="/kids">Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
      </ul>
        </div>
      <div className="nav-login-cart">
       <Link to="/login"> <button>Login</button></Link> 
       <Link to='/cart'><img src={cart_icon} alt="" id='cart'/></Link> 
        <div className="nav-cart-count">{getTotalCartItems()}</div>
        <i className="fa-solid fa-bars" style={{ color: "white" }} id='menu-icon' />
      </div>
      <div className='sidebar' ref={menuRef}>
        <div className="sidebar-header">
        <img src={logo}alt=''/>
        <h2>SHOPPING</h2>
        </div>
        <ul>
        <li onClick={()=>{setmenu("mens")}}><Link to="/mens">Men</Link>{menu==="mens"?<hr/>:<></>}</li><hr/>
        <li onClick={()=>{setmenu("womens")}}><Link to="/women">Women</Link>{menu==="womens"?<hr/>:<></>}</li><hr/>
        <li onClick={()=>{setmenu("kids")}}><Link to="/kids">Kids</Link>{menu==="kids"?<hr/>:<></>}</li><hr/>
      </ul>
        </div>
        <img  onClick={close_menu} ref={closeIconRef} className='close_icon' src={close_icon} alt=''/>
    </div>
  )
}
