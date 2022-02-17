import React from 'react';
import icon1 from '../../images/icon/icon1.png';
import icon2 from '../../images/icon/icon2.png';
import icon3 from '../../images/icon/icon3.png';
import img4 from '../../images/icon/image 7.png';
import './Navigation.css';

const Navigation = () => {
   return (
      <div className='mx-3'>
         <nav className="navbar  navbar-expand-lg  bg-transparent">
            <div className="container-fluid">
               <a className="navbar-brand" href="#">LOGO</a>
               <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
               </button>
               <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav d-flex align-items-center ms-auto mb-2 mb-lg-0">
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
                     <li className="nav-item align-items-center d-flex" >
                        <img src={icon1} alt="" />
                        <img src={icon2} alt="" />
                        <img src={icon3} alt="" />
                     </li>

                     <div className='wallet ms-2'>
                        <a href="#">Wallet Connection</a>
                        <img src={img4} alt="" />
                     </div>

                  </ul>

               </div>
            </div>
         </nav>
      </div>
   );
};

export default Navigation;