const bsurl = process.env.customurl;
const myArray = ['card e-commerce-websites', 'card cms-dev', 'card cms-app', 'card cms-static-dynamic', 'card cms-singlepage', 'card cms-connections', 'card cms-ssl', 'card cms-transformative-app'];  

 
 export const getStaticProps = async(context) =>{
    
 const slug = context.params.slug;
 
 const  res = await fetch(bsurl+'api/Solutions/'+ slug); 
 const data = await res.json();
      return {
         props : { sltion :data[0] }
      }

   }

   export const getStaticPaths = async () => {
      const res = await fetch(bsurl+'api/Common')
      const data = await res.json();
     // console.log(res);
      const paths = data.map((comment) => {
         return {
           params: {
             slug: comment.s_slug
           }
         }
       });
     
       console.log(paths);
     
       return {
         paths,
         fallback: false
       }

      // return {
      //     //paths: [], //indicates that no page needs be created at build time
      //     paths: [{ "params": { "slug": 'website-development' } }, { "params": { "slug": 'branding' } }, { "params": { "slug": 'branding' } }, { "params": { "slug": 'digital-marketing' } },{ "params": { "slug": 'mobile-app-development' } },{ "params": { "slug": 'social-media-marketing' } },{ "params": { "slug": 'software-development' } },],
      //     fallback: 'blocking' //indicates the type of fallback
        
      // }
    }
 function splitWord(str)
 {
   var fruits = [];
   
   if(str)
    var strg = str.split("</p>");
    else
    strg = [];
  var i;
   for (i = 0; i < strg.length; i++) {
      var str1 = strg[i].replace(/<(.|\n)*?>/g, '')
      var str1 = str1.replace('\n', '')
      if(str1 !='')
      fruits.push(str1);
   } 
  
  return fruits;
 }  
  
const Details = ({ sltion }) =>{
  
   var sdesc = sltion.s_desc.replace(/<[^>]+>/g, '');
   var subdesc = sdesc.substr(0,190);
   var servdet = sltion.serv_det
 
   // var res = sdesc.substring(1, 4);
  return (
    <>
   
       {/* <div>About us: {ninja.s_title}</div> */}
     <section className="abt-banner solutions-banner pb-0">
         <div className="container container-custom">
            <div className="row">
               <h2 data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="500" className="pt-5 py-3 mt-3 mt-lg-5"> {sltion.s_title} </h2>
               <p data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="800" className="text-center mb-5">{ subdesc }</p>
            </div>
         </div>
      </section>
<section className="e-site">
   <div className="container">
   { servdet.map((serv, idx) => { 
    const descObj = splitWord(serv.sd_desc);
   //  console.log(descObj);
             //   const strg = serv.sd_desc.split(" ");
             if(serv.sd_image)
             {
     return(        
        <>
      <div key={ idx } className="row">
      <div className={ myArray[idx] } data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="500">
         <img src={ bsurl + 'assets/front/img/solution_detail/'+ serv.sd_image } className="card-img-top"  data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="1000" alt="..." />
         <div className="card-body d-block d-sm-flex justify-content-sm-between align-items-center mb-3 mb-lg-5">
           <ul data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="700">
              <li className="ico1" style={{ 
      backgroundImage: `url(${bsurl + 'assets/front/img/solution/'+ serv.sc_icon})` 
    }}><div dangerouslySetInnerHTML={{__html: serv.sd_title}} /> </li>
           </ul>
           <a href="#" className="btn btn-custom-esite" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="900">Request a quote</a>
         </div>
       </div>
       <div className="row mb-3 mb-lg-5">
          <div className="col-12 col-lg-6" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="700">
             <p className="text-white mt-3 mt-lg-5"><div dangerouslySetInnerHTML={{__html: descObj[0]}} /></p>
          </div>
          <div className="col-12 col-lg-6" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="1000">
             <p className="text-white mt-3 mt-lg-5"><div dangerouslySetInnerHTML={{__html: descObj[1]}} /></p>
             <p className="text-white mt-3 mt-lg-5"><div dangerouslySetInnerHTML={{__html: descObj[2]}} /></p>
          </div>
          <div className="col-12 col-lg-6" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="700">
             <p className="text-white mt-3 mt-lg-5"><div dangerouslySetInnerHTML={{__html: descObj[3]}} /></p>
          </div>
          <div className="col-12 col-lg-6" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="1000">
             <p className="text-white mt-3 mt-lg-5"><div dangerouslySetInnerHTML={{__html: descObj[4]}} /></p>
             <p className="text-white mt-3 mt-lg-5"><div dangerouslySetInnerHTML={{__html: descObj[5]}} /></p>
          </div>

                      
       </div>
   </div>
    </>
     )
   }
   })}


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
            <img src="../img/work-img1.png" className="img-fluid small-img" alt="" />
         </figure>
         <figure  data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-duration="1200">
            <img src="../img/work-img2.png"  className="img-fluid small-img mt-3 mt-lg-5 pt-1" alt=""/>
         </figure>
         <figure data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-duration="700">
            <img src="../img/work-img3.png"  className="img-fluid" alt=""/>
         </figure>
         <figure  data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-duration="1200">
            <img src="../img/work-img4.png"  className="img-fluid small-img" alt=""/>
         </figure>
         <figure data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-duration="2000">
            <img src="../img/work-img5.png"  className="img-fluid small-img mt-3 mt-lg-5 pt-0 pt-lg-4" alt=""/>
         </figure>
      </div>
   </div>
</section>
    </>
  )
}
export default Details;

// export default function MyDynamicPage({ example }) {
//   return <div>My example is {example}</div>
// }

// MyDynamicPage.getInitialProps = ({ query: { example } }) => {
//   return { example }
// }
