// // import package on top of the file
// import { useForm } from "react-hook-form";
// // also Alert component from bootstrap
// import { Alert } from 'react-bootstrap';



// export default function Contact() {
//    // const PortfolioForm = () => {
//       // useForm()
//       // 1. register -> register input
//       // 2. handleSubmit -> extract data from the form
//       // 3. errors -> object containing errors
//       const { register, handleSubmit, errors } = useForm();
      
//       // function to output form data
//       // we need to pass it to onSubmit of form element
//       const onSubmit = formData => {
//         alert(JSON.stringify(formData))
//       }
//    // }
//   return (
//    <>
//      <section className="abt-banner solutions-banner pb-0">
//          <div className="container container-custom">
//             <div className="row">
//                <h2 data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="500" className="pt-5 py-3 mt-3 mt-lg-5">Let’s start <br /> a project together.</h2>
//                <p data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="800" className="text-center mb-5 pb-0 pb-lg-5"> Please share your thoughts in the form below and we’ll be in touch. We’d <br /> love to hear from you.</p>
//             </div>
//             <div className="row  d-flex justify-content-center">
//             <div className="col-10">
//             <form onSubmit={handleSubmit(onSubmit)}>


//                <div className="row d-flex justify-content-between">
//                   <div className="col-lg-7 col-12" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="900">
//                      <div className="mb-3">
//                         <input {...register("firstName", { required: true, maxLength: 20 })}  name="firstname" type="text" className="form-control" placeholder="Name" />
//                      </div>
//                      <div className="mb-3">
//                         <input {...register("phone")}  name="phone" type="text" className="form-control" placeholder="Phone" />
//                      </div>
//                      <div className="mb-3">
//                         <input type="email" {...register("email")}  name="email" className="form-control" placeholder="Email" />
//                      </div>
//                      <div className="mb-3">
//                         <input type="text" {...register("subject")}  name="subject"  className="form-control" placeholder="Subject ( website, mobile app, digital marketing etc ) " />
//                      </div>
//                      <div className="form-floating">
//                         <textarea className="form-control" {...register("comments")}  name="comments"  placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: "100px" }}></textarea>
//                         <label for="floatingTextarea2">Comments</label>
//                       </div>
//                       <button type="submit" className="btn btn-primary mt-3 mt-lg-5 send-btn">send</button>
//                   </div>
//                   <div className="col-lg-4 col-12 r-info-contact" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="700">
//                      <h3>Address info</h3>
//                      <p>155 Farringdon Road
//                         EC1R 3AD London</p>
//                      <p><a href="mailto:info@interactinc.co.uk">info@interactinc.co.uk</a></p>
//                      <p><a href="tel:08000472626">0800 047 26 26</a></p>
//                      <h2>FOLLOW US</h2>
//                      <div className="d-flex">
//                         <a href="#" className="me-4" target="_blank">
//                         <i className="fab fa-facebook-f text-white"></i>
//                         </a>
//                         <a href="#" className="me-4" target="_blank">
//                         <i className="fab fa-instagram text-white"></i>
//                         </a>
//                         <a href="#" className="me-4" target="_blank">
//                         <i className="fab fa-youtube text-white"></i>
//                         </a>
//                         <a href="#" className="me-4" target="_blank">
//                         <i className="fab fa-twitter text-white"></i>
//                         </a>
//                      </div>
//                   </div>
//                </div>
//                </form>

//             </div>
// </div>
//          <div className="row d-flex justify-content-center mt-5 pt-0 pt-lg-5" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="900">
//             <div className="col-10">
//                <figure className="mb-0">
//                   <img src="img/contact-img.jpg" className="img-fluid w-100" alt="" />
//                </figure>
//             </div>
//          </div>
//          </div>
//       </section>

// <section className="better-understanding text-center">
//    <div className="container">
//       <div className="row" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="1200">
//          <h2>Get a better understanding <br />
//             of our capabilities.</h2>
            
//             <button type="button" className="btn btn-primary mt-3 mt-lg-5 our-service">send</button>
//       </div>
//    </div>
// </section>

//    </>
//   )
// }

import React from "react";
import ReactDOM from "react-dom";
import { ErrorMessage } from "@hookform/error-message";
import { useForm } from "react-hook-form";



export default function Contact() {
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm({
    criteriaMode: "all"
  });
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>ErrorMessage</h1>
      <input
        {...register("multipleErrorInput", {
          required: "This input is required.",
          pattern: {
            value: /\d+/,
            message: "This input is number only."
          },
          minLength: {
            value: 11,
            message: "This input must exceed 10 characters"
          }
        })}
      />
      <ErrorMessage
        errors={errors}
        name="multipleErrorInput"
        render={({ messages }) => {
          console.log("messages", messages);
          return messages
            ? Object.entries(messages).map(([type, message]) => (
                <p key={type}>{message}</p>
              ))
            : null;
        }}
      />

      <input type="submit" />
    </form>
  );
}

// const rootElement = document.getElementById("root");
// ReactDOM.render(<Contact />, rootElement);
