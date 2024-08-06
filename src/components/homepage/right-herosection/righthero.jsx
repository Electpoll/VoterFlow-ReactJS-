import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import me from '/IMG_0840.jpg';
import me2 from '/IMG_9942.jpg';
import img from '/img.jpg';

export default function Righthero() {
    const settings = {
       dots: true,
       infinite: true,
       speed: 500,
       slidesToShow: 1,
       slidesToScroll: 1,
       initialSlide: 2,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
      };
  return (
    <section className="bg-black w-1/2 h-screen">
             <Slider {...settings} className="">
            <div className="w-3/4 mx-auto my-12 text-white">
                <img src={img} alt="" className="rounded-3xl w-1/2" />
                <h1 className="font-semibold text-2xl mt-5">Effortless Voting Anytime, Anywhere</h1>
                <p className="mt-3 text-justify">Cast your vote securely from the comfort of your home or on the go. Our intuitive platform ensures a seamless voting experience, eliminating the need for long queues and travel to polling stations. Your voice matters, and Electpoll makes sure it&apos;s heard.</p>
            </div>
            <div className="w-3/4 mx-auto my-12 text-white">
            <img src={me} alt="" className="rounded-3xl w-1/2"/>
            <h1 className="font-semibold text-2xl mt-5">Effortless Voting Anytime, Anywhere</h1>
                <p className="mt-3 text-justify">Cast your vote securely from the comfort of your home or on the go. Our intuitive platform ensures a seamless voting experience, eliminating the need for long queues and travel to polling stations. Your voice matters, and Electpoll makes sure it&apos;s heard.</p>
            </div>
            <div className="w-3/4 mx-auto my-12 text-white">
            <img src={me2} alt="" className="rounded-3xl w-1/2"/>
            <h1 className="font-semibold text-2xl mt-5">Effortless Voting Anytime, Anywhere</h1>
                <p className="mt-3 text-justify">Cast your vote securely from the comfort of your home or on the go. Our intuitive platform ensures a seamless voting experience, eliminating the need for long queues and travel to polling stations. Your voice matters, and Electpoll makes sure it&apos;s heard.</p>
         
             </div>
            </Slider>

{/*        
       
        
        <div className="">
            <img src={img} alt="" className="w-96 h-auto "/>
        </div>
        </Slider> */}


    </section>
  )
}
