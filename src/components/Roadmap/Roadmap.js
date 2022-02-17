import React from 'react';
import img1 from '../../images/roadmap/Group 1.png';
import img2 from '../../images/roadmap/Group 2.png';
import img3 from '../../images/roadmap/Group 3.png';
import img4 from '../../images/roadmap/Group 4.png';
import img5 from '../../images/roadmap/Group 5.png';
import img6 from '../../images/roadmap/Group 6.png';
import img7 from '../../images/roadmap/Group 7.png';
import img8 from '../../images/roadmap/Group 8.png';
import './Roadmap.css';

const Roadmap = () => {
   return (
      <div className='roadmap container my-5 py-5'>
         <div className="row">
            <div className="roadmap-details col-md-6 col-sm-12 px-5">
               <h1>Roadmap</h1>
               <p><small>This roadmap outlines our goals and where we want to take ROYAL. We have a lot of ideas and concepts that we are working on. </small></p>

               <div className='roadmap-years text-white mb-5'>
                  <div className='text-start ps-3 mt-2'>
                     <div><p><span style={{ color: '#FF14B1' }}>Q1</span> / <span style={{ color: '#FFFF14' }}>2022</span></p></div>
                  </div>
                  <ul className='text-start'>
                     <li><a href="#">Project Introduction</a></li>
                     <li><a href="#">1st NFT Sale</a></li>
                     <li><a href="#">IDO</a></li>
                     <li><a href="#">2st NFT Sale</a></li>
                     <li><a href="#">Alpha Test</a></li>
                  </ul>
               </div>
               <div className='roadmap-years text-white mb-5'>
                  <div className='text-start ps-3 mt-2'>
                     <div><p><span style={{ color: '#FF14B1' }}>Q2</span> / <span style={{ color: '#FFFF14' }}>2022</span></p></div>
                  </div>
                  <ul className='text-start'>
                     <li><a href="#">Smart Contract Audit</a></li>
                     <li><a href="#">Lands Sale</a></li>
                     <li><a href="#">Marketing Campaing</a></li>
                     <li><a href="#">Launch ROYAL token</a></li>
                     <li><a href="#">PVE Game Launch</a></li>
                  </ul>
               </div>
               <div className='roadmap-years text-white mb-5'>
                  <div className='text-start ps-3 mt-2'>
                     <div><p><span style={{ color: '#FF14B1' }}>Q3</span> / <span style={{ color: '#FFFF14' }}>2022</span></p></div>
                  </div>
                  <ul className='text-start'>
                     <li><a href="#">PVP Game Launch</a></li>
                     <li><a href="#">Add Staking</a></li>
                     <li><a href="#">2st Project Launch</a></li>
                  </ul>
               </div>
            </div>
            <div className="col-md-6 col-sm-12">
               <div className='row'>
                  <div className="col-md-6 col-sm-3">
                     <a href="#"><img src={img1} alt="img" /></a>
                  </div>
                  <div className="col-md-6 col-sm-3">
                     <a href="#"><img src={img2} alt="img" /></a>
                  </div>
               </div>
               <div className='row'>
                  <div className="col-md-6">
                     <a href="#"><img src={img3} alt="img" /></a>
                  </div>
                  <div className="col-md-6">
                     <a href="#"><img src={img4} alt="img" /></a>
                  </div>
               </div>
               <div className='row'>
                  <div className="col-md-6">
                     <a href="#"><img src={img5} alt="img" /></a>
                  </div>
                  <div className="col-md-6">
                     <a href="#"><img src={img6} alt="img" /></a>
                  </div>
               </div>
               <div className='row'>
                  <div className="col-md-6">
                     <a href="#"><img src={img7} alt="img" /></a>
                  </div>
                  <div className="col-md-6">
                     <a href="#"><img src={img8} alt="img" /></a>
                  </div>
               </div>

            </div>
         </div>
      </div>
   );
};

export default Roadmap;