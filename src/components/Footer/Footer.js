import React from 'react';
import './Footer.css';

const Footer = () => {
   return (
      <div id='footer'>
         <h1 className='my-3'>Contacts</h1>
         <div className='social-icon'>
            <ul>
               <li><a href="#"> <i className="fab fa-facebook-f"></i></a></li>
               <li><a href="#"> <i className="fab fa-twitter"></i></a></li>
               <li><a href="#"> <i className="fab fa-instagram"></i></a></li>
               <li><a href="#"> <i className="fab fa-linkedin-in"></i></a></li>
               <li><a href="#"> <i className="fas fa-paper-plane"></i></a></li>
               <li><a href="#"> <i className="fab fa-discord"></i></a></li>
            </ul>
         </div>
         <div className='privacy-link my-5'>
            <p> <a style={{ opacity: '0.5' }} href='#'>Privacy Policy</a></p>
            <p><a style={{ opacity: '0.5' }} href='#'>Terms of Service</a></p>
            <p>  <a style={{ opacity: '0.3' }} href='#'>Copyright @ Bit Loyal 2022</a></p>
         </div>
         <div className="footerBottom">
            <ul className="py-3 navbar-nav d-flex align-items-center flex-row justify-content-center mb-2 mb-lg-0">
               <li className="nav-item">
                  <a className="nav-link " aria-current="page" href="#">About us</a>
               </li>
               <li className="nav-item">
                  <a className="nav-link active" rel='' aria-current="page" href="#">Tokenomics</a>
               </li>
               <li className="nav-item">
                  <a className="nav-link active" rel='no' aria-current="page" href="#">Roadmap</a>
               </li>
               <li className="nav-item">
                  <a className="nav-link active" rel='no' aria-current="page" href="#">FAQs</a>
               </li>
               <li className="nav-item">
                  <a className="nav-link active" rel='no' aria-current="page" href="#">Contacts</a>
               </li>
            </ul>
         </div>
      </div >
   );
};

export default Footer;