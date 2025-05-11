import React from 'react';
import Slider from 'react-slick';
import { Navbar } from '../Components/Navbar';

import heros from '../Assests/image2.png';
import cards1 from '../Assests/card1.png';
import cards2 from '../Assests/card2.png';
import cards3 from '../Assests/card3.png';
import cards4 from '../Assests/card4.png';
import gut from '../Assests/gut.png';
import banner1 from '../Assests/banner1.png';
import banner2 from '../Assests/banner2.png';
import banner3 from '../Assests/banner3.png';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const cards = [
  {
    img: cards1,
    text: "Who’s ready for what role, and when?",
  },
  {
    img: cards2,
    text: "Do our teams have the capabilities to deliver our strategy?",
  },
  {
    img: cards3,
    text: "What does our culture enable — or inhibit?",
  },
  {
    img: cards4,
    text: "Where should we invest in leadership development?",
  },
];

const banners = [
  {
    head: "Unlock Xcellence",
    img: banner1,
    text: "Deliver Immersive Talent Diagnostics Solutions through Talent Technical Engine"
  },
  {
    head: "Insight Tips",
    img: banner2,
    text: "Powers your leadership development, change programs, and workforce strategies with personalized diagnostics, branded portals and enterprise-grade compliance."
  },
  {
    head: "Insight Tips",
    img: banner3,
    text: "Powers your leadership development, change programs, and workforce strategies with personalized diagnostics, branded portals and enterprise-grade compliance."
  }
];

const settings = {
  dots: true,
  infinite: true,
  speed: 800,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  fade: true,
  arrows: true,
  pauseOnHover: false,
};

export const Home = () => {
  return (
    <div>
      <Navbar />

      {/* Slider Section */}
      <div className='overflow-hidden'>
      <Slider {...settings}>
        {banners.map((banner, index) => (
          <div key={index} className="w-full h-[100vh] bg-[#F5F1F1] relative">
            <img src={banner.img} alt={`banner-${index}`} className="absolute h-[100vh] w-full overflow-hidden" />
            <div className="w-[90%] mx-auto relative h-full grid grid-cols-12 text-white">
              <div className="col-span-7 flex flex-col justify-center items-start text-left">
                <h1 className="text-white font-koPub md:text-[80px] lg:text-[100px]  underline decoration-1 underline-offset-[35px]">
                  {banner.head}
                </h1>
                <p className="font-koPub text-[20px] md:text-[30px]  max-w-[65%] ">
                  {banner.text}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      </div>

      {/* Section 2 */}
      <div className="bg-white w-full py-12">
        <div className="max-w-[1380px] mx-auto">
          <h1 className="text-[24px] md:text-[30px] font-koPub mb-10">
            What we need to build high performing TEAMS today?
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-7">
            {cards.map((card, index) => (
              <div key={index} className="text-center overflow-hidden">
                <img
                  src={card.img}
                  alt={`Card ${index + 1}`}
                  loading="lazy"
                  className="h-[250px] w-full object-cover mx-auto"
                />
                <div className="bg-[#F1E9E9] h-[80px] flex items-center justify-center px-4 text-sm font-medium font-koPub">
                  {card.text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section 3 */}
      <div className="w-full h-auto md:h-[90vh] bg-[#8B53FF]">
        <div className="max-w-[1380px] mx-auto h-full grid grid-cols-1 md:grid-cols-12 py-[50px] items-center">
          <div className="md:col-span-5">
            <img src={gut} alt="gut-instinct" className="w-full h-auto" />
          </div>
          <div className="md:col-span-7 flex flex-col ms-10">
            <h1 className="text-white font-koPub text-[32px] md:text-[80px] text-start leading-tight">
              Gut Instinct Isn’t Enough Anymore
            </h1>
            <p className="font-koPub text-[18px] md:text-[30px] text-white text-start mt-4">
              Organizations move fast. Markets shift overnight. Your talent strategy needs to be anchored in evidence.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
