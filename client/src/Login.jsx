import React, {useState} from "react";
import "./Signup.css";
import { Link } from 'react-router-dom';
import axios from "axios";
import {useNavigate} from "react-router-dom";


function Login() {
   
    const [email,setEmail]= useState();
    const [password,setPassword]= useState();
    const navigate = useNavigate();
    
    function handleSubmit(e){
      e.preventDefault()
      axios.post('http://localhost:3001/login', {email,password})
      .then(result=>{console.log(result)
        if(result.data==="Success"){
          navigate("/home")
        }
      
      })
      .catch(err =>console.log(err))
    }

  return (
    <div>
      <nav className="navbar navbar-expand-md bg-dark sticky-top border-bottom" data-bs-theme="dark">
        <div className="container">
          <a className="navbar-brand d-md-none" href="#">
            <svg className="bi" width="24" height="24"><use xlinkHref="#aperture"></use></svg>
            Cheesy Peesy
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvas" aria-controls="offcanvas" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvas" aria-labelledby="offcanvasLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasLabel">Cheesy Peesy</h5>
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav flex-grow-1 justify-content-between">
                <li className="nav-item"><a className="nav-link" href="#">
                  <svg className="bi" width="24" height="24"><use xlinkHref="#aperture"></use></svg>
                </a></li>

                <li className="nav-item"><a className="nav-link" href="https://www.grabon.in/restaurants-coupons/" target="_blank">Discounts</a></li>
                <li className="nav-item"><a className="nav-link" href="https://www.holidify.com/pages/best-dishes-in-the-world-1532.html" target="_blank">Top Dishes</a></li>

                <li className="nav-item"><a className="nav-link" href="#modalSignin" >Sign Up</a></li>
                <li className="nav-item"><a className="nav-link" href="https://www.pinterest.com.au/pin/food-menu-price-list--848787861032294385/" target="_blank">Pricing</a></li>
                <li className="nav-item"><a className="nav-link" href="#">
                  <svg className="bi" width="24" height="24"><use xlinkHref="#cart"></use></svg>
                </a></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      <div id="main" className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-body-tertiary">
        <div className="col-md-6 p-lg-5 mx-auto my-5">
          <h1 className="display-3 fw-bold">Take It Cheesy</h1>
          <h3 className="fw-normal --bs-emphasis-color">Savor the Flavors, Delight in Every Bite</h3>
          <div className="d-flex gap-3 justify-content-center lead fw-normal">
            <br />
            <br />
            <br />
            <a className="icon-link" href="#modalSignin">
              <button type="button" className="btn btn-light">Order Now</button>
            </a>
          </div>
        </div>
        <div className="product-device shadow-sm d-none d-md-block"></div>
        <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
      </div>

      {/* Sign up and Login page */}
      <div className="modal modal-sheet position-static d-block p-4 py-md-5" tabIndex="-1" role="dialog" id="modalSignin">
        <div className="modal-dialog" role="document">
          <div className="modal-content rounded-4 shadow">
            <div className="modal-header p-5 pb-4 border-bottom-0 ">
              <h1 id="signup" className="fw-bold mb-0 fs-2">Login</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>

            <div className="modal-body p-5 pt-0">
              <form onSubmit={handleSubmit} className="">

                <div className="form-floating mb-3">

                  <input onChange={(e)=>setEmail(e.target.value)} type="email" className="form-control rounded-3" id="floatingInput" placeholder="name@example.com" required/>
                  <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating mb-3">
                  <input onChange={(e)=>setPassword(e.target.value)} type="password" className="form-control rounded-3" id="floatingPassword" placeholder="Password" required/>
                  <label htmlFor="floatingPassword">Password</label>
                </div>
                <button className="w-100 mb-2 btn btn-lg rounded-3 btn-dark" type="submit">Login</button>
                </form>
                <Link to="/register"><button className="w-100 mb-2 btn btn-lg rounded-3 btn-dark" type="submit">Sign up</button></Link>
                <small className="text-body-secondary">By clicking Sign up, you agree to the terms of use.</small>
                <hr className="my-4" />
                <h2 className="fs-5 fw-bold mb-3">Or use a third-party</h2>
                <a href="https://twitter.com/i/flow/login" target="_blank"><button className="w-100 py-2 mb-2 btn btn-outline-secondary rounded-3" type="submit">
                  <svg className="bi me-1" width="16" height="16"><use xlinkHref="#twitter"></use></svg>
                  Sign up with Twitter
                </button></a>

                <a href="https://github.com/" target="_blank"><button className="w-100 py-2 mb-2 btn btn-outline-secondary rounded-3" type="submit">
                  <svg className="bi me-1" width="16" height="16"><use xlinkHref="#github"></use></svg>
                  Sign up with GitHub
                </button></a>
             
            </div>
          </div>
        </div>
      </div>

      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossOrigin="anonymous"></script>
    </div>
  );
}

export default Login;
