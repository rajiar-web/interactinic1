import Head from 'next/head'
import Link from 'next/link'
const bsurl = process.env.customurl;

export const getStaticProps = async () => 
{
   const res = await fetch(bsurl+'getsolutions');
   const data = await res.json();
   return {
      props : { solutions :  data }
   }
}
const Solutions = ( { solutions }) =>{
// export default function Solutions() {
   
  return (
   <>
     <section className="abt-banner solutions-banner pb-0">
         <div className="container container-custom">
            <div className="row">
               <h2 data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="500" className="pt-5 py-3 mt-3 mt-lg-5">Development & Creative <br />Solutions</h2>
               <p data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="800" className="text-center mb-5">Interact Inc believes in dynamic solutions that keep up with the 
                  ever-changing digital marketing needs. We are experienced in proffering customized packages for specific brand requirements, from website design and maintenance to managing SEO, CRM, and CMS strategies.  </p>
            </div>
            <hr className="custom-hr" />
         </div>
      </section>

<section className="about-who-we dev-creative-sec">
   <div className="container">



         <div className="row g-1 g-lg-5">
            <div className="col-12 col-lg-5" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="500">
            <h2 className="mb-3 mb-lg-5">{ solutions[0].s_title} </h2>
           
            <div dangerouslySetInnerHTML={{__html: solutions[0].s_desc}} />
               {/* <p>While online interactions may lack sensory 
                  intimacy, Interact Inc can escalate engagement levels through crafting a multi-dimensional experience that mesmerizes dream leads from 
                  the get-go. </p>
               <p>Aside from specializing in faultless UX/ UI compositions, we also guarantee a fresh perspective, designing unique user-friendly interfaces that reflect the story, personality, 
                  and aspirations of your brand.  </p> */}
       
                  <Link href={{  pathname: '/Solutions/[slug]', query: { slug: solutions[0].s_slug },}}>

                 {/* <Link href={"/Solutions/" + solutions[0].s_slug} key={solutions[0].s_slug}> */}
                    
                  <a  className="btn btn-custom mt-5">Explore More</a>
                  </Link>
            </div>

            <div className="col-12 col-lg-7 d-flex" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="800">
               <div className="row row-cols-2 row-cols-lg-2 g-4 dev-creative-box d-flex p-5">

               {solutions[0].serv_det.slice(0,4).map((sdet, idx) =>
                (
                  <div className="col text-center">
                     <img src={ bsurl + 'assets/front/img/solution/'+ sdet.sc_icon }  alt=""/>
                     <p className="text-center">{ sdet.sc_title }</p>
                  </div>
               ))}
                  
               </div>
            </div>            
         </div>




         <div className="row mt-1 mt-lg-5 g-1 g-lg-5">

            <div className="col-12 col-lg-7 d-flex">
               <div className="row row-cols-2 row-cols-lg-2 g-4 dev-creative-box d-flex p-5" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="800">
               {solutions[1].serv_det.slice(0,4).map((sdet1, idx) => ( 
                  <div className="col text-center">
                     <img src={ bsurl + 'assets/front/img/solution/'+ sdet1.sc_icon }  alt="" />
                     <p className="text-center">{ sdet1.sc_title }</p>
                  </div>
                  ))}
               
               </div>
            </div>   
            <div className="col-12 col-lg-5" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="500">
            <h2 className="mb-3 mb-lg-5">{ solutions[1].s_title} </h2>
            <div dangerouslySetInnerHTML={{__html: solutions[0].s_desc}} />
            <Link href={{  pathname: '/Solutions/[slug]', query: { slug: solutions[1].s_slug },}}>
                     <a  className="btn btn-custom mt-5">Explore More</a>
            </Link>
                  
            </div>         
         </div>

         <div className="row mt-1 mt-lg-5 g-1 g-lg-5">  
            <div className="col-12 col-lg-5" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="500">
            <h2 className="mb-3 mb-lg-5">{ solutions[2].s_title}</h2>
            <div dangerouslySetInnerHTML={{__html: solutions[2].s_desc}} />
            <Link href={{  pathname: '/Solutions/[slug]', query: { slug: solutions[2].s_slug },}}>
                  <a  className="btn btn-custom mt-5">Explore More</a>
            </Link>
            </div>       
            <div className="col-12 col-lg-7 d-flex" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="800">
               <div className="row row-cols-2 row-cols-lg-2 g-4 dev-creative-box d-flex p-5">
               {solutions[2].serv_det.slice(0,4).map((sdet2, idx) => ( 
                  <div className="col text-center">
                     <img src={ bsurl + 'assets/front/img/solution/'+ sdet2.sc_icon }  alt="" />
                     <p className="text-center">{ sdet2.sc_title }</p>
                  </div>
               ))}
                
               </div>
            </div>   
         </div>
         <div className="row mt-1 mt-lg-5 g-1 g-lg-5">       
            <div className="col-12 col-lg-7 d-flex" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="800">
               <div className="row row-cols-2 row-cols-lg-2 g-4 dev-creative-box d-flex p-5  align-items-center">

               {solutions[3].serv_det.slice(0,4).map((sdet3, idx) => ( 
                  <div className="col text-center">
                     <img src={ bsurl + 'assets/front/img/solution/'+ sdet3.sc_icon }  alt="" />
                     <p className="text-center">{ sdet3.sc_title }</p>
                  </div>
               ))}
                  
               </div> 
            </div>   
            <div className="col-12 col-lg-5" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="500">
            <h2 className="mb-3 mb-lg-5">{ solutions[3].s_title}</h2>
            <div dangerouslySetInnerHTML={{__html: solutions[3].s_desc}} />
            <Link href={{  pathname: '/Solutions/[slug]', query: { slug: solutions[3].s_slug },}}>
                  <a  className="btn btn-custom mt-5">Explore More</a>
            </Link>      
            </div> 
         </div>
         <div className="row mt-1 mt-lg-5 g-1 g-lg-5">  
            <div className="col-12 col-lg-5" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="500">
            <h2 className="mb-3 mb-lg-5">{ solutions[4].s_title}</h2>
            <div dangerouslySetInnerHTML={{__html: solutions[4].s_desc}} />
            <Link href={{  pathname: '/Solutions/[slug]', query: { slug: solutions[4].s_slug },}}>
            <a  className="btn btn-custom mt-5">Explore More</a>
            </Link>
                  
            </div>       
            <div className="col-12 col-lg-7 d-flex" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="800">
               <div className="row row-cols-2 row-cols-lg-2 g-4 dev-creative-box d-flex p-5">
               {solutions[4].serv_det.slice(0,4).map((sdet4, idx) => ( 
                  <div className="col text-center">
                     <img src={ bsurl + 'assets/front/img/solution/'+ sdet4.sc_icon }  alt="" />
                     <p className="text-center">{ sdet4.sc_title }</p>
                  </div>
               ))}
                
               </div>
            </div>   
         </div>
         <div className="row mt-1 mt-lg-5 g-1 g-lg-5">       
            <div className="col-12 col-lg-7 d-flex" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="800">
               <div className="row row-cols-2 row-cols-lg-2 g-4 dev-creative-box d-flex p-5">
               {solutions[5].serv_det.slice(0,4).map((sdet5, idx) => ( 
                  <div className="col text-center">
                     <img src={ bsurl + 'assets/front/img/solution/'+ sdet5.sc_icon }  alt="" />
                     <p className="text-center">{ sdet5.sc_title }</p>
                  </div>
                  ))}
                  
               </div>
            </div>   
            <div className="col-12 col-lg-5" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="500">
            <h2 className="mb-3 mb-lg-5">{ solutions[5].s_title}</h2>
            <div dangerouslySetInnerHTML={{__html: solutions[5].s_desc}} />
            <Link href={{  pathname: '/Solutions/[slug]', query: { slug: solutions[5].s_slug },}}>
                  <a href="#" className="btn btn-custom mt-5">Explore More</a>
                  </Link>
            </div>  
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
            <img src="img/work-img1.png" className="img-fluid small-img" alt="" />
         </figure>
         <figure  data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-duration="1200">
            <img src="img/work-img2.png"  className="img-fluid small-img mt-3 mt-lg-5 pt-1" alt="" />
         </figure>
         <figure data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-duration="700">
            <img src="img/work-img3.png"  className="img-fluid" alt="" />
         </figure>
         <figure  data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-duration="1200">
            <img src="img/work-img4.png"  className="img-fluid small-img" alt=""/>
         </figure>
         <figure data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-duration="2000">
            <img src="img/work-img5.png"  className="img-fluid small-img mt-3 mt-lg-5 pt-0 pt-lg-4" alt="" />
         </figure>
      </div>
   </div>
</section>
   </>
  )
}
export default Solutions;