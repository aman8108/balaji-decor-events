import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Footer from '../Components/Footer/Footer';



function Contact() {
  return (
    <>
      <div
  className="breadcrumb-area breadcrumb-padding bg-img"
  style={{ backgroundImage: "url(https://www.idfreshfood.com/wp-content/uploads/2017/09/contact_us_2.jpg)" }}
>
  <div className="container">
    <div className="breadcrumb-content text-center">
      <h2>Contact Us</h2>
      <ul>
        <li>
            <Link to="/">
            Home
            </Link>
          
        </li>
        <li>
          <i className="fa fa-angle-right" />
        </li>
        <li>Contact Us</li>
      </ul>
    </div>
  </div>
</div>

  <section>
    <div className="container">
    <div className="section section-padding">
  <div className="container">
    <div className="row">
      <div className="col-lg-5 col-md-6">
        <div className="contact-info-wrap">
          <div className="single-contact-info-wrap">
            <div className="info-icon">
              <i className="dlicon ui-1_home-51" />
            </div>
            <div className="info-content">
              <h3 className="title">Address</h3>
              <p className="width">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam explicabo, consequatur earum fuga veritatis ratione. Maharashtra 401107
              </p>
            </div>
          </div>
          <div className="single-contact-info-wrap">
            <div className="info-icon">
              <i className="dlicon ui-2_phone" />
            </div>
            <div className="info-content">
              <h3 className="title">Phone</h3>
              <p>
                {" "}
                Mobile: <span>(+91)00000000</span>
              </p>
              <p>
                {" "}
                {/* Hotline: <span>1802550 - 1102456</span> */}
              </p>
            </div>
          </div>
          <div className="single-contact-info-wrap">
            <div className="info-icon">
              <i className="dlicon ui-1_email-85" />
            </div>
            <div className="info-content">
              <h3 className="title">Email</h3>
              <p>Loremdolorsit@gmail.com</p>
              {/* <p>info@example.com</p> */}
            </div>
          </div>
          <div className="single-contact-info-wrap">
            <div className="info-icon">
              <i className="dlicon ui-2_share" />
            </div>
            <div className="info-content">
              <h3 className="title">Follow us</h3>
              <div className="social-icon-style mt-4">
                <a className="facebook" href="#">
                  <i className="fa fa-facebook"><FaFacebookF /></i>
                </a>
                <a className="twitter" href="#">
                  <i className="fa fa-twitter"><FaTwitter /></i>
                </a>
                <a className="google-plus" href="#">
                  <i className="fa fa-google-plus"><FaInstagram /></i>
                </a>
                {/* <a className="behance" href="#">
                  <i className="fa fa-behance" />
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-7 col-md-6">
        <div className="contact-from-wrap">
          <form
            id="contact-form"
            action="https://whizthemes.com/mail-php/tasnim/mail.php"
            method="post"
          >
            <input name="name" type="text" placeholder="Name" />
            <input name="email" type="email" placeholder="Email" />
            <input name="subject" type="text" placeholder="Subject" />
            <textarea
              name="message"
              placeholder="Your message"
              defaultValue={""}
            />
            <input
              className="submit"
              type="submit"
              defaultValue="Send Message"
            />
          </form>
          <p className="form-messege" />
        </div>
      </div>
    </div>
    <div className="map  mt-md-12">
      <iframe src="https://www.google.com/maps/embed?pb" />
    </div>
    
  </div>
</div>

    </div>
    <Footer/>
  </section>
    </>
  )
}

export default Contact
