import React from 'react'
import "./Footer.css"
import footer_logo from "../Images/logo_big.png"
import instagram_icon from "../Images/instagram_icon.png"
import pintester_icon from "../Images/pintester_icon.png"
import whatsapp_icon from "../Images/whatsapp_icon.png"
function Footer() {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={footer_logo}alt="" />
        <p>SHOPPER</p>
      </div>
      <ul className='footer-links'>
      <li>Company</li>
      <li>Product</li>
      <li>Offices</li>
      <li>About</li>
      <li>Contact</li>
      </ul>
      <div className="icons">
        <div className="icon-container">
            <img src={instagram_icon} alt="" />
        </div>
        <div className="icon-container">
            <img src={whatsapp_icon} alt="" />
        </div>
        <div className="icon-container">
            <img src={pintester_icon} alt="" />
        </div>
      </div>
      <div className="footer_copyright">
        <hr/>
        <p>Copyright @2024 -All</p>
      </div>
    </div>
  )
}

export default Footer
