import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const sliderData = [
  { id: 1, image: 'https://img.freepik.com/free-vector/gradient-ui-ux-background-illustrated_23-2149050182.jpg?t=st=1722523475~exp=1722527075~hmac=c362ffa373b3530802f3cfe896c414c01055f9b1378eeee5b90f0d5e6578cb25&w=996', title: 'Projet React', description: 'Application de gestion de tache' },
  { id: 2, image: 'https://img.freepik.com/free-vector/gradient-ui-ux-landing-page_52683-69534.jpg?t=st=1722523448~exp=1722527048~hmac=554f5f81eba640ac7bfca63704db1e9335efcd214f6cf85d875ac767aef85b8b&w=996', title: 'Design UX/UI', description: 'Application météo' },
  { id: 3, image: 'https://img.freepik.com/free-vector/gradient-ui-ux-landing-page_23-2149065785.jpg?t=st=1722523399~exp=1722526999~hmac=d1c425c6562b9ac615e572bb70008d9e73340d43592ff2977761ce06b1237762&w=996', title: 'Site E-commmerce', description: 'Apllication E-commerce avec React' },
];

const SliderSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section className="py-16 bg-yellow-600">
      <div className="container mx-auto px-4">
        <Slider {...settings}>
          {sliderData.map(slide => (
            <div key={slide.id} className="p-4">
              <img src={slide.image} alt={slide.title} className="w-full h-64 object-cover rounded-lg" />
              <h3 className="text-2xl font-bold text-center mt-4">{slide.title}</h3>
              <p className="text-gray-600 text-center">{slide.description}</p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default SliderSection;
