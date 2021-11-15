import React from 'react';
import { Link } from 'react-router-dom';
import "./Footer.css";

const Footer = () => {
    return (
        <div className='footer p-4 text-white-50 mt-5'>
        <div className='container'>
        <div className='row'>
         
          <div className='col'>
            <h4>Quick Link</h4>
            <Link className='text-decoration-none text-white-50' to='/home'> Home</Link><br />
            <Link className='text-decoration-none text-white-50' to='/explore'>More Product</Link><br />
            <Link className='text-decoration-none text-white-50' to='/dash'>DashBord</Link><br />
            <h4>Phone  </h4>
          <p>+8809912478562</p>
        
            
          </div>
           <div className='col'>
            <h4>Help Center</h4>
            <li>FAQS</li>
            <li>Term and Conditions</li>
            <li>Privacy</li>
            <li>Track orders</li>
          </div>
          <div className='col'>
            <h4>Get Help</h4>
            <p>Subscribes and get discount</p>
            <div class="input-group mb-3 w-75">
               <input type="text" class="form-control" placeholder="Enter Your Email" aria-label="Recipient'susername" aria-describedby="button-addon2"/>
               <button class="btn btn-outline-danger" type="button"id="button-addon2">Submit</button>
          </div>
          
        
          </div>
        </div>
      </div>
      </div>
    );
};

export default Footer;