import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import laptop from '/laptop.jpg';
import phone from '/phone.jpg';
import img from '/img.jpg';




const carouselItems = [
  { 
    id: 1, 
    image: img, 
    title: 'Effortless Voting Anytime, Anywhere', 
    content: 'Cast your vote securely from the comfort of your home or on the go. Our intuitive platform ensures a seamless voting experience, eliminating the need for long queues and travel to polling stations. Your voice matters, and Electpoll makes sure it\'s heard.' 
  },
  { 
    id: 2, 
    image: laptop, 
    title: 'Transparency You Can See', 
    content: 'Experience an unprecedented level of transparency in elections. With Electpoll, you can track your vote and verify its inclusion in the final tally. Our blockchain-backed system guarantees an immutable record of every vote, enhancing the credibility and fairness of the electoral system.'
  },
  { 
    id: 3, 
    image: phone, 
    title: 'Robust Security for Every Vote', 
    content: 'Rest easy knowing that your vote is protected by state-of-the-art security measures. Our advanced encryption and authentication protocols ensure the integrity of the electoral process, safeguarding against fraud and manipulation. Your trust in our platform is our top priority.' 
  }
];

export default function Righthero() {
  return (
    <section className="bg-black w-full h-fit md:w-1/2 flex items-center justify-center py-8 md:py-10">
      <div className="w-full flex flex-col h-full relative">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          pagination={{ 
            clickable: true,
            el: '.swiper-pagination',
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          className="w-full h-full"
          style={{
            "--swiper-pagination-color": "#FF9900",
            "--swiper-pagination-bullet-inactive-color": "#F4F4F4",
            "--swiper-pagination-bullet-inactive-opacity": "1",
            "--swiper-pagination-bullet-size": "10px",
            "--swiper-pagination-bullet-horizontal-gap": "6px",
            "--swiper-pagination-bottom": "20px",
          }}
        >
          {carouselItems.map((item) => (
            <SwiperSlide key={item.id} className="flex items-center justify-center h-auto">
              <SwiperContent image={item.image} title={item.title} content={item.content} />
            </SwiperSlide>
          ))}
        </Swiper>
        
        {/* <div className="swiper-pagination absolute bottom-0 h-full w-full flex items-end space-x-3"></div> */}
      </div>
    </section>
  );
}

SwiperContent.propTypes = {
  image: PropTypes.func.required,
  title: PropTypes.string.required,
  content: PropTypes.string.required
}

export function SwiperContent ({ image, title, content }) {
  return (
  <div className="flex flex-col h-full">
    <div className="flex items-center justify-center px-4 sm:px-6 md:px-8">
      <img 
        src={image} 
        alt={title} 
        className="rounded-3xl w-full max-w-full sm:max-w-[500px] md:max-w-[600px] object-cover h-auto max-h-[300px] sm:max-h-[400px] md:max-h-[550px]"
      />
    </div>
    <div className="text-white flex justify-center mt-4 px-6"> 
      <div className="w-full max-w-[600px]">
        <h1 className="font-semibold text-lg sm:text-xl md:text-2xl mt-2 sm:mt-3">{title}</h1>
        <p className="text-xs sm:text-sm md:text-base text-justify mt-2">{content}</p>
      </div>
    </div>
  </div>
);
}
