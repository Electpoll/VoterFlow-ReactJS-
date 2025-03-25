import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
// import 'swiper/css';
import 'swiper/swiper-bundle.css'
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';
import laptop from '/laptop.jpg';
import phone from '/phone.jpg';
import img from '/img.jpg';



// const carouselItems = [
//   { id: 1, image:{img}, title: 'Effortless Voting Anytime, Anywhere', content: 'Cast your vote securely from the comfort of your home or on the go. Our intuitive platform ensures a seamless voting experience, eliminating the need for long queues and travel to polling stations. Your voice matters, and Electpoll makes sure it&apos;s heard.' },
//   { id: 2, image:{phone}, title: 'Robust Security for Every Vote', content: 'Rest easy knowing that your vote is protected by state-of-the-art security measures. Our advanced encryption and authentication protocols ensure the integrity of the electoral process, safeguarding against fraud and manipulation. Your trust in our platform is our top priority.' },
//   { id: 3, image: {laptop}, title: 'Transparency You Can See', content: 'Experience an unprecedented level of transparency in elections. With Electpoll, you can track your vote and verify its inclusion in the final tally. Our blockchain-backed system guarantees an immutable record of every vote, enhancing the credibility and fairness of the electoral system.'},
  
// ]; 

export default function Righthero() {
  return (
    <section className="bg-black md:w-1/2 h-screen flex items-center justify-center py-10">
      <Swiper
      modules={[Pagination]}
      spaceBetween={0}
      slidesPerView={1}
      pagination={{ clickable: true }}
   
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      className='min-h-full '
    >
      <SwiperSlide>
      <div className="">
        <div className="flex items-center justify-center ">
          <img src={img} alt="" className='rounded-3xl max-w-[600px] max-h-[550px]'/>
        </div>
        <div className="text-white flex justify-center">
        <div className="max-w-[600px]">
        <h1 className="font-semibold text-xl mt-3"> Effortless Voting Anytime, Anywhere </h1>
        <p className="text-sm text-justify "> Cast your vote securely from the comfort of your home or on the go. Our intuitive platform ensures a seamless voting experience, eliminating the need for long queues and travel to polling stations. Your voice matters, and Electpoll makes sure it&apos;s heard. </p>
        </div>
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="">
        <div className="flex items-center justify-center ">
          <img src={laptop} alt="" className='rounded-3xl min-w-[600px] max-h-[550px]'/>
        </div>
        <div className="text-white flex justify-center">
        <div className="max-w-[600px]">
        <h1 className="font-semibold text-xl mt-3"> Effortless Voting Anytime, Anywhere </h1>
        <p className="text-sm text-justify "> Cast your vote securely from the comfort of your home or on the go. Our intuitive platform ensures a seamless voting experience, eliminating the need for long queues and travel to polling stations. Your voice matters, and Electpoll makes sure it&apos;s heard. </p>
        </div>
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="">
        <div className="flex items-center justify-center ">
          <img src={phone} alt="" className='rounded-3xl min-w-[600px] max-h-[550px]'/>
        </div>
        <div className="text-white flex justify-center">
        <div className="max-w-[600px]">
        <h1 className="font-semibold text-xl mt-3"> Effortless Voting Anytime, Anywhere </h1>
        <p className="text-sm text-justify "> Cast your vote securely from the comfort of your home or on the go. Our intuitive platform ensures a seamless voting experience, eliminating the need for long queues and travel to polling stations. Your voice matters, and Electpoll makes sure it&apos;s heard. </p>
        </div>
        </div>
      </div>
      </SwiperSlide>
    </Swiper>
      
      {/* <div className="flex">
    <Swiper
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={0}
      slidesPerView={1}
      pagination={{ clickable: true }}
   
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      style={{
        "--swiper-pagination-color": "#FF9900",
        "--swiper-pagination-bullet-inactive-color": "#F4F4F4",
        "--swiper-pagination-bullet-inactive-opacity": "1",
        "--swiper-pagination-bullet-size": "12px",
        "--swiper-pagination-bullet-horizontal-gap": "4px",
        "--swiper-pagination-left": "0",
        "--swiper-pagination-right": "0",
        "--swiper-pagination-bottom": "0",
        "--swiper-pagination-top": "auto"
      }} 
    >
      <SwiperSlide>
        <div className=''>
         <div className=" text-white mx-auto">
                <img src={img} alt="" className="rounded-3xl max-w-[500px] max-h-[500px]" />
                <h1 className="font-semibold text-2xl mt-3"> Effortless Voting Anytime, Anywhere </h1>
                 <p className="text-lg text-justify"> Cast your vote securely from the comfort of your home or on the go. Our intuitive platform ensures a seamless voting experience, eliminating the need for long queues and travel to polling stations. Your voice matters, and Electpoll makes sure it&apos;s heard. </p>
            </div>
            </div>
      </SwiperSlide>
      <SwiperSlide>
         <div className=" text-white">
           <img src={phone} alt="" className="rounded-3xl h-auto"/>
           <h1 className="font-semibold text-2xl mt-5"> Robust Security for Every Vote </h1>
            <p className="mt-3 text-justify w-3/4">Rest easy knowing that your vote is protected by state-of-the-art security measures. Our advanced encryption and authentication protocols ensure the integrity of the electoral process, safeguarding against fraud and manipulation. Your trust in our platform is our top priority.</p>
           </div> 
      </SwiperSlide>
      <SwiperSlide>
       <div className="text-white">
           <img src={laptop} alt="" className="rounded-3xl h-auto"/>
           <h1 className="font-semibold text-2xl mt-5"> Transparency You Can See </h1>
            <p className="mt-3 text-justify w-3/4">Experience an unprecedented level of transparency in elections. With Electpoll, you can track your vote and verify its inclusion in the final tally. Our blockchain-backed system guarantees an immutable record of every vote, enhancing the credibility and fairness of the electoral system.</p>
           </div> 
      </SwiperSlide>

    </Swiper> 
    </div> */}
    </section>
  );
}