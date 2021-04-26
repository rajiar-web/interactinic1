import Head from 'next/head'
import Link from 'next/link'
import Indexform from './indexform';
// import Image from 'next/image'
//  import styles from '../styles/Home.module.css'
// import styles from '../styles/css/style.css'
const bsurl = process.env.customurl;

export const getStaticProps = async () => 
{
   const res = await fetch(bsurl+'api/Home');
   const data = await res.json();
   if(!data)
         {
            return {
               props : {
                  topdata :  null,
                  fotdata : null
            }};
            
         }
         else
         {
            return {
               props : {
                  topdata :  data.tpdata,
                  fotdata :  data.ftdata
            }};
            
         } 


 
}
function remHtml(str)
{
  var strg;
  
  if(str)
  {
   strg = str.replace("<p>","");
   strg = strg.replace("</p>","");
   strg = strg.replace(/<(.|\n)*?>/g, '')
   strg = strg.replace('\n', '')
  }
    
   
    return strg;
}  
 

export default function Home(props) {

   
   const tpdata = props.topdata;
   const ftrdata = props.fotdata;
  
  return (
     
   <>
   
    <section className="sec1">
         <div className="container container-custom">
            <div className="row">
               <h2 data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="500" className="py-5 mt-4">A digital agency <br /> focused on web.</h2>
               <p data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="800" className="text-center">We are a creative team of designers, developers, and strategists, <br />
                  building elevated websites in the heart of London.</p>
               <div className="col-12 col-md-12 m-0 py-2 my-md-3 position-relative hover-sec1">
                  <div className="position-absolute banner-round1 f-round" data-aos="zoom-in" data-aos-easing="ease-in-back" data-aos-duration="1000"></div>
                  <div className="position-absolute banner-round2 l-round" data-aos="zoom-in" data-aos-easing="ease-in-back" data-aos-duration="1600"></div>
                  <img src="img/Browser.png" className="img-fluid w-100 interact-banner" alt=""/>
               </div>
               <div className="bot-img">
               <p className="sec-img-bot-p text-center" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="800"> <span className="bold">We create</span> progress by designing and developing custom 
                  software, mobile applications and websites.</p>
                  <a href="#" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="800" className="btn btn-sec1 mt-4 text-center">See our solutions</a>
               </div>
            </div>
         </div>
      </section>

      <section className="sec2 panel"  data-color="dark">
         <div className="container container-custom">
            <h4  data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="800">Our Solutions</h4>
            <h2 className="my-4 mb-3 mb-lg-5 pb-lg-5" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="1000"> We build modern <br />
               experiences</h2>
               <div className="row row-cols-12 row-cols-lg-3 g-4 panel" data-color="litered">

                  <div className="d-flex" data-aos="fade-up" data-aos-easing="ease-in-back" data-aos-duration="900">
                      <div className="card p-0 sec2-card">
                     <div className="bg-card1 bg-card">
                        <img src={ bsurl + 'assets/front/img/home/'+ tpdata[0].h_image } className="card-img-top img-fluid" alt="..."/>
                     </div>
                     <div className="card-body">
                        <h3 className="py-3">
                           { tpdata[0].h_title }                           </h3>
                       <p className="card-text">
                          { remHtml(tpdata[0].h_desc) }
                          {/* An expert web development company in UK driving towards growth and stability. */}
                          </p>
                     </div>
                   </div>
                   </div>

                   <div className="d-flex" data-aos="fade-up" data-aos-easing="ease-in-back" data-aos-duration="1200">
                  <div className="card p-0 sec2-card">
                     <div className="bg-card2 bg-card">
                        <img src={ bsurl + 'assets/front/img/home/'+ tpdata[1].h_image } className="card-img-top img-fluid" alt="..."/>
                     </div>
                     <div className="card-body">
                        <h3 className="py-3">{ tpdata[1].h_title }   </h3>
                       <p className="card-text"> { remHtml(tpdata[1].h_desc) }</p>
                     </div>
                   </div>
                   </div>
                   <div className="d-flex" data-aos="fade-up" data-aos-easing="ease-in-back" data-aos-duration="1500">
                   <div className="card p-0 sec2-card">
                      <div className="bg-card3 bg-card">
                         <img src={ bsurl + 'assets/front/img/home/'+ tpdata[2].h_image } className="card-img-top img-fluid" alt="..."/>
                      </div>
                      <div className="card-body">
                         <h3 className="py-3">{ tpdata[2].h_title }   </h3>
                        <p className="card-text"> { remHtml(tpdata[2].h_desc) }</p>
                      </div>
                    </div>
                    </div>
               </div>
         </div>
      </section>


<section className="sec3 panel"  data-color="dark">
   <div className="container container-custom">
      <h4 className="mb-4" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="800">Our Masterpieces</h4>
      <h2 className="pb-2 pb-lg-5" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="1000">Featured <br /> Projects</h2>



     <div className="col-12 bg-sec3-box my-5">
         <div className="row bg-panel-card">
         <div className="col-12 col-lg-6 sec3-l-img1 d-flex align-items-center">
            <figure className="l-img" data-aos="fade-up" data-aos-duration="1200" data-aos-easing="ease-in-back">
               <img src={ bsurl + 'assets/front/img/featured/'+ ftrdata[0].f_image } className="img-fluid" alt=""/>
            </figure>
         </div>
         <div className="col-12 col-lg-6 my-0 my-lg-5 px-0 px-md-5 py-0 py-lg-5 d-flex align-items-center">
            <div>
            <h2 className="my-3" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="800">{ ftrdata[0].f_title }</h2>
            <p className="py-3" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="800">
            <div dangerouslySetInnerHTML={{__html: ftrdata[0].f_desc}} />
            {/* { ftrdata[0].f_desc } */}
               </p>
               <ul className="p-0 d-flex" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="800">
                  <li><img src="img/adobe-xd.svg" className="px-3" alt=""/></li>
                  <li><img src="img/html.svg" className="px-3" alt=""/></li>
                  <li><img src="img/react.svg" className="px-3" alt=""/></li>
               </ul>
            </div>
         </div>
      </div>
      </div>


      <div className="col-12 bg-sec3-box my-5">
         <div className="row bg-panel-card">
         <div className="col-12 col-lg-6 my-0 my-lg-5 px-0 px-md-5 py-0 py-lg-5 d-flex align-items-center">
            <div>
            <h2 className="my-3" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="800">{ ftrdata[1].f_title }</h2>
            <p className="py-3" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="800">
            <div dangerouslySetInnerHTML={{__html: ftrdata[1].f_desc}} />
               </p>
               <ul className="p-0 d-flex" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="800">
                  <li><img src="img/adobe-xd.svg" className="px-3" alt=""/></li>
                  <li><img src="img/html.svg" className="px-3" alt=""/></li>
                  <li><img src="img/react.svg" className="px-3" alt=""/></li>
               </ul>
            </div>
         </div>
         <div className="col-12 col-lg-6 sec3-r-img2 d-flex align-items-center">
            <figure className="r-img" data-aos="fade-up" data-aos-duration="1200" data-aos-easing="ease-in-back">
               <img src={ bsurl + 'assets/front/img/featured/'+ ftrdata[1].f_image } className="img-fluid" alt=""/>
            </figure>
         </div>
      </div>
      </div>
      <div className="col-12 bg-sec3-box my-5">
         <div className="row bg-panel-card">
         <div className="col-12 col-lg-6 sec3-l-img3 d-flex align-items-center">
            <figure className="l-img" data-aos="fade-up" data-aos-duration="1200" data-aos-easing="ease-in-back">
               <img src={ bsurl + 'assets/front/img/featured/'+ ftrdata[2].f_image } className="img-fluid" alt=""/>
            </figure>
         </div>
         <div className="col-12 col-lg-6 my-0 my-lg-5 px-0 px-md-5 py-0 py-lg-5 d-flex align-items-center">
            <div>
            <h2 className="my-3" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="800">{ ftrdata[2].f_title }</h2>
            <p className="py-3" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="800">
            <div dangerouslySetInnerHTML={{__html: ftrdata[2].f_desc}} />
               </p>

               <ul className="p-0 d-flex" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="800">
                  <li><img src="img/figma.svg" className="px-3 logo-framework" alt=""/></li>
                  <li><img src="img/html.svg" className="px-3" alt=""/></li>
                  <li><img src="img/react.svg" className="px-3" alt=""/></li>
               </ul>
            </div>
         </div>
      </div>
      </div>
      <div className="col-12 text-center panel"   data-color="gray" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="800">
         <a href="#" className="btn btn-sec1 btn-sec2">EXPLORE MORE</a>
      </div>
   </div>
</section>

<section className="bot-logosec panel"  data-color="dark">
   <div className="container container-custom">
      <figure data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="800">
         <img src="img/bot-icon.png" className="img-fluid" alt=""/>
      </figure>
   </div>
</section>
<Indexform />
      
<section className="sec5 panel"  data-color="blue">
   <div className="container container-custom">
      <h3 className="mb-4" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="800">Get Professional Features for Your Website/APP</h3>
      <h2 data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="800">We are a web design and development <br/>
         company, building websites that drive <br/>
         traffic, engagement, and conversion for <br/>
         industry-leading brands in London.</h2>
   </div>
</section>

<section className="sec6 panel" data-color="green">
   <div className="container container-custom">
      <h2 className="text-center mb-5 mb-md-5 pb-0 pb-md-5"  data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="800">Let’s work together.</h2>
      <div className="row row-cols-5">
         <figure  data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-duration="2000">
            <img src="img/work-img1.png" className="img-fluid small-img" alt=""/>
         </figure>
         <figure  data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-duration="1200">
            <img src="img/work-img2.png"  className="img-fluid small-img mt-3 mt-lg-5 pt-1" alt=""/>
         </figure>
         <figure data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-duration="700">
            <img src="img/work-img3.png"  className="img-fluid" alt=""/>
         </figure>
         <figure  data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-duration="1200">
            <img src="img/work-img4.png"  className="img-fluid small-img" alt=""/>
         </figure>
         <figure data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-duration="2000">
            <img src="img/work-img5.png"  className="img-fluid small-img mt-3 mt-lg-5 pt-0 pt-lg-4" alt=""/>
         </figure>
      </div>
   </div>
</section>
   </>
  )
}

