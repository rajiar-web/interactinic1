import React, { Component } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

export default function Layout({ children }) {
    return (
        <>
        <Header/>
        <title>interactinc</title>
        <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta http-equiv="x-ua-compatible" content="ie=edge" />
        { children }
         <Footer/>
      <a class="scroll-top-arrow wave" style={{ display: "inline" }}>
      <i class="fa fa-angle-up">
      </i>
      </a>
      </>
      )
    }
