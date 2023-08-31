import React from 'react'
import {FaTwitter, FaInstagram, FaFacebook} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footercol">
            <div className="footers">
                <h2>Company</h2>
                <ul>
                    <li>Hormud</li>
                    <li>astan</li>
                    <li>salam</li>
                    <li>mybank</li>
                </ul>
            </div>
            <div className="footers">
                <h2>Brand</h2>
                <ul>
                    <li>Hormud</li>
                    <li>astan</li>
                    <li>salam</li>
                    <li>mybank</li>
                </ul>
            </div>
            <div className="footers">
                <h2>Support</h2>
                <ul>
                    <li>Hormud</li>
                    <li>astan</li>
                    <li>salam</li>
                    <li>mybank</li>
                </ul>
            </div>
            <div className="footers">
                <h2>Contact</h2>
                <ul>
                    <li><FaFacebook className='icons'/></li>
                    <li><FaTwitter  className='icons'/></li>
                    <li><FaInstagram  className='icons'/></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer