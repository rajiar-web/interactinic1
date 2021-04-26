import React, { Component } from 'react';
import { render } from 'react-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import 'izitoast/dist/css/iziToast.min.css'; // loading css 
// import iziToast from 'izitoast/dist/js/iziToast.min.js';  // you have access to iziToast now

export default class App extends Component {
   render() {
     return (
       <Contact />
     );
   }
 }
 const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
 const validateForm = (errors) => {
   let valid = true;
   Object.values(errors).forEach(
     (val) => val.length > 0 && (valid = false)
   );
   return valid;
 }
 

// export default function Contact() {
   class Contact extends Component {
      constructor(props) {
        super(props);
        this.state = {
          fullName: null,
          phone: null,
          email: null,
          subject: null,
         
          errors: {
            fullName: '!Required',
            phone: '! Required',
            email: '! Required',
            subject: '! Required',
           
          }
        };
      }
      handleChange = (event) => {
         event.preventDefault();
         const { name, value } = event.target;
         let errors = this.state.errors;
     
         switch (name) {
           case 'fullName': 
             errors.fullName = 
               value.length < 4
                 ? 'Name must be 4 characters long!'
                 : '';
             break;
            case 'phone': 
             errors.phone = 
               value.length =='0'
                 ? '! Required'
                 : '';
             break; 
           case 'email': 
             errors.email = 
               validEmailRegex.test(value)
                 ? ''
                 : 'Email is not valid!';
             break;
           case 'subject': 
             errors.subject = 
                value.length =='0'
                 ? '! Required'
                 : '';
             break; 

     
             break;
         }
     
         this.setState({errors, [name]: value});
       }
     
        handleSubmit = async(event) => {
         var e = document. getElementById('sbmtbtn');
        
         // async  handleSubmit(event){    
          event.preventDefault();
         if(validateForm(this.state.errors)) {
           e. style. display = 'none'; 
           console.info('Valid Form')

           const formData = new FormData();
         
           formData.append('name', event.target.fullName.value);
           formData.append('phone', event.target.phone.value);
           formData.append('email', event.target.email.value);
           formData.append('subject', event.target.subject.value);
           formData.append('comments', event.target.comments.value);
           const res = await fetch('http://admininteractinic.hintt.com/api/Contact', {
             method: 'POST',
             headers: {
                    'Accept': 'application/json'
             },
             body: formData,
           })  
           e. style. display = 'block';
           
           const result = await res.json()
           console.log(result.sts);
        if(result.sts=='1')
        {
          
         toast.success(result.msg);
        
      
        }
        else if(result.sts=='2')
        {
         toast.error(result.msg)
               // iziToast.error({
               // title: 'Error',
               // message: result.msg,
               //  });

        }
     

         }else{
           console.error('Invalid Form')
         }
       }
render() {
   const {errors} = this.state;     

  return (
   <>
   <ToastContainer />
     <section className="abt-banner solutions-banner pb-0">
         <div className="container container-custom">
            <div className="row">
               <h2 data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="500" className="pt-5 py-3 mt-3 mt-lg-5">Let’s start <br /> a project together.</h2>
               <p data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="800" className="text-center mb-5 pb-0 pb-lg-5"> Please share your thoughts in the form below and we’ll be in touch. We’d <br /> love to hear from you.</p>
            </div>
            <div className="row  d-flex justify-content-center">
            <div className="col-10">
               <div className="row d-flex justify-content-between">
                  <div className="col-lg-7 col-12" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="900">
                  <form onSubmit={this.handleSubmit} noValidate>
                     <div className="mb-3">
                        <input type="text" name='fullName' onChange={this.handleChange} noValidate className="form-control" placeholder="Name" />
                        {errors.fullName.length > 0 && 
                <span className='error'>{errors.fullName}</span>}
                     </div>
                     <div className="mb-3">
                        <input type="text" name='phone' onChange={this.handleChange} noValidate  className="form-control" placeholder="Phone" />
                        {errors.phone.length > 0 && 
                        <span className='error'>{errors.phone}</span>}
                     </div>
                     <div className="mb-3">
                        <input type="email" name='email' onChange={this.handleChange} noValidate className="form-control" placeholder="Email" />
                        {errors.email.length > 0 && 
                        <span className='error'>{errors.email}</span>}
                     </div>
                     <div className="mb-3">
                        <input type="text" name='subject' onChange={this.handleChange} noValidate className="form-control" placeholder="Subject ( website, mobile app, digital marketing etc ) " />
                        {errors.subject.length > 0 && 
                        <span className='error'>{errors.subject}</span>}
                     </div>
                     <div className="form-floating">
                        <textarea className="form-control" name='comments' placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: "100px" }}></textarea>
                        <label for="floatingTextarea2">Comments</label>
                      </div>
                      <button type="submit" id="sbmtbtn" className="btn btn-primary mt-3 mt-lg-5 send-btn">send</button>
                      </form>
                  </div>
                  <div className="col-lg-4 col-12 r-info-contact" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="700">
                     <h3>Address info</h3>
                     <p>155 Farringdon Road
                        EC1R 3AD London</p>
                     <p><a href="mailto:info@interactinc.co.uk">info@interactinc.co.uk</a></p>
                     <p><a href="tel:08000472626">0800 047 26 26</a></p>
                     <h2>FOLLOW US</h2>
                     <div className="d-flex">
                        <a href="#" className="me-4" target="_blank">
                        <i className="fab fa-facebook-f text-white"></i>
                        </a>
                        <a href="#" className="me-4" target="_blank">
                        <i className="fab fa-instagram text-white"></i>
                        </a>
                        <a href="#" className="me-4" target="_blank">
                        <i className="fab fa-youtube text-white"></i>
                        </a>
                        <a href="#" className="me-4" target="_blank">
                        <i className="fab fa-twitter text-white"></i>
                        </a>
                     </div>
                  </div>
               </div>
            </div>
</div>
         <div className="row d-flex justify-content-center mt-5 pt-0 pt-lg-5" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="900">
            <div className="col-10">
               <figure className="mb-0">
                  <img src="img/contact-img.jpg" className="img-fluid w-100" alt="" />
               </figure>
            </div>
         </div>
         </div>
      </section>

<section className="better-understanding text-center">
   <div className="container">
      <div className="row" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="1200">
         <h2>Get a better understanding <br />
            of our capabilities.</h2>
            
            <button type="button" className="btn btn-primary mt-3 mt-lg-5 our-service">send</button>
      </div>
   </div>
</section>

   </>
  )
}
}
