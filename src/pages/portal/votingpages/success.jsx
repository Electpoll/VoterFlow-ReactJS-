import Nav from '../../../components/nav'
import { ELECTION_STATS, MOCK_USER } from '../../../components/mock'
import { NumbersBox, StatBox } from '../../../components/statbox';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import laptop from '/laptop.jpg';
import phone from '/phone.jpg';
import img from '/img.jpg';
import { SwiperContent } from '../../home/slide';
import Report from '../../home/report';
import Footer from '../../home/footer';


export default function Success() {
  const { timeRemaining, totalVotes, votePercentage } = ELECTION_STATS;
  const { voteNumber } = MOCK_USER;
  
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

  return (
    <>
    <div className="flex flex-col md:flex-row">
    <section className='px-4 sm:px-6 md:px-10 w-full md:w-1/2 flex flex-col'>
    <div className='h-fit'>
       <Nav logo={true}/>
    </div>

    <div className="flex items-center justify-center h-full">
      <div className="flex flex-col justify-center h-full">
        <h1 className='text-start font-bold text-base sm:text-lg md:text-xl'>
          You have voted Successfully!
        </h1>

          <div className="bg-black rounded-md shadow-md mt-5 py-5 sm:px-3 flex flex-col md:flex-row items-center md:justify-center gap-4 w-full">
                  <div className="md:border-e-2 border-white space-y-4 w-4/5 pe-5">
                    <p className='text-white'>Election ends in...</p>
                    <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
                      {timeRemaining.map((i, index) => (
                        <NumbersBox key={index} value={i.number} text={i.time}/>
                      ))}
                    </div>
                  </div>
                  
                  <div className="border-white pe-5">
                    <StatBox label="Votes so far..." value={totalVotes} text='People Voted' />
                  </div>
{/*         
                  <StatBox label="Vote %..." value={`${votePercentage}%`} text='(People Voted %)' /> */}
                </div>

        <p className='my-2 text-sm sm:text-base md:text-base'>
          Thank you for participating in the NAMSSN UI Elections. Your vote counted as <span className='text-orange-600'>{voteNumber}</span>.
          We sent you a mail to get your review on the election process. Your opinion will help us improve the voting experience for future elections.
        </p>
         <div className="flex items-center gap-3 my-3">
          <a href={'/'} className="my-3 w-full bg-black text-center text-white py-2 px-5 rounded-sm  border-2 border-transparent">
          Return home
         </a>
        <a href={'/'} className="my-3 w-full bg-transparent text-center text-black py-2 px-5 rounded-sm border-2 border-gray-500">
          Learn more
        </a>
       </div>
      </div>
      
    </div>


   
    </section>
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
    </div>

    <Report/>
    <Footer/>
    </>
  )
}
