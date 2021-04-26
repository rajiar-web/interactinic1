import React from 'react';
import { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Feed extends Component{
  constructor(props)
  {
    super(props);
    this.state = {
      items: [],
      url : "https://jsonplaceholder.typicode.com/posts",
      visible : 3
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
        <div className="row">
        {this.state.items.slice(0,this.state.visible).map((item)=>{
          return (
            
            <div className="col-md-4">{ item.title }</div>
          
          )
        }
        )}
        </div>
        <div className="col-md-12">
        <button type="button" onClick={this.loadMore}>Load More</button>
        </div>
      </>
      
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

