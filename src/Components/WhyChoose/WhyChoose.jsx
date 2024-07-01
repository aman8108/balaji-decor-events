import React from 'react'
import "./WhyChoose.css"
// import mig from "../../Assets/title_bg_green.png"
import svg from "../../Assets/speaker (1).png"
import svgg from "../../Assets/experience.png"
import svggg from "../../Assets/experience.png"
import { LuPartyPopper } from "react-icons/lu";
// import svgggg from "../../Assets/dance.png"
import svggggg from "../../Assets/group.png"
function WhyChoose() {
  return (
    <>
     <section>
      <div className="container">
      <section className="features-section-two">
  <div className="auto-container">
    <div className="anim-icons">
      <span
        className="icon twist-line-1 wow zoomIn animated"
        style={{ visibility: "visible", animationName: "zoomIn" }}
      />
      <span
        className="icon twist-line-2 wow zoomIn animated"
        data-wow-delay="1s"
        style={{
          visibility: "visible",
          animationDelay: "1s",
          animationName: "zoomIn"
        }}
      />
      <span
        className="icon twist-line-3 wow zoomIn animated"
        data-wow-delay="2s"
        style={{
          visibility: "visible",
          animationDelay: "2s",
          animationName: "zoomIn"
        }}
      />
    </div>
    <div className="row">
      {/* Title Block */}
      <div
        className="title-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp animated"
        style={{ visibility: "visible", animationName: "fadeInUp" }}
      >
        <div className="inner-box">
          <div className="sec-title">
            <span className="title">Features</span>
            <h2>Our Services</h2>
          </div>
        </div>
      </div>
      {/* Feature Block */}
      <div
        className="feature-block-two col-lg-4 col-md-6 col-sm-12 wow fadeInUp animated"
        style={{ visibility: "visible", animationName: "fadeInUp" }}
      >
        <div className="inner-box">
          <div className="icon-box">
            <span className="icon flaticon-lecture" >
              <img src={svg} alt="" />
               </span>
          </div>
          <h4>
            <a href="about.html">Great Speakers</a>
          </h4>
          <div className="text">
            Dolor sit amet consectetur elit sed do eiusmod tempor incd.
          </div>
        </div>
      </div>
      {/* Feature Block */}
      <div
        className="feature-block-two col-lg-4 col-md-6 col-sm-12 wow fadeInUp animated"
        style={{ visibility: "visible", animationName: "fadeInUp" }}
      >
        <div className="inner-box">
          <div className="icon-box">
            <span className="icon flaticon-search"><img src={svgg} alt="" /></span>
          </div>
          <h4>
            <a href="about.html">Experience</a>
          </h4>
          <div className="text">
            Dolor sit amet consectetur elit sed do eiusmod tempor incd.
          </div>
        </div>
      </div>
      {/* Feature Block */}
      <div
        className="feature-block-two col-lg-4 col-md-6 col-sm-12 wow fadeInUp animated"
        data-wow-delay="400ms"
        style={{
          visibility: "visible",
          animationDelay: "400ms",
          animationName: "fadeInUp"
        }}
      >
        <div className="inner-box">
          <div className="icon-box">
            <span className="icon flaticon-diamond-1"><img src={svggg} alt="" /></span>
          </div>
          <h4>
            <a href="about.html">Networking</a>
          </h4>
          <div className="text">
            Dolor sit amet consectetur elit sed do eiusmod tempor incd.
          </div>
        </div>
      </div>
      {/* Feature Block */}
      <div
        className="feature-block-two col-lg-4 col-md-6 col-sm-12 wow fadeInUp animated"
        data-wow-delay="800ms"
        style={{
          visibility: "visible",
          animationDelay: "800ms",
          animationName: "fadeInUp"
        }}
      >
        <div className="inner-box">
          <div className="icon-box">
            <span className="icon flaticon-success" ><i className='dj-dis'><LuPartyPopper /></i></span>
          </div>
          <h4>
            <a href="about.html">Party</a>
          </h4>
          <div className="text">
            Dolor sit amet consectetur elit sed do eiusmod tempor incd.
          </div>
        </div>
      </div>
      {/* Feature Block */}
      <div
        className="feature-block-two col-lg-4 col-md-6 col-sm-12 wow fadeInUp animated"
        data-wow-delay="1200ms"
        style={{
          visibility: "visible",
          animationDelay: "1200ms",
          animationName: "fadeInUp"
        }}
      >
        <div className="inner-box">
          <div className="icon-box">
            <span className="icon flaticon-employee" ><img src={svggggg} alt="" /></span>
          </div>
          <h4>
            <a href="about.html">New People</a>
          </h4>
          <div className="text">
            Dolor sit amet consectetur elit sed do eiusmod tempor incd.
          </div>
        </div>
      </div>
    </div>
    {/* <div className="img-fgn">
      <img src={mig} alt="" />
    </div> */}
  </div>
</section>
    
      </div>

     </section>

    </>
  )
}

export default WhyChoose
