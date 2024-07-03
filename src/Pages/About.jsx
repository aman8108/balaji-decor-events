import React from 'react'
import Testimoniall from '../Components/Testimoniall/Testimoniall'
import Counter from '../Components/Counter/Counter'
import Footer from '../Components/Footer/Footer'
import { Link } from 'react-router-dom'
import History from '../Components/History/History'

function About() {
  return (
    <>
      <div
  className="breadcrumb-area breadcrumb-padding bg-img"
  style={{ backgroundImage: "url(https://townplazapune.com/wp-content/uploads/2022/04/erik-mclean-9XK7vgoGSgc-unsplash-scaled.jpg)" }}
>
  <div className="container">
    <div className="breadcrumb-content text-center">
      <h2>About Us</h2>
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
  
  <History/>

      <section className="cat_about_section">
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div
          className="cat_section_headings wow zoom"
          style={{ visibility: "visible", animationName: "zoom" }}
        >
          <span className="cat_subheading">Who we are</span>
          <h4>About Our Banquet Service & Catering Services</h4>
          <div className="cat_border" />
        </div>
      </div>
    </div>
    <div
      className="cat_about_contentt wow frombottom"
      style={{ visibility: "visible", animationName: "frombottom" }}
    >
      <div className="row align-items-center">
        <div className="col-lg-6 col-md-6">
          <div className="cat_about_img cat_hover_img">
            <img
              src="https://kamleshyadav.com/html/catering/html/assets/images/about/about.jpg"
              alt=""
              className="img-responsive"
            />
            <div className="cat_add_img_caption" />
            <div className="cat_add_zoom cat_so_icons">
              <ul>
                <li>
                  <a href="javascript:void(0);">
                    <i className="fa fa-facebook" />
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0);">
                    <i className="fa fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0);">
                    <i className="fa fa-instagram" />
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0);">
                    <i className="fa fa-linkedin" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-6">
          <span className='sapan-bruh'>Etiam facilisis cursus mauris, id euismod ex porttitor at.</span>
          <p>
            But I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account of the system, and expound the actual teachings of the great
            explorer of the truth, the maserbuiler of human happiness. No one
            rejects, dislikes, or avoids pleasure itself, because it is
            pleasure, but because those who do not know how to pursue pleasure
            rationally encounter consequences that are extremely painful. Nor
            again is there anyone who loves or pursues or desires to obtain pain
            of itself, because it is pain, but because occasionally
            circumstances occur in which toil and pain can procure him some
            great pleasure. To take a trivial example, which of us ever
            undertakes laborious physical exercise, except to obtain some
            advantage from it
          </p>
          <a
            href="javascript:void(0);"
            className="cat_view"
            data-hover="view menu"
          >
            {" "}
            {/* <button className="flaticon-food-2">More info </button> */}
           
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
<Testimoniall/>
<Counter/>
<Footer/>
    </>
  )
}

export default About
