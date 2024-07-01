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
            <span>{EventsF.heading}</span>
            <h1>
              {EventsF. detaulsh1}
            </h1>
            <p>
              {EventsF.detailsTwo}
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
             {EventsF.detailsTwo}
            </h2>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa laudantium dolor asperiores quos iusto, eum optio! Reiciendis tenetur omnis maxime unde maiores vero alias nesciunt, sunt cupiditate, quos expedita! Aliquam nesciunt dolorum libero laborum rerum laudantium quibusdam nobis, eveniet ipsum quia. Iste aut expedita quam ipsa? Laborum obcaecati expedita, iusto asperiores sint architecto ratione molestiae tenetur? Eum incidunt voluptate accusantium dolores quo excepturi assumenda laboriosam.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa laudantium dolor asperiores quos iusto, eum optio! Reiciendis tenetur omnis maxime unde maiores vero alias nesciunt, sunt cupiditate, quos expedita! Aliquam nesciunt dolorum libero laborum rerum laudantium quibusdam nobis, eveniet ipsum quia. Iste aut expedita quam ipsa? Laborum obcaecati expedita, iusto asperiores sint architecto ratione molestiae tenetur? Eum incidunt voluptate accusantium dolores quo excepturi assumenda laboriosam.
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
              src= "https://dreamzweddingplanner.com/img/phone2.jpg"
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
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam molestiae sequi nisi cupiditate autem beatae expedita, veniam doloribus distinctio! Sunt sed, atque facere recusandae voluptas placeat quibusdam non doloremque facilis praesentium ducimus, enim, dolorum eum dicta ut ipsum asperiores molestiae. Dolore debitis recusandae minus quibusdam magni ullam cupiditate impedit excepturi eos porro. Consectetur, magni. Exercitationem.
            </p>
            <p>
             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, repellendus. Ex aut ipsa obcaecati veritatis voluptate quasi nostrum mollitia exercitationem autem voluptas tenetur odio optio nisi aspernatur consequatur laboriosam, deserunt nihil facilis. Corporis, enim unde.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>


  <section className="why-are-we-section wedding-sec">

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