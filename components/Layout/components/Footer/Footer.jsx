import React, { Component } from 'react';
export default function Footer() {
    return (
        <>
  <footer className="py-5 py-md-4">
         <div className="container container-custom">
            <div className="row">
               <div className="col-12 col-md-5">
                  <h4>Connect Us</h4>
                  <p><a href="mailto:info@interactinc.co.uk">info@interactinc.co.uk</a></p>
                  <p><a href="tel:08000472626">0800 047 26 26</a></p>
               </div>
               <div className="col-12 col-md-5">
                  <h4>Solutions</h4>
                  <div className="row">   
                     <div className="col-12 col-md-5">               
                  <ul>
                     <li>Website</li>
                     <li>Mobile APP</li>
                     <li>Softwares</li>
                  </ul>
                     </div>   
                     <div className="col-12 col-md-5">               
                  <ul>
                     <li>Digital MARKETING</li>
                     <li>Branding</li>
                     <li>Printing And Signage</li>
                  </ul>
                     </div>   
                  </div>
               </div>
               <div className="col-12 col-md-2">
                  <h4>FOLLOW US</h4>
                  <div className="d-flex">
                     <a href="#" className="me-4" target="_blank">
                     <i className="fab fa-facebook-f text-white"></i>
                     </a>
                     <a href="#" className="me-4" target="_blank">
                     <i className="fab fa-instagram text-white"></i>
                     </a>
                     <a href="#" className="me-4" target="_blank">
                     <i className="fab fa-youtube text-white"></i>
                     </a>
                     <a href="#" className="me-4" target="_blank">
                     <i className="fab fa-twitter text-white"></i>
                     </a>
                  </div>
               </div>


               <div className="col-12 col-md-12 m-foot d-flex align-items-center mt-4 mt-lg-5">
                  <p>© Interactinc. All Rights Reserved 2021 </p>
               </div>
            </div>
         </div>
      </footer>
      </>
      )
    }