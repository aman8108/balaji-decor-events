import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper styles
import "swiper/css";
import "./Essence.css"
import sideDecore from "../../Assets/golden-decoration_prev_ui.png"
function Essence() {
  return (
    <>
      <section id="service-area" className="event-area pt-130">
  <div className="container">
  <div className="col-lg-12">
        <div
          className="cat_section_headings wow zoom dj-bottom"
          style={{ visibility: "visible", animationName: "zoom" }}
        >
          <span className="cat_subheading">Elegant Venue for Memorable Events</span>
          <h4>Our Services</h4>
          <div className="cat_border" />
        </div>
      </div>
      <div className="event-owl owl-carousel owl-theme owl-loaded">
        <div
          className="owl-stage-outer"
          style={{ paddingLeft: 0, paddingRight: 0 }}
        >
          <div
         
          >

            <div className="row">
{/*               
            <Swiper className="mySwiper"
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 50,
                },
              }}
            >
        <SwiperSlide>
        
        </SwiperSlide>
        <SwiperSlide>
        <div
              className="owl-item cloned"
              style={{  marginRight: 0 }}
            >
              <div className="col-md-12 co-lg-4">
                <div className="single-event text-center">
                  <div className="event-img">
                    <a href="#">
                      <img src="https://preview.hasthemes.com/panshi/img/event/event1.jpg" alt="event" />
                    </a>
                  </div>
                  <h4>
                    <a href="#">WEDDING LAWN
                    </a>
                  </h4>
                </div>
              </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div
              className="owl-item cloned"
              style={{  marginRight: 0 }}
            >
              <div className="col-md-12 co-lg-4">
                <div className="single-event text-center">
                  <div className="event-img">
                    <a href="#">
                      <img src="https://preview.hasthemes.com/panshi/img/event/event1.jpg" alt="event" />
                    </a>
                  </div>
                  <h4>
                    <a href="#">CATERING SERVICES
                    </a>
                  </h4>
                </div>
              </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div
              className="owl-item cloned"
              style={{  marginRight: 0 }}
            >
              <div className="col-md-12 co-lg-4">
                <div className="single-event text-center">
                  <div className="event-img">
                    <a href="#">
                      <img src="https://preview.hasthemes.com/panshi/img/event/event1.jpg" alt="event" />
                    </a>
                  </div>
                  <h4>
                    <a href="#">WEDDING PLANNER
                    </a>
                  </h4>
                </div>
              </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div
              className="owl-item cloned"
              style={{  marginRight: 0 }}
            >
              <div className="col-md-12 co-lg-4">
                <div className="single-event text-center">
                  <div className="event-img">
                    <a href="#">
                      <img src="https://preview.hasthemes.com/panshi/img/event/event1.jpg" alt="event" />
                    </a>
                  </div>
                  <h4>
                    <a href="#">EVENT MANAGEMENT</a>
                  </h4>
                </div>
              </div>
            </div>
        </SwiperSlide>
        
      </Swiper> */}
      <div className="col-lg-4">
      <div
              className="owl-item cloned"
              style={{  marginRight: 0 }}
            >
              <div className="col-md-12 co-lg-4">
                <div className="single-event text-center">
                  <div className="event-img">
                    
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXvPL97vZCfh6uo8fZh1n89bEBN6GbQUOXAg&s" alt="event" />
                    
                  </div>
                  <h4>
                    <a href="#">BANQUET HALL</a>
                    <p className="collab-c">Experience timeless elegance in our venue, perfect for unforgettable and elegant banquets and gatherings.</p>
                  </h4>
                  <div className="button-ser">
              <button>View more</button>
            </div>
                </div>
              </div>
            </div>
      </div>
      <div className="col-lg-4">
      <div
              className="owl-item cloned"
              style={{   }}
            >
              <div className="col-md-12 co-lg-4">
                <div className="single-event text-center">
                  <div className="event-img">
                    
                      <img src="https://badhaihoevents.in/wp-content/uploads/2022/07/mandap-fi-1.jpeg" alt="event" />
                    
                  </div>
                  <h4>
                    <a href="#">EVENT MANAGEMENT</a>
                    <p className="collab-c">Discover an elegant, versatile venue, ideal for hosting unforgettable and memorable events and celebrations</p>
                  </h4>
                  <div className="button-ser">
              <button>View more</button>
            </div>
                </div>
              </div>
            </div>
      </div>
      <div className="col-lg-4">
      <div
              className="owl-item cloned"
              style={{  marginRight: 0 }}
            >
              <div className="col-md-12 co-lg-4">
                <div className="single-event text-center">
                  <div className="event-img">
                    
                      <img src="https://content3.jdmagicbox.com/comp/mumbai/n7/022pxx22.xx22.150401121705.f2n7/catalogue/f5-weddings-andheri-west-mumbai-wedding-planners-op6p1mxsvd.jpg" alt="event" />
                    
                  </div>
                  <h4>
                    <a href="#">WEDDING PLANNER</a>
                    <p className="collab-c">Specializing in creating perfect moments and love-filled memories for your cherished celebrations and events.</p>
                  </h4>
                  <div className="button-ser">
              <button>View more</button>
            </div>
                </div>
              </div>
            </div>
      </div>
        
            </div>
          </div>
        </div>  
        <div className="parents-two">

        <div className="row">
          <div className="col-lg-6">
          <div
              className="owl-item cloned"
              style={{  marginRight: 0 }}
            >
              <div className="col-md-12 co-lg-4">
                <div className="single-event text-center">
                  <div className="event-img">
                    
                      <img src="https://preview.hasthemes.com/panshi/img/event/event1.jpg" alt="event" />
                   
                  </div>
                  <h4>
                    <a href="#">CATERING SERVICES</a>
                    <p className="collab-c">Exquisite flavors, served with meticulous care and attention to detail, ensuring a memorable dining experience.</p>
                  </h4>
                  <div className="button-ser">
              <button>View more</button>
            </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
          <div
              className="owl-item cloned"
              style={{  marginRight: 0 }}
            >
              <div className="col-md-12 co-lg-4">
                <div className="single-event text-center">
                  <div className="event-img">
                    
                      <img src="https://www.hamaraevent.com/lib/js/kcfinder/upload/images/image3%2878%29.jpg" alt="event" />
                    
                  </div>
                  <h4>
                    <a href="#">WEDDING LAWN</a>
                    <p className="collab-c">Idyllic outdoor setting offering scenic beauty, perfect for memorable weddings and enchanting celebrations of love.</p>
                  </h4>
                  <div className="button-ser">
              <button>View more</button>
            </div>
                </div>
              </div>
            </div>
            </div>
          </div>
          </div>
        </div>
      
              <span />
            </div>
            
              <span />


           
          
  

</section>

    </>
  )
}

export default Essence
