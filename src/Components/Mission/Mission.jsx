import React from 'react'
import "./Mission.css"
import { Link } from 'react-router-dom'

function Mission() {
  return (
    <>
      <section>
        <div className="container">
        <div className="row">
      <div className="col-lg-12">
        <div
          className="cat_section_headings wow zoom"
          style={{ visibility: "visible", animationName: "zoom" }}
        >
          {/* <span className="cat_subheading">Who we are</span> */}
          <h4>Our Gallery</h4>
          <div className="cat_border" />
        </div>
      </div>
    </div>
        <h5 className='view-gall'> <a href='/gallery-page'>View more</a></h5>
          <div className="row">
            <div className="col-lg-4">
              <div className="banq-imq">
                <img src="https://cdn0.weddingwire.in/vendor/9070/3_2/960/jpg/banquet-halls-the-elite-banquet-banquet-hall-8_15_379070-164726874719857.jpeg" alt="" />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="banq-imq">
                 <img src="https://cdn0.weddingwire.in/vendor/9728/3_2/960/jpg/banquet-halls-tiaraa-banquets-stage-decor_15_389728-163670128562837.jpeg" alt="" />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="banq-imq">
              <img src="https://cdn0.weddingwire.in/vendor/8602/3_2/960/jpg/weddingvenues-bhushan-banquet-hall-banquethall-3_15_428602-166737477526098.jpeg" alt="" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="banq-imq">
                <img src="https://makeevents.co.uk/wp-content/uploads/2017/08/Virtual-reality-headset-2-event-activities.jpg" alt="" />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="banq-imq">
                <img src="https://www.visionvivaah.com/blog/wp-content/uploads/2019/05/Best-Event-Planners-In-Mumbai.jpg" alt="" />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="banq-imq  bot">
              <img src="https://kalapeet.com/wp-content/uploads/2021/04/corporate-eents.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Mission
