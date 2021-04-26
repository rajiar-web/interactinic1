import Head from 'next/head'
import Link from 'next/link'
const bsurl = process.env.customurl;

export const getStaticProps = async () => 
{
   const res = await fetch(bsurl+'api/About');
   const data = await res.json();
   return {
      props : { abtdata :  data }
   }
}
const About = ( { abtdata }) =>{
// export default function Solutions() {
   console.log(abtdata);
  return (
   <>
     <section className="abt-banner">
         <div className="container container-custom">
            <div className="row">
               <h2 data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="500" className="pt-5 py-3 mt-3 mt-lg-5"> <div dangerouslySetInnerHTML={{__html: abtdata.a_top_title}} /></h2>
               <p data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="800" className="text-center"><div dangerouslySetInnerHTML={{__html: abtdata.a_top_desc }} /> </p>
            </div>
         </div>
      </section>

<section className="about-who-we r-abt-img">
   <div className="container">
         <div className="row">
            <h2 data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="500"><div dangerouslySetInnerHTML={{__html: abtdata.a_title1}} /> </h2>
            <div className="col-12 col-lg-6" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="800">
            <div dangerouslySetInnerHTML={{__html: abtdata.a_desc1 }} /> 
               {/* <p>
                  <span>Interact Inc comprises a visionary team, from web developers and digital marketers to app designers and creatives,</span> who aim to blaze a trail of revolutionary trends across cyberspace!  As a premier digital marketing company in the UK, we offer a wide range of specialized integrated services like CRM, CMS, and SEO strategy development, as well as building an effervescent brand persona across relevant social media platforms. 
               </p>
               <p>We are passionate about adding value to every user interaction with our clients, ensuring that expectations are anticipated and satisfied via research, monitoring, and data-driven decision making.  Interact Inc catalyzes to stimulate mutually-beneficial relationships between brands and their target audience, maximizing long-term growth and loyal connections. </p> */}
            </div>
            <div className="col-12 col-lg-6 d-block d-lg-none">
               <figure>
                  <img src={ bsurl + 'assets/front/img/about/'+ abtdata.a_image1 } className="w-100 img-fluid" alt=""/>
               </figure>
            </div>
         </div>
   </div>
</section>

<section className="driving-purpose-sec">
   <div className="container">
      <div className="row driving-purpose"  data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="800">
         <h2 className="text-center mt-5 mb-0 mb-lg-5" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="1000"><div dangerouslySetInnerHTML={{__html: abtdata.a_title2 }} /></h2>
         <div className="col-12 col-lg-5 px-3 px-lg-5 py-3 py-lg-5 " data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="1300">
            <p className="mb-2 mb-xl-5">
            <div dangerouslySetInnerHTML={{__html: abtdata.a_desc2 }} /> 
               </p>
         </div>
         <div className="col-12 col-lg-7 d-flex align-items-center">
            <figure>
               <img src={ bsurl + 'assets/front/img/about/'+ abtdata.a_image2 } className="w-100 img-fluid" alt=""/>
            </figure>
         </div>
      </div>
   </div>
</section>

<section className="trust-us">
   <div className="container">
      <div className="row">
         <h2 data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="700"><div dangerouslySetInnerHTML={{__html: abtdata.a_bottom_title }} /> </h2>
            <p className="mt-3 mt-lg-5" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="900"><div dangerouslySetInnerHTML={{__html: abtdata.a_bottom_desc }} /></p>
      </div>
   </div>
</section>

<section className="make-happen text-center">
   <div className="container container-custom">
      <p data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="500">Get Professional Features for Your Website/APP</p>
      <h2 className="text-center my-3 my-md-4"  data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="800">Make  it happen</h2>
      <h4 data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="1000">let’s make better, let’s work together</h4>
      <a href="" className="btn quote-btn text-center" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="1200">Get a Free Quote </a>
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
export default About;
