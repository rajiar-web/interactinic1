import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from "next/router"

export default function Solution_inner() {
   const router = useRouter()
   const {
     query: { id },
   } = router
  return (
   <>
   <div>About us: {id}</div>
     <section className="abt-banner solutions-banner pb-0">
         <div className="container container-custom">
            <div className="row">
               <h2 data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="500" className="pt-5 py-3 mt-3 mt-lg-5">Website <br /> Development </h2>
               <p data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="800" className="text-center mb-5">While online interactions may lack sensory intimacy, Interact Inc can escalate engagement levels through crafting a multi-dimensional experience that mesmerizes dream leads from the get-go. </p>
            </div>
         </div>
      </section>
<section className="e-site">
   <div className="container">
      <div className="row">
         <div className="card e-commerce-websites" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="500">
            <img src="img/website-dev-inner1.png" className="card-img-top"  data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="1000" alt="..." />
            <div className="card-body d-block d-sm-flex justify-content-sm-between align-items-center mb-3 mb-lg-5">
              <ul data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="700">
                 <li className="ico1">E-commerce <br />
                  Websites</li>
              </ul>
              <a href="#" className="btn btn-custom-esite" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="900">Request a quote</a>
            </div>
          </div>
          <div className="row mb-3 mb-lg-5">
             <div className="col-12 col-lg-6" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="700">
                <p className="text-white mt-3 mt-lg-5">A personable e-commerce platform is no longer a luxury; it’s a necessity in this Digital Age.  As the first point of contact with your dream leads, there’s a lot of pressure for businesses to get their websites “just right”, from providing a sophisticated yet simple user interface to knowing when to insert those game-changing calls to action (CTAs) that convert leads to buyers. </p>
             </div>
             <div className="col-12 col-lg-6" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="1000">
                <p className="text-white mt-3 mt-lg-5">We at Interact Inc pride ourselves on a curating seamless virtual shopping experience, with our UX/UI design experts passionate about adding value at every stage of the customer journey. We are a web development company with the rare capability of translating your brand-specific objectives into a state-of-the-art strategic website geared towards secure and seamless online transactions. </p>
             </div>
          </div>
      </div>
      <div className="row">
         <div className="card cms-dev" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="500">
            <img src="img/website-dev-inner2.png" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="1000" className="card-img-top" alt="..." />
            <div className="card-body d-block d-sm-flex justify-content-between align-items-center mb-3 mb-lg-5">
              <ul data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="700">
                 <li className="ico2">CMS <br />
                  Development </li>
              </ul>
              <a href="#" className="btn btn-custom-esite" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="900">Request a quote</a>
            </div>
          </div>
          <div className="row mb-3 mb-lg-5">
             <div className="col-12 col-lg-6" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="700">
                <p className="text-white mt-3 mt-lg-5">A superior content management system, as any web development agency would confirm, is essential to establish digital brands as value-added solutions providers with a distinctive personality. It doesn’t matter if you’re a well-established organization or a start-up; the playing field is level when it comes to the necessity of innovative, engaging, and relevant content that directly appeals to your target audience.  For instance, if you’re a company that starts meaningful conversations, while also including user-generated material and candid posts, you are seeing favourable results in performance metrics.  </p>
             </div>
             <div className="col-12 col-lg-6" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="1000">
                <p className="text-white mt-3 mt-lg-5">Interact Inc recognizes the vitality of a data-driven CMS that will enable brands to create, organize, and manage different types of content and modify their strategy in accordance with the relevant metrics. We are experts at designing a purpose-built content management system that is seamlessly embedded into your website without the need for operating separate infrastructure, enabling you to focus on core functions such as a user-friendly interface.  This also enables you to publish high-quality content at peak times and update your web pages to enhance target audience engagement. </p>
             </div>
          </div>
      </div>
      <div className="row">
         <div className="card cms-app" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="500">
            <img src="img/website-dev-inner3.png" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="1000" className="card-img-top" alt="..." />
            <div className="card-body d-block d-sm-flex justify-content-between align-items-center mb-3 mb-lg-5">
              <ul data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="700">
                 <li className="ico3">CMS <br />
                  Application </li>
              </ul>
              <a href="#" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="900" className="btn btn-custom-esite">Request a quote</a>
            </div>
          </div>
          <div className="row mb-3 mb-lg-5">
             <div className="col-12 col-lg-6" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="700">
                <p className="text-white mt-3 mt-lg-5">Loyal customers play the role of effective brand ambassadors; therefore, meeting expectations at every step of the purchasing journey is essential for long-term success. Customer Relationship Management is another area mastered by Interact Inc, allowing different departments and teams easy access to updated customer information, enabling your organization to make informed decisions and personalize consumer interactions.  Cloud computing facilitates in-depth information sharing between different company units, where relevant customer details can be extracted at a moment’s notice, optimizing overall efficiency and improving customer satisfaction. </p>
             </div>
             <div className="col-12 col-lg-6" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="1000">
                <p className="text-white mt-3 mt-lg-5">As a purpose-driven website design company, we know how important it is to understand the consumer mindset and keep track of analytics to gauge the success of different digital marketing strategies, making essential tweaks before it’s too late. Therefore, our reliable and straightforward CRM application development solution is tailored to your core objectives, providing you with tried-and-tested tools to connect with customers on a whole other level. </p>
                <p className="text-white mt-3 mt-lg-5"><strong> Contact us now</strong> to create an efficient CRM system that increases overall organizational productivity and efficiency in adding value for customers. </p>
             </div>
          </div>
      </div>
      <div className="row">
         <div className="card cms-static-dynamic" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="500">
            <img src="img/website-dev-inner4.png" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="1000" className="card-img-top" alt="..." />
            <div className="card-body d-block d-sm-flex justify-content-between align-items-center mb-3 mb-lg-5">
              <ul data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="700">
                 <li className="ico4">Designing static and <br />
                  dynamic websites  </li>
              </ul>
              <a href="#" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="900" className="btn btn-custom-esite">Request a quote</a>
            </div>
          </div>
          <div className="row mb-3 mb-lg-5">
             <div className="col-12 col-lg-6" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="700">
                <p className="text-white mt-3 mt-lg-5">As a professional website development agency, Interact Inc is specialized in creating static and dynamic websites that convey the right brand message to your target customer base. While static websites are less complex and more common, consisting of fixed content written fully in HTML, they are great for simple information sharing while still offering a measure of interaction. </p>
             </div>
             <div className="col-12 col-lg-6" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="1000">
                <p className="text-white mt-3 mt-lg-5">Dynamic websites, however, are increasing in popularity, requiring more advanced programming, enabling modifications, updates, and add-ons according to integrated CMS input.  Whether you want static or dynamic web pages or even a mix of both, we are enthusiastic about catering to your exact requirements with unique viable solutions. </p>
             </div>
          </div>
      </div>
      <div className="row">
         <div className="card cms-singlepage" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="500">
            <img src="img/website-dev-inner5.png" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="1000" className="card-img-top" alt="..." />
            <div className="card-body d-block d-sm-flex justify-content-between align-items-center mb-3 mb-lg-5">
              <ul data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="700">
                 <li className="ico5">Developing Single <br />
                  Page Applications   </li>
              </ul>
              <a href="#" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="900" className="btn btn-custom-esite">Request a quote</a>
            </div>
          </div>
          <div className="row mb-3 mb-lg-5">
             <div className="col-12 col-lg-6" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="700">
                <p className="text-white mt-3 mt-lg-5">If you’re looking to establish a cost-effective online presence adept at adding value at all tiers of the purchasing funnel, we would suggest single-page applications (SPAs). This provides a dynamic multi-dimensional platform of one page that can be frequently updated with customer-centric elements in real-time. </p>
             </div>
             <div className="col-12 col-lg-6" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="1000">
                <p className="text-white mt-3 mt-lg-5">The team at Interact Inc are advocates of this single-page software, as it improves the speed, efficiency, and spontaneity of the user experience, leading to customers wanting to come back for more of that personalized engagement.   </p>
             </div>
          </div>
      </div>
      <div className="row">
         <div className="card cms-connections" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="500">
            <img src="img/website-dev-inner6.png" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="1000" className="card-img-top" alt="..." />
            <div className="card-body d-block d-sm-flex justify-content-between align-items-center mb-3 mb-lg-5">
              <ul data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="700">
                 <li className="ico6">Creating Connections <br />
                  through Websites   </li>
              </ul>
              <a href="#" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="900" className="btn btn-custom-esite">Request a quote</a>
            </div>
          </div>
          <div className="row mb-3 mb-lg-5">
             <div className="col-12 col-lg-6" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="700">
                <p className="text-white mt-3 mt-lg-5">Any web development service provider will tell you that the hallmark of a top-notch website is to inspire an emotional bond with your brand’s target audience that goes beyond the ‘vanity metrics’ and translates into conversions and repeat purchases. Designing and maintaining websites that attract high-interest leads is a labour of love perfected by Interact Inc. </p>
             </div>
             <div className="col-12 col-lg-6" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="1000">
                <p className="text-white mt-3 mt-lg-5">As a premier website development company, we are passionate about authentic content strategies, optimizing convenience and responsiveness through value-added, mobile-friendly applications. Our seamless solutions for user-friendly web applications, CMS, and CRM will not only enhance customer enjoyment it will also increase top-of-the-mind recognition in a competitive digital arena. </p>
             </div>
          </div>
      </div>
      <div className="row">
         <div className="card cms-ssl" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="500">
            <img src="img/website-dev-inner7.png" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="1000" className="card-img-top" alt="..." />
            <div className="card-body d-block d-sm-flex justify-content-between align-items-center mb-3 mb-lg-5">
              <ul data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="700">
                 <li className="ico7">Integrated SSL security <br />
                  for e-commerce web </li>
              </ul>
              <a href="#" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="900" className="btn btn-custom-esite">Request a quote</a>
            </div>
          </div>
          <div className="row mb-3 mb-lg-5">
             <div className="col-12 col-lg-6" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="700">
                <p className="text-white mt-3 mt-lg-5">SSL security can be imagined as an added safeguard for information users enter into a website. To ensure high conversion rates, e-commerce websites must have a strong data protection policy and a hassle-free checkout process, and the extra “s” in the web address is a sure-fire way to reassure customers.  </p>
             </div>
             <div className="col-12 col-lg-6" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="1000">
                <p className="text-white mt-3 mt-lg-5">Interact Inc is passionate about customer safety, shielding sensitive information from invasive third-parties via cryptogenic links between your website and server. The first concern of our web development specialists is fortifying your website through the necessary security checks, implementing measures that will ensure your credibility. </p>
             </div>
          </div>
      </div>
      <div className="row">
         <div className="card cms-transformative-app" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="500">
            <img src="img/website-dev-inner8.png" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="1000" className="card-img-top" alt="..." />
            <div className="card-body d-block d-sm-flex justify-content-between align-items-center mb-3 mb-lg-5">
              <ul data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="700">
                 <li className="ico8">Engineering <br />
                  Transformative Apps  </li>
              </ul>
              <a href="#" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="900" className="btn btn-custom-esite">Request a quote</a>
            </div>
          </div>
          <div className="row mb-3 mb-lg-5">
             <div className="col-12 col-lg-6" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="700">
                <p className="text-white mt-3 mt-lg-5">An area of digital commerce that is often neglected, the web development experts of Interact Inc are keen advocates of revolutionary apps that enhance the customer experience across multiple devices.  </p>
             </div>
             <div className="col-12 col-lg-6" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="1000">
                <p className="text-white mt-3 mt-lg-5">Our app developers have a knack for stepping into the shoes of your target users with high attention to detail, user-friendliness, aesthetics, and interactivity, assuring a meaningful relationship with high-interest consumers.  </p>
             </div>
          </div>
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
