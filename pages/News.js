import Head from 'next/head'
import { Component } from 'react';
import Link from 'next/link'
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
// import Image from 'next/image'
//  import styles from '../styles/Home.module.css'
// import styles from '../styles/css/style.css'
function getdtestring(dte)
{
   var formattedDate;
  var date = new Date(dte);

var year = date.getFullYear();
var month = date.toLocaleString('default', { month: 'long' });
var day = date.getDate();

if (day < 10) {
  day = '0' + day;
}
if (month < 10) {
  month = '0' + month;
}

return formattedDate = month + ' '+ day + ' | ' + year
}
export default class News extends Component {
   constructor(props)
  {
    const bsurl = process.env.customurl;
    
    super(props);
    this.state = {
      items: [],
      url : "http://admininteractinic.hintt.com/api/News",
      visible : 4
    };
    this.loadMore = this.loadMore.bind(this);
  }

      loadMore() {
      this.setState((prev) => {
        return {visible: prev.visible + 4};
      });
    }
  componentDidMount() {
    fetch(this.state.url).then(
      res => res.json()
    ).then(res => {
      this.setState({
        items: res
       
      });
    }).catch(error => {
      console.error(error);
      this.setState({
        error: true
      });
    });
  }

  
  render(){
   const bsurl = process.env.customurl;
   const dte = getdtestring('2017-06-12')
   console.log(dte);
  return (
   <>
     <section className="abt-banner solutions-banner pb-0">
         <div className="container container-custom">
            <div className="row">
               <h2 data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="500" className="pt-5 py-3 mt-3 mt-lg-5">Explore <br /> Our News</h2>
               <p data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="800" className="text-center mb-5">We expand your insight in bytes! This is your stop to fuel up on ideas, inspiration, and the hottest trends in the digital marketing realm. </p>
            </div>
         </div>
      </section>

<section className="news-aria">
   <div className="container">

   <ResponsiveMasonry
                columnsCountBreakPoints={{350: 1, 750: 2, 900: 2}}
            >
                <Masonry className="row row-cols-1 row-cols-md-2 g-1 g-md-5" columnsCount={2}>
       {this.state.items.slice(0,this.state.visible).map((nws, idx)=>(    
           <div className="col" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="900">
            <a href="News-details.html">
            <div className="card"> 
               <img src={ bsurl + 'assets/front/img/news/'+ nws.n_image } className="card-img-top" alt="..." />
               <div className="card-body">
                 <h5 className="card-title">{ getdtestring(nws.n_date) }</h5>
                 <h3>{ nws.n_title }</h3>
               </div>
             </div>
            </a>
         </div>
         ))}
        
                </Masonry>
            </ResponsiveMasonry>
{/* 
      <div className="row row-cols-1 row-cols-md-2 g-1 g-md-5" data-masonry='{"percentPosition": true }'>



         <div className="col" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="900">
            <a href="News-details.html">
            <div className="card"> 
               <img src="img/news1.png" className="card-img-top" alt="..." />
               <div className="card-body">
                 <h5 className="card-title">March 22 | 2021</h5>
                 <h3>An open letter to <br />
                  Design</h3>
               </div>
             </div>
            </a>
         </div>
         <div className="col" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="700">
            <a href="News-details.html">
            <div className="card">
               <img src="img/news2.png" className="card-img-top" alt="..." />
               <div className="card-body">
                  <h5 className="card-title">March 18 | 2021</h5>
                  <h3>The 3 Emails Every <br />
                     Video Business…</h3>
               </div>
             </div>
             </a>
         </div>
         <div className="col" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="900">
            <div className="card">
               <img src="img/news3.png" className="card-img-top" alt="..." />
               <div className="card-body">
                  <h5 className="card-title">March 15 | 2021</h5>
                  <h3>How to solve design’s‘ <br />
                     work around the work’ </h3>
               </div>
             </div>
         </div>
         <div className="col" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="700">
            <div className="card">
               <img src="img/news4.png" className="card-img-top" alt="..." />
               <div className="card-body">
                  <h5 className="card-title">March 12 | 2021</h5>
                  <h3>What’s behind <br />
                     design</h3>
               </div>
             </div>
         </div>
         <div className="col" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="1000">
            <div className="card">
               <img src="img/news5.png" className="card-img-top" alt="..." />
               <div className="card-body">
                  <h5 className="card-title">March 8 | 2021</h5>
                  <h3>Amplifying the Black <br />
                     tech community</h3>
               </div>
             </div>
         </div>
         <div className="col" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="900">
            <div className="card">
               <img src="img/news6.png" className="card-img-top" alt="..." />
               <div className="card-body">
                  <h5 className="card-title">March 3 | 2021</h5>
                  <h3>A crowd-sourced UX <br />
                     design book, born out</h3>
               </div>
             </div>
         </div>
      </div> */}
      {this.state.visible < this.state.items.length &&  
      <div className="row">
         <a  className="btn project-btn-load mt-5 ripple-surface" onClick={this.loadMore}>Load more</a>
      </div>
      }
   </div>
</section>
      



   </>
  )
   }
}
