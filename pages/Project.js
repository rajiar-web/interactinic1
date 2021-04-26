import React from 'react';
import { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Project extends Component{
  constructor(props)
  {
    const bsurl = process.env.customurl;
    
    super(props);
    this.state = {
      items: [],
      url : "http://admininteractinic.hintt.com/api/Projects",
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


  render()
  {
    const bsurl = process.env.customurl;
    const myArray = ['card project-card-default', 'card project-card-default project-bg1', 'card project-card-default project-bg2', 'card project-card-default project-bg3', 'card project-card-default project-bg4', 'card project-card-default project-bg5'];  
    return(
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
         {this.state.items.slice(0,this.state.visible).map((proj, idx)=>(
    
    // {projects.map((proj, idx) => (
       
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
         {this.state.visible < this.state.items.length &&  
         <div className="row" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="900">
            <a className="btn project-btn-load mt-5" onClick={this.loadMore}>Load more</a>
         </div>
            }
   
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

























    //   <>




    //    <section className="abt-banner solutions-banner pb-0">
    //      <div className="container container-custom">
    //         <div className="row">
    //            <h2 data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="500" className="pt-5 py-3 mt-3 mt-lg-5">Explore <br /> recent projects</h2>
    //            <p data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="800" className="text-center mb-5">We aren’t new to providing customized digital solutions, and here are some of the amazing clients we work with. </p>
    //         </div>
    //      </div>
    //   </section>
    //     <div className="row">
    //     {this.state.items.slice(0,this.state.visible).map((item)=>{
    //       return (
            
    //         <div className="col-md-4">{ item.title }</div>
          
    //       )
    //     }
    //     )}
    //     </div>
    //     <div className="col-md-12">
    //     <button type="button" onClick={this.loadMore}>Load More</button>
    //     </div>
    //   </>
      
    )
  }

}





// class Feed extends Component {
//     constructor(props) {
//       super(props);
  
//       this.state = {
//         items: [],
//         visible: 2,
//         error: false
//       };
  
//       this.loadMore = this.loadMore.bind(this);
//     }
  
//     loadMore() {
//       this.setState((prev) => {
//         return {visible: prev.visible + 4};
//       });
//     }
  
//     componentDidMount() {
//       fetch("https://jsonplaceholder.typicode.com/posts").then(
//         res => res.json()
//       ).then(res => {
//         this.setState({
//           items: res
//         });
//       }).catch(error => {
//         console.error(error);
//         this.setState({
//           error: true
//         });
//       });
//     }
  
//     render() {
//       return (
//         <section className="feed">
//           <h1>Simple Load More/Pagination with React</h1>
//           <h2>With Array.prototype.slice() and the power of component state!</h2>
  
//           <div className="tiles" aria-live="polite">
//             {this.state.items.slice(0, this.state.visible).map((item, index) => {
//                 return (
//                   <div className="tile fade-in" key={item.id}>
//                     <span className="count">{index+1}</span>
//                     <h2>{item.title}</h2>
//                     <p>{item.body}</p>
//                   </div>
//                 );
//               })}
//             </div>
//             {this.state.visible < this.state.items.length &&
//                <button onClick={this.loadMore} type="button" className="load-more">Load more</button>
//             }
//           </section>
//       );
//     }
//   }
//   export default Feed
    // React.render(<Feed />, document.getElementById("feed"));

