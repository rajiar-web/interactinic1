import React, { Component } from 'react';
import Link from 'next/link'
export default function Header() {
    return (
        <>
    <header className="bg-coustom">
        
         <nav className="navbar nav-coustom navbar-expand-lg navbar-light bg-none fixed-top">
            
            <div className="container container-custom">
              
               <a className="navbar-brand custom-navbar-brand logo-default" href="index.html"  data-aos="fade-zoom-in" data-aos-duration="1500"> <img src="img/logo.svg" className="logo " alt=""/> </a>
               <a className="navbar-brand custom-navbar-brand logo-white" href="index.html"  data-aos="fade-zoom-in" data-aos-duration="1500"> <img src="img/logo-white.svg" className="logo " alt=""/> </a>
              
               <button
                  className="navbar-toggler"
                  type="button"
                  data-mdb-toggle="collapse"
                  data-mdb-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                  >
               <i className="fas fa-bars"></i>
               </button>
              
               <div className="collapse navbar-collapse-custom navbar-collapse justify-content-lg-end" id="navbarSupportedContent">
                 
                  <ul className="navbar-nav ml-auto mob-nav-pad-t" data-aos="fade-zoom-in" data-aos-duration="1500">
                     <li className="nav-item">
                     <Link href="/">
                        <a className="nav-link active" aria-current="page" href="index.html">Home</a>
                        </Link>
                     </li>
                     <li className="nav-item">
                       <Link href="/About">
                        <a className="nav-link" >About us</a>
                        </Link>
                     </li>
                     <li className="nav-item">
                        <Link href="/Solutions">
                        <a className="nav-link" >solutions</a>
                        </Link>
                     </li>
                     <li className="nav-item">
                       <Link href="/Project">
                        <a className="nav-link" >Projects</a>
                        </Link>
                     </li>
                     <li className="nav-item">
                        <Link href="/News">
                        <a className="nav-link" > news</a>
                        </Link>
                     </li>
                     <li className="nav-item">
                       <Link href="/Contact">
                        <a className="nav-link"> contact us</a>
                        </Link>
                     </li>
                  </ul>
               </div>
               
            </div>
            
         </nav>
                  
      </header>
      </>
      )
    }