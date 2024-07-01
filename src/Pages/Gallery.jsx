import React, { useLayoutEffect, useState } from 'react'
import Footer from '../Components/Footer/Footer'
import galfig from "../Assets/title_bg_green.png"
import WorkTab from './WorkTab'
import { Link } from 'react-router-dom'

function Gallery() {
  const [items, setItems] = useState([]);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
    setItems(WorkTab);
  }, []);

  const filterItems = (category) => {
    if (category === "All") {
      setItems(WorkTab);
    } else {
      const updatedItems = WorkTab.filter((item) => item.category === category);
      setItems(updatedItems);
    }
  };

  return (
    <>
    <div
  className="breadcrumb-area breadcrumb-padding bg-img"
  style={{ backgroundImage: "url(https://img.freepik.com/free-vector/vector-hall-banquet-wedding-interior-ballroom-with-tables-chairs-feast-celebration_1441-2354.jpg)" }}
>
  <div className="container">
    <div className="breadcrumb-content text-center">
      <h2>Gallery</h2>
      <ul>
        <li>
            <Link to="/">
            Gallery
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
      <section id="project-version-one">
  <div className="container">
  <div className="row">
      <div className="col-lg-12">
        <div
          className="cat_section_headings wow zoom"
          style={{ visibility: "visible", animationName: "zoom" }}
        >
          <span className="cat_subheading">Our Gallery</span>
          {/* <h4>Banquet & Events</h4> */}
          <div className="cat_border" />
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-12">
        <ul className="gallery-filter">
          <li data-filter="all"onClick={() => filterItems("All")} className="filter active">
            <span>All</span>
          </li>
          <li data-filter=".meeting"onClick={() => filterItems("banquitehall")} className="filter">
            <span>BANQUET HALL</span>
          </li>
          <li data-filter=".talking"onClick={() => filterItems("weddinglawn")} className="filter">
            <span>WEDDING LAWN</span>
          </li>
          <li data-filter=".conference"onClick={() => filterItems("CATERINGSERVICES")} className="filter">
            <span>CATERING SERVICES</span>
          </li>
          <li data-filter=".events"onClick={() => filterItems("weddingplanner")} className="filter">
            <span>WEDDING PLANNER</span>
          </li>
          <li data-filter=".party"onClick={() => filterItems("eventmagagment")} className="filter">
            <span>EVENT MANAGEMENT</span>
          </li>
          
        </ul>
      </div>
    </div>
    <div className="row nor4al-gallery" id="image-gallery-mix">
     
      {
        items.map((v,i)=>{
          return(
            <>
            <div
        className="col-lg-4 col-sm-6 col-xs-12 concert party mix"
        style={{ display: "inline-block" }}
      >
        <div className="img-wrap">
          <img src={v.imageUr1} alt="" />
          <a className="fancybox" href="images/project-v1/1.jpg">
            <div className="content-wrap hvr-rectangle-out">
              <div className="border">
                <div className="content">
                  <h4>Awesome Image Really Awesome</h4>
                  <span>This is Our Gallery image</span>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div></>
          )
        })
      }
        
      </div>
     
     
    </div>
  
</section>

 <Footer/>
    </>
  )
}

export default Gallery
