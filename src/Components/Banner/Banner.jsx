import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './banner.css';
import { Fade, Slide } from "react-awesome-reveal";

function Banner() {
  const banners = [
    {
      image: 'https://www.theweddingschool.in/wp-content/uploads/elementor/thumbs/blog-68-1-e1666101435833-pwec0jovb59azka3un77xj7at29f919jd6opn49xf4.jpg',
      title: 'Wedding Planner',
      description: 'Transforming dreams into reality with expert wedding planning service.'
    },
    {
      image: 'https://watermark.lovepik.com/photo/20211123/large/lovepik-wedding-banquet-hall-picture_500865604.jpg',
      title: ' Banquet Lawn',
      description: 'A Premium Banquet Lawn for Events and Weddings'
    },
    {
      image: 'https://static.toiimg.com/photo/msid-64957021,width-96,height-65.cms',
      title: 'Event Managment',
      description: 'Expert event planning and management for seamless, memorable experiences'
    },
    {
      image: 'https://cdn0.weddingwire.in/vendor/4652/3_2/960/jpg/4373165d-55c1-43ae-9adf-7f5731192018_15_424652-169398266932632.jpeg',
      title: 'Catering Services',
      description: 'Exquisite catering delivering gourmet flavors and exceptional dining experiences.'
    },
    {
      image: 'https://content.jdmagicbox.com/comp/mumbai/j1/022pxx22.xx22.210624161023.l9j1/catalogue/elite-banquet-andheri-west-mumbai-banquet-halls-del80qo0y8.jpg?clr=',
      title: 'Banquite halll',
      description: 'Elegant banquet hall for unforgettable celebrations and sophisticated gatherings.'
    }
  ];

  return (
    <section className="banner-area">
      <Carousel
        showArrows={true}
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        interval={5000}
      >
        {banners.map((banner, index) => (
          <div
            key={index}
            className="banner-slide"
            style={{ backgroundImage: `url(${banner.image})` }}
          >
            <div className="banner-content">
           
              <h1>{banner.title}</h1>
              
              
              <p>{banner.description}</p>
              

              
              <a href="#services" className="banner-button">Explore More</a>
              
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
}

export default Banner;
