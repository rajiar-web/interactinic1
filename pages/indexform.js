import React from 'react';
import { render } from 'react-dom';
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Indexform extends React.Component {
  constructor(props){
     super(props);

     this.state = {
         fields: {},
         errors: {},
         name: '',
         email: '',
         project:'',
         options:"Website",
         isChecked: true,
     }
   //   toast.configure();
  }
  toggleChange = (e) => {
    
   this.setState({
     isChecked: !this.state.isChecked,
     options: e.currentTarget.value
   });
 }

  handleValidation(){
      let fields = this.state.fields;
      let errors = {};
      let formIsValid = true;

      //Name
      if(!fields["name"]){
         formIsValid = false;
         errors["name"] = "Please fill out this field.";
      }

      if(typeof fields["name"] !== "undefined"){
         if(!fields["name"].match("^[A-Za-z _]*[A-Za-z][A-Za-z _]*$")){
            formIsValid = false;
            errors["name"] = "Only letters";
         }        
      }
 
      //Email
      if(!fields["email"]){
         formIsValid = false;
         errors["email"] = "Please fill out this field.";
      }

      if(typeof fields["email"] !== "undefined"){
         let lastAtPos = fields["email"].lastIndexOf('@');
         let lastDotPos = fields["email"].lastIndexOf('.');

         if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') == -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
            formIsValid = false;
            errors["email"] = "Email is not valid";
          }
     }  
      if(!fields["project"]){
         formIsValid = false;
         errors["project"] = "Please fill out this field.";
      }
      
     this.setState({errors: errors});
     return formIsValid;
 }
  
 contactSubmit = async(event) => {
   event.preventDefault();

      if(this.handleValidation())
      {
         $('.cont-btn').hide();
         $('#spinner').show();
         let apiUrl;
         let fields = this.state.fields;
         console.log(this.state.options);
         apiUrl = 'https://liverpoolbavarian.com/admBenz/insert_contact';
         let formData = new FormData();
         formData.append('inputName', fields['name']);
         formData.append('inputEmail', fields['email']);
         formData.append('inputProject', fields['project']);
         formData.append('inputOptions', this.state.options);
          //'text/html'
          const res = await fetch('http://admininteractinic.hintt.com/api/Home', {
            method: 'POST',
            headers: {
                   'Accept': 'application/json'
            },
            body: formData,
          })  
                   
          const result = await res.json()
          console.log(result.sts);
            if(result.sts=='1')
            {
              
              toast.success(result.msg);
              $('.cont-btn').show();
              $('#spinner').hide();
              document.getElementById("contactform").reset();
            }
            else if(result.sts=='2')
            {
              toast.error(result.msg)
                
            }
      

      }else{

       //  alert("Form has errors.")
      }

  }

  handleChange(field, e){         
      let fields = this.state.fields;
      fields[field] = e.target.value;        
      this.setState({fields});
  }
  render(){
      return (
      <>
      <ToastContainer />
        
   <section className="sec-4 panel"  data-color="dark">
      <div className="container container-custom">
         <h3 className="mb-3" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="800">HIRE US</h3>
         <h2 data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="800 "  >A project with Interactinc?</h2>
   
   
         <div className="col-12 my-5 py-0 py-md-4" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="800">
            <input type="radio" className="btn-check" name="options" id="option1" autocomplete="off" defaultChecked={this.state.isChecked}
          onChange={this.toggleChange} value="Website"  />
            <label className="btn btn-secondary btn-cuatom-radio" for="option1" value="Website">Website</label>
   
            <input type="radio" className="btn-check" name="options" id="option2" autocomplete="off" value="Mobile App" onChange={this.toggleChange} />
            <label className="btn btn-secondary btn-cuatom-radio" for="option2">Mobile App</label>
   
            <input type="radio" className="btn-check" name="options" id="option3" autocomplete="off" value="Software" onChange={this.toggleChange}/>
            <label className="btn btn-secondary btn-cuatom-radio" for="option3">Software</label>
   
            <input type="radio" className="btn-check" name="options" id="option4" autocomplete="off" value="Marketing" onChange={this.toggleChange} />
            <label className="btn btn-secondary btn-cuatom-radio" for="option4">Marketing</label>
   
            <input type="radio" className="btn-check" name="options" id="option5" autocomplete="off" value="Printing" onChange={this.toggleChange} />
            <label className="btn btn-secondary btn-cuatom-radio" for="option5">Printing</label>
         </div>
   
         <form name="contactform" id="contactform" className="contactform" onSubmit= {this.contactSubmit.bind(this)}>
            <div className="row">
            <div className="mb-4 col-12 col-lg-6" data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-duration="700" >
               <input type="text" name="name" id="name"  className="form-control custom-border-0" placeholder="Full Name" onChange={this.handleChange.bind(this, "name")} value={this.state.fields["name"]} />
               <span style={{color: "red","font-size":"12px"}}>{this.state.errors["name"]}</span>
             </div>
            <div className="mb-4 col-12 col-lg-6"  data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-duration="1000">
               <input type="email" name="email" id="email" className="form-control custom-border-0" placeholder="Email Address" onChange={this.handleChange.bind(this, "email")} value={this.state.fields["email"]} />
               <span style={{color: "red","font-size":"12px"}}>{this.state.errors["email"]}</span>
             </div>
            <div className="mb-4 col-12 mt-0 mt-lg-5" data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-duration="1000">
               <input type="text" name="project" id="project"  noValidate className="form-control custom-border-0 mt-5" placeholder="Project details (Optional)" onChange={this.handleChange.bind(this, "project")} value={this.state.fields["project"]} />
               <span style={{color: "red","font-size":"12px"}}>{this.state.errors["project"]}</span>
             </div>
            </div>
            <div className="col-12 mt-4" data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-duration="1000">
            <span id="spinner" style={{display: "none"}}><i class="fa fa-spin fa-spinner"></i></span>
            <button type="submit" id="submit" className="btn btn-sec1 btn-sec2 ripple-surface form-send-btn cont-btn">Send</button>
            </div>
         </form>
   
   
      </div>
   </section>
   
      </>
     )
   }
   }
export default Indexform;




  