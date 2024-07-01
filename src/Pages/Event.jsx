import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Footer from '../Components/Footer/Footer'
import { Image } from 'antd'
import GalleryData from "../Pages/GalleryData"
function Event() {
  const search = useLocation();
    const path = search.pathname;
    const [serviceDetali, setDetali] = useState(GalleryData);
    const EventsF = serviceDetali.find((e) => e.slug == path);
 
  return (
    <>

<main>
  <section
    className="wedding-banner wedding-sec anniversary-banner"
    id="anniversary-banner"
  >
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="wedd-banner-content">
            <span>Anniversary Planner</span>
            <h1>
              Creating Timeless Memories: Top Anniversary Event Planners in
              Mumbai
            </h1>
            <p>
              Create unforgettable moments with the expertise of our top
              anniversary event planners in Mumbai. From meticulous planning to
              personalized touches, we ensure your anniversary celebration
              becomes a timeless memory you'll cherish forever. Trust us to
              curate a truly special and meaningful experience for you and your
              loved one.
            </p>
          </div>
        </div>
        <div className="col-md-6"></div>
      </div>
    </div>
  </section>
  <section className="how-we-make-section wedding-sec">
  <div className="container">
    <div className="row wedding-top">
      <div className="col-lg-10">
        <span className="line" />
        <div className="inner-div">
          <div className="heading-style">
            <h2>
              <span>Plan the ideal anniversary with Trupp and Fest- </span>The
              best anniversary event planners in Mumbai
            </h2>
          </div>
          <p>
            The anniversary celebration is an excellent way to commemorate a
            significant occasion. Nothing compares to a glitzy and lavish
            anniversary celebration. Without a doubt, the finest gift one can
            give on a special occasion is not something tangible, but rather
            memories of happy times spent together. They are important not only
            for couples but also for businesses, especially since only half of
            small businesses survive the first five years, according to the
            Small Business Administration. Businesses use such events to express
            gratitude to their consumers, staff, and investors. Throwing an
            anniversary party is a wonderful way to recognize the time spent
            together, whether it is a couple’s anniversary or a company’s
            anniversary. Turpp and Fest is considered to be one of the best
            anniversary planners in Mumbai, our event planners are here to make
            your anniversary a day to remember, with skilled event design,
            fantastic settings, and great catering.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>



  <section className="why-consider wedding-sec" id="anniversary-planners">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <figure className="anniversary-fig">
            <img
              src="https://www.truppandfest.com/assets/img/anniversary-service/Collage.jpg"
              alt="Trupp & Fest Anniversary Image"
            />
          </figure>
        </div>
        <div className="col-md-6">
          <div className="why-consider-info">
            <div className="heading-style">
              <h2>
                <span>Why are we considered one of the top</span>
                wedding anniversary event planners in Mumbai
              </h2>
            </div>
            <p>
              Throwing an anniversary party is a wonderful way to recognize a
              couple's time spent together, whether it is the first anniversary
              or the fiftieth anniversary. Wedding Anniversary parties not only
              assist the couple cherish their marriage but also provide loved
              ones with an opportunity to tell the couple how much their union
              has inspired those around them. One of the most momentous
              anniversaries for a couple is their 25th wedding anniversary and
              50th wedding anniversary, which is why we should celebrate it
              wholeheartedly and make it grand it's always a good idea to hire a
              good wedding anniversary organizer.
            </p>
            <p>
              We, at Trupp and Fest have ideas to turn your wedding anniversary
              into a Gala event to remember for years to come. We realize you
              want your event to be a dream come true. As a result, as a team,
              we will leave no stone unturned in order to provide you with
              nothing but the best.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>


  <section className="why-are-we-section wedding-sec">
  <div className="display-phone display-phone-event-decor">
    <figure>
      <img
        src="assets/img/event-decoration/house_warming_.jpg"
        alt="Trupp & Fest House Warming Image"
      />
    </figure>
  </div>
  <div className="row d-flex">
    <div className="col-md-6">
      <div className="why-consider-infoo">
        <div className="heading-style">
          <h2>
            <span>Housewarming planning and decoration service</span>
          </h2>
        </div>
        <p>
          Flower decorations are regarded as an extremely important aspect of a
          housewarming ceremony since they establish the mood and can make all
          the difference in a newly built home. Flowers are undoubtedly the most
          important housewarming decoration. Nothing looks or feels more new and
          lovely than a home filled with magnificent, vibrant blooms. We at
          Trupp and Fest have significant experience in helping our clients "set
          the scene" for their housewarming ceremony with fresh flowers, for an
          elegant or modest festivity.{" "}
        </p>
        <p>
          A successful execution of a housewarming party demands smooth planning
          and well-organized decor in order for you to relax and enjoy the
          occasion. We ensure that you will have a fun, well-organized event
          that is stress-free and budget-friendly.
        </p>
      </div>
    </div>
    <div className="col-md-6" id="h-100">
      <div className="display-desktop event-decor-desktop"></div>
    </div>
  </div>
</section>

<section>
        <div className="container">
            <div className="parents">
                
                {/* <h2 className="Smalltitle"><span className='interial-con'>Gallery</span> </h2> */}
               {/* <h5 className='view-gall'> <a href='/workpage'>View more</a></h5> */}
                <div className="row">
                    <div className="col-lg-4 col-lg-4 d-flex justify-content-center">
                        <div className="img-gallery">
                        <Image src="https://m.media-amazon.com/images/I/81v-xW14UeL.jpg" alt="" />
                        </div>
            
                    </div>
                    <div className="col-lg-4 d-flex justify-content-center">
                        <div className="img-gallery">
                        <Image src="https://m.media-amazon.com/images/I/81v-xW14UeL.jpg" alt="" />
                        </div>
            
                    </div>
                    <div className="col-lg-4 d-flex justify-content-center">
                        <div className="img-gallery">
                        <Image src="https://3.imimg.com/data3/CK/HV/MY-10570443/corporate-events-500x500.jpg" alt="" />
                        </div>
            
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 d-flex justify-content-center">
                        <div className="img-gallery">
                        <Image src="https://junebugweddings.com/wedding-blog/wp-content/uploads/2019/09/this-lush-modern-indian-wedding-pairs-the-natural-beauty-of-palos-verdes-with-pure-extravagance-mili-ghosh-wedding-diaries-39-700x467.jpg" alt="" />
                        </div>
            
                    </div>
                    <div className="col-lg-4 d-flex justify-content-center">
                        <div className="img-gallery">
                        <Image src="https://static01.nyt.com/images/2023/05/14/multimedia/FAT-INDIAN-WEDDINGS-01-hptq/FAT-INDIAN-WEDDINGS-01-hptq-superJumbo.jpg" alt="" />
                        </div>
            
                    </div>
                    <div className="col-lg-4 d-flex justify-content-center">
                        <div className="img-gallery">
                        <Image src="https://static01.nyt.com/images/2023/05/14/multimedia/FAT-INDIAN-WEDDINGS-01-hptq/FAT-INDIAN-WEDDINGS-01-hptq-superJumbo.jpg" alt="" />
                        </div>
            
                    </div>
                    
                </div>
               
            
     
            </div>
        </div>
      </section>
  

 
  

</main>
 <Footer/>
    </>
  )
}

export default Event