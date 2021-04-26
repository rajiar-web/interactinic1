
import { useState } from 'react';
const bsurl = process.env.customurl;
const myArray = ['card project-card-default', 'card project-card-default project-bg1', 'card project-card-default project-bg2', 'card project-card-default project-bg3', 'card project-card-default project-bg4', 'card project-card-default project-bg5'];  

export const getStaticProps = async () => 
{
   const res = await fetch(bsurl+'api/projects');
   const data = await res.json();
   return {
      props : { projects :  data }
   }
}


const Projects = ( { projects }) =>{
  
   return (
      <>
     <section className="abt-banner solutions-banner pb-0">
         <div className="container container-custom">
            <div className="row">
               <h2 data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="500" className="pt-5 py-3 mt-3 mt-lg-5">Explore <br /> recent projects</h2>
               <p data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="800" className="text-center mb-5">We aren’t new to providing customized digital solutions, and here are some of the amazing clients we work with. </p>
            </div>
         </div>
      </section>

<section className="project-sec">
   <div className="container">
      <div className="row">
         <div className="col">
            <div className="card mb-3 mb-lg-5 project-card project-card-mainbg" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="500">
               <div className="row g-0">
               <div className="col-md-7 my-5 d-flex align-items-center">
                  <div className="card-body my-3 my-lg-5 ms-4">
                     <h5 className="card-title" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="500">UX/UI/Development</h5>
                        <h2 className="py-4" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="700">Easy feedback for <br />
                           efficient design teams</h2>
                     <a href="#" className="btn view-btn" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="1000">View Website</a>
                  </div>
               </div>
               <div className="col-md-5 proj-r-img position-relative" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="1200">
                  <img src="img/project-main.png" className="img-fluid w-100 position-absolute bottom-0 start-0" alt="..." />
               </div>
               </div>
            </div>
         </div>
      </div>


      <div className="row row-cols-1 row-cols-md-2 g-4 g-lg-5">

 
 {projects.map((proj, idx) => (
    
<>
<div id={ idx } key={proj.p_id} className="col d-flex" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="900">
<div className={ myArray[idx] }>
   <img src={ bsurl + 'assets/front/img/project/'+ proj.p_image }  className="card-img-top" alt="..." />
   <a href="#" className="btn btn-primary position-absolute btn-view-site">View Website</a>
   <div className="card-body p-3 p-lg-5">
      <h5 className="card-title">{proj.p_name}</h5>
      <h2 className="py-2">{proj.p_title}</h2>
   </div>
 </div>
</div>
</>
            
      ))}
      
  




 


      </div>

      <div className="row" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="900">
         <a href="#" className="btn project-btn-load mt-5">Load more</a>
      </div>

   </div>
</section>



<section className="make-happen text-center">
   <div className="container container-custom">
      <p data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="500">Get Professional Features for Your Website/APP</p>
      <h2 className="text-center my-3 my-md-4"  data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="800">Make  it happen</h2>
      <h4 data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="1000">let’s make better, let’s work together</h4>
      <a href="" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="1200" className="btn quote-btn text-center">Get a Free Quote </a>
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
            <img src="img/work-img4.png"  className="img-fluid small-img" alt="" />
         </figure>
         <figure data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-duration="2000">
            <img src="img/work-img5.png"  className="img-fluid small-img mt-3 mt-lg-5 pt-0 pt-lg-4" alt="" />
         </figure>
      </div>
   </div>
</section>

   </>
      //   <div>
      //    <h1>All Ninjas { burl }</h1>

      //    {ninjas.map(ninja =>(
      //       <div key={ninja.p_id}>
      //          <h3>{ninja.p_title}</h3>
      //       </div>
      //    ))}
      // </div>
   )
}
export default Projects;



// export default function Projects() {
//   return (
//    <>
//      <section className="abt-banner solutions-banner pb-0">
//          <div className="container container-custom">
//             <div className="row">
//                <h2 data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="500" className="pt-5 py-3 mt-3 mt-lg-5">Explore <br /> recent projects</h2>
//                <p data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="800" className="text-center mb-5">We aren’t new to providing customized digital solutions, and here are some of the amazing clients we work with. </p>
//             </div>
//          </div>
//       </section>

// <section className="project-sec">
//    <div className="container">
//       <div className="row">
//          <div className="col">
//             <div className="card mb-3 mb-lg-5 project-card project-card-mainbg" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="500">
//                <div className="row g-0">
//                <div className="col-md-7 my-5 d-flex align-items-center">
//                   <div className="card-body my-3 my-lg-5 ms-4">
//                      <h5 className="card-title" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="500">UX/UI/Development</h5>
//                         <h2 className="py-4" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="700">Easy feedback for <br />
//                            efficient design teams</h2>
//                      <a href="#" className="btn view-btn" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="1000">View Website</a>
//                   </div>
//                </div>
//                <div className="col-md-5 proj-r-img position-relative" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="1200">
//                   <img src="img/project-main.png" className="img-fluid w-100 position-absolute bottom-0 start-0" alt="..." />
//                </div>
//                </div>
//             </div>
//          </div>
//       </div>


//       <div className="row row-cols-1 row-cols-md-2 g-4 g-lg-5">
//          <div className="col d-flex" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="900">
//             <div className="card project-card-default">
//                <img src="img/project-1.png" className="card-img-top" alt="..." />
//                <a href="#" className="btn btn-primary position-absolute btn-view-site">View Website</a>
//                <div className="card-body p-3 p-lg-5">
//                   <h5 className="card-title">UX/UI/Development</h5>
//                   <h2 className="py-2">Wholesale for <br />
//                      independent stores</h2>
//                </div>
//              </div>
//          </div>
//          <div className="col d-flex" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="1300">
//             <div className="card project-card-default project-bg1">
//                <img src="img/project-2.png" className="card-img-top" alt="..." />
//                <a href="#" className="btn btn-primary position-absolute btn-view-site">View Website</a>
//                <div className="card-body p-3 p-lg-5">
//                   <h5 className="card-title">UX/UI/Development</h5>
//                   <h2 className="py-2">Wholesale for <br />
//                      independent stores</h2>
//                </div>
//              </div>
//          </div>
//          <div className="col d-flex" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="1300">
//             <div className="card project-card-default project-bg2">
//                <img src="img/project-3.png" className="card-img-top" alt="..." />
//                <a href="#" className="btn btn-primary position-absolute btn-view-site">View Website</a>
//                <div className="card-body p-3 p-lg-5">
//                   <h5 className="card-title">UX/UI/Development</h5>
//                   <h2 className="py-2">Wholesale for <br />
//                      independent stores</h2>
//                </div>
//              </div>
//          </div>
//          <div className="col d-flex" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="900">
//             <div className="card project-card-default project-bg3">
//                <img src="img/project-4.png" className="card-img-top" alt="..." />
//                <a href="#" className="btn btn-primary position-absolute btn-view-site">View Website</a>
//                <div className="card-body p-3 p-lg-5">
//                   <h5 className="card-title">UX/UI/Development</h5>
//                   <h2 className="py-2">Wholesale for <br />
//                      independent stores</h2>
//                </div>
//              </div>
//          </div>
//          <div className="col d-flex" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="900">
//             <div className="card project-card-default project-bg4">
//                <img src="img/project-5.png" className="card-img-top" alt="..." />
//                <a href="#" className="btn btn-primary position-absolute btn-view-site">View Website</a>
//                <div className="card-body p-3 p-lg-5">
//                   <h5 className="card-title">UX/UI/Development</h5>
//                   <h2 className="py-2">Wholesale for <br />
//                      independent stores</h2>
//                </div>
//              </div>
//          </div>
//          <div className="col d-flex" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="1300">
//             <div className="card project-card-default project-bg5">
//                <img src="img/project-6.png" className="card-img-top" alt="..." />
//                <a href="#" className="btn btn-primary position-absolute btn-view-site">View Website</a>
//                <div className="card-body p-3 p-lg-5">
//                   <h5 className="card-title">UX/UI/Development</h5>
//                   <h2 className="py-2">Wholesale for <br />
//                      independent stores</h2>
//                </div>
//              </div>
//          </div>
//       </div>

//       <div className="row" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="900">
//          <a href="#" className="btn project-btn-load mt-5">Load more</a>
//       </div>

//    </div>
// </section>



// <section className="make-happen text-center">
//    <div className="container container-custom">
//       <p data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="500">Get Professional Features for Your Website/APP</p>
//       <h2 className="text-center my-3 my-md-4"  data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="800">Make  it happen</h2>
//       <h4 data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="1000">let’s make better, let’s work together</h4>
//       <a href="" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="1200" className="btn quote-btn text-center">Get a Free Quote </a>
//       <div className="row row-cols-5">
//          <figure  data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-duration="2000">
//             <img src="img/work-img1.png" className="img-fluid small-img" alt="" />
//          </figure>
//          <figure  data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-duration="1200">
//             <img src="img/work-img2.png"  className="img-fluid small-img mt-3 mt-lg-5 pt-1" alt="" />
//          </figure>
//          <figure data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-duration="700">
//             <img src="img/work-img3.png"  className="img-fluid" alt="" />
//          </figure>
//          <figure  data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-duration="1200">
//             <img src="img/work-img4.png"  className="img-fluid small-img" alt="" />
//          </figure>
//          <figure data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-duration="2000">
//             <img src="img/work-img5.png"  className="img-fluid small-img mt-3 mt-lg-5 pt-0 pt-lg-4" alt="" />
//          </figure>
//       </div>
//    </div>
// </section>

//    </>
//   )
// }
