// Import Swiper React components

// Import Swiper styles
import "swiper/css";
import fing from "../../Assets/title_bg_green.png"

import "./Testimoniall.css"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

function Testimoniall() {
  return (
    <>

  <div className="parents">
  <div className="col-lg-12">
        <div
          className="cat_section_headings wow zoom dj-bottom"
          style={{ visibility: "visible", animationName: "zoom" }}
        >
          {/* <span className="cat_subheading">Highly recommend their exceptional service <br />and unforgettable event coordination expertise.</span> */}
          <h4>What Our client say</h4>
          <div className="cat_border" />
        </div>
      </div>
  <div className="testimonial-grid">
    <div className="testimonial-container">
      <div className="testimonial-avatar">
        <img
          src="https://media.geeksforgeeks.org/wp-content/uploads/20240617161041/Nicole-Kidman.webp"
          alt="User Avatar"
        />
      </div>
      <div className="testimonial-text">
        <p className="testimonial-name">Michael Thompson</p>
        <p className="testimonial-role">Marketing Manager, Axme Inc.</p>
        <p>
          "The results we've achieved using this platform's marketing services
          are exceptional. Our campaigns are more effective, and the team's
          insights are invaluable."
        </p>
      </div>
    </div>
    {/* Testimonial containers... */}
    <div className="testimonial-container">
      <div className="testimonial-avatar">
        <img
          src="https://media.geeksforgeeks.org/wp-content/uploads/20240617161041/Nicole-Kidman.webp"
          alt="User Avatar"
        />
      </div>
      <div className="testimonial-text">
        <p className="testimonial-name">Chris Doe</p>
        <p className="testimonial-role">CEO at XYZ</p>
        <p>
          "A Computer Science graduate who likes When he's not working, you can
          find him learning facts, tricks and life hacks. movies in his leisure
          time."
        </p>
      </div>
    </div>
    {/* Testimonial containers... */}
    <div className="testimonial-container">
      <div className="testimonial-avatar">
        <img
          src="https://media.geeksforgeeks.org/wp-content/uploads/20240617161041/Nicole-Kidman.webp"
          alt="User Avatar"
        />
      </div>
      <div className="testimonial-text">
        <p className="testimonial-name">John Doe</p>
        <p className="testimonial-role">CEO at ABC Company</p>
        <p>
          "The results we've achieved using this platform's marketing services
          are exceptional. Our campaigns are more effective, and the team's
          insights are invaluable."
        </p>
      </div>
    </div>
    {/* <div className="fingg">
      <img src={fing} alt="" />
    </div> */}
  </div>
  </div>




    </>
  )
}

export default Testimoniall
