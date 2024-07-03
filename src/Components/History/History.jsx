import React from 'react'
import "./History.css"
import { Image } from 'antd'
import { Link } from 'react-router-dom'

function History() {
  return (
    <>
      <section className="about-us spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="about-left">
                <div className="section-title">
                  <span>a memorable holliday</span>
                  <h2>
                    Since 1975 <br />
                    for Service
                  </h2>
                </div>
                <p className="second-text">
                Established in 1975, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat fugit architecto facere exercitationem blanditiis a repellat labore laborum reiciendis dolores quidem culpa, odit non consequatur, nesciunt necessitatibus aspernatur maiores sapiente voluptatibus vel. Error corrupti fugiat, provident asperiores neque iure eius culpa iusto, explicabo repellendus minima.
                </p>
                <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus et laboriosam tempore eligendi perferendis cum omnis, quos numquam maxime consequatur perspiciatis illo architecto, nostrum placeat rerum, praesentium labore nemo qui odio iure sed. Assumenda?
                </p>
                <button data-bs-toggle="modal"
        data-bs-target=""
         className="primaryy-btnn">
                 <Link to="/contact">
                 Make a Reservation
                 </Link>
                  
                </button>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row">
                <div className="col-lg-6 col-md-7">
                  <div className="about-img">
                    <Image src="https://content.jdmagicbox.com/comp/mumbai/d5/022pxx22.xx22.221220161826.c8d5/catalogue/vedamm-banquet-goregaon-east-mumbai-banquet-halls-9sqkd0e9mo.jpg" alt="" />
                  </div>
                </div>
                <div className="col-lg-6 col-md-5">
                  <div className="about-img second-img">
                    <Image src="https://cdn0.weddingwire.in/vendor/9070/3_2/960/jpg/banquet-halls-the-elite-banquet-banquet-hall-8_15_379070-164726874719857.jpeg" alt="" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-5 col-md-5">
                  <div className="about-img third-img">
                    <Image src="https://www.ajivasanhall.com/images/dec/weddingdecor.jpg" alt="" />
                  </div>
                </div>
                <div className="col-lg-7 col-md-7">
                  <div className="about-img">
                    <Image src="https://www.oyorooms.com/blog/wp-content/uploads/2018/03/fe-34.jpg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default History
