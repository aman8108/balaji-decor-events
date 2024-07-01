import React from 'react'
import "./Footer.css"
import logo from "../../Assets/BALAJI D&E LOGO-08.png"
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";


function Footer() {
  return (
    <>
    
      <footer className="mainn-footer">
  {/*Widgets Section*/}
  <div className="widgetss-section">
    <div className="container">
      <div className="row">
        {/*Big Column*/}
        <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12">
          <div className="row">
            {/*Footer Column*/}
            <div className="footer-column col-xl-7 col-lg-6 col-md-6 col-sm-12">
              <div className="footer-widget about-widget">
                <div className="logo">
                  <a href="index.html">
                    <img src={logo} alt="" />
                  </a>
                </div>
                <div className="text">
                  <p>
                    We have very good strength in innovative technology and
                    tools with over 35 years of experience. We makes long-term
                    investments goal in global companies in different sectors,
                    mainly in Europe and other countries.
                  </p>
                </div>
                <ul className="social-icon-one social-icon-colored">
                  <li>
                    
                      <i><CiFacebook /> </i>
                    
                  </li>
                  <li>
                    
                      <i><FaInstagram /></i>
                  
                  </li>
                  <li>
                    
                      <i><FaWhatsapp /></i>
                    
                  </li>
                  <li>
                   
                      <i className="fab fa-youtube" />
                    
                  </li>
                  <li>
                    
                      <i className="fab fa-dribbble" />
                   
                  </li>
                </ul>
              </div>
            </div>
            {/*Footer Column*/}
            <div className="footer-column col-xl-5 col-lg-6 col-md-6 col-sm-12">
              <div className="footer-widget useful-links">
                <h2 className="widget-title">Useful Links</h2>
                <ul className="user-links">
                  <li>
                    <a href="about-us.html" >Home</a>
                  </li>
                  <li>
                    <a href="about-us.html">About Us</a>
                  </li>
                  <li>
                    <a href="services.html">Services</a>
                  </li>
                  <li>
                    <a href="projects.html">Projects</a>
                  </li>
                  <li>
                    <a href="blog.html">Blogs</a>
                  </li>
                  <li>
                    <a href="contact.html">Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/*Big Column*/}
        <div className="big-column col-xl-6 col-lg-12 col-md-12 col-sm-12">
          <div className="row">
            {/*Footer Column*/}
            <div className="footer-column col-lg-6 col-md-6 col-sm-12">
              {/*Footer Column*/}
              <div className="footer-widget useful-links">
                <h2 className="widget-title">Contact Us</h2>
                <ul className="user-links">
                  <li>
                    <a href="about-us.html" >Mon-Fri:9:00-18:00</a>
                  </li>
                  <li>
                    <a href="about-us.html">8108*******04</a>
                  </li>
                  <li>
                    <a href="services.html">bajajidecor@gmail.com</a>
                  </li>
                  <li>
                    <a href="projects.html">400092 ||Demo addres</a>
                  </li>
                  {/* <li>
                    <a href="blog.html">Blogs</a>
                  </li>
                  <li>
                    <a href="contact.html">Contact Us</a>
                  </li> */}
                </ul>
              </div>
            </div>
            {/*Footer Column*/}
            <div className="footer-column col-lg-6 col-md-6 col-sm-12">
              {/*Footer Column*/}
              <div className="footer-widget instagram-widget">
                <h2 className="widget-title">Instagram Gallery</h2>
                <div className="widget-content">
                  <div className="outer clearfix">
                    <figure className="image">
                      <a
                        href="images/gallery/1.jpg"
                        className="lightbox-image"
                        title="Image Title Here"
                      >
                        <img src="https://expert-themes.com/html/eventrox/images/resource/gw-2.jpg" alt="" />
                      </a>
                    </figure>
                    <figure className="image">
                      <a
                        href="images/gallery/2.jpg"
                        className="lightbox-image"
                        title="Image Title Here"
                      >
                        <img src="https://expert-themes.com/html/eventrox/images/resource/gw-5.jpg" alt="" />
                      </a>
                    </figure>
                    <figure className="image">
                      <a
                        href="images/gallery/3.jpg"
                        className="lightbox-image"
                        title="Image Title Here"
                      >
                        <img src="https://expert-themes.com/html/eventrox/images/resource/gw-1.jpg" alt="" />
                      </a>
                    </figure>
                    <figure className="image">
                      <a
                        href="images/gallery/4.jpg"
                        className="lightbox-image"
                        title="Image Title Here"
                      >
                        <img src="https://expert-themes.com/html/eventrox/images/resource/gw-5.jpg" alt="" />
                      </a>
                    </figure>
                    <figure className="image">
                      <a
                        href="images/gallery/5.jpg"
                        className="lightbox-image"
                        title="Image Title Here"
                      >
                        <img src="https://expert-themes.com/html/eventrox/images/resource/gw-5.jpg" alt="" />
                      </a>
                    </figure>
                    <figure className="image">
                      <a
                        href="images/gallery/1.jpg"
                        className="lightbox-image"
                        title="Image Title Here"
                      >
                        <img src="https://expert-themes.com/html/eventrox/images/resource/gw-4.jpg" alt="" />
                      </a>
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*Footer Bottom*/}
  <div className="footer-bottom">
    <div className="auto-container">
      <div className="inner-container clearfix">
        <div className="copyright-text">
          <p>
            © Copyright 2024 All Rights Reserved by{" "}
            <a href="index.html">balaji decorators & event</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</footer>

    </>
  )
}

export default Footer
