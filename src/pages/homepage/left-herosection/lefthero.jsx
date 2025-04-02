import { Link } from 'react-router-dom';
import Nav from '../../../components/nav';

export default function Lefthero() {
  return (
    <section className='px-4 sm:px-6 md:px-10 pt-4 md:w-1/2 min-h-[80vh] md:h-screen flex flex-col'>
      <Nav logo={true} link="home"/>
      
      {/* Hero Content - Centered vertically on mobile, aligned top on desktop */}
      <div className="flex-grow flex flex-col justify-center md:justify-start md:mt-24 lg:mt-40">
      
        <button className='bg-black text-white font-bold rounded-3xl px-4 py-2 my-3 sm:my-5 text-sm sm:text-base'>
          Cast Your Vote
        </button>
        
        <h1 className='my-3 sm:my-4 font-bold text-xl sm:text-2xl md:text-3xl leading-tight'>
          NAMSSN UI Elections - Empower Your Voice, Shape The Future, Vote Your Choice!
        </h1>
        
        <p className='my-2 text-sm sm:text-base md:text-base'>
          Welcome to NAMSSN UI Elections powered by Electpoll. We&apos;re here to empower your voice and make voting your choice easier than ever. Your vote matters. Make it count! Click below to cast your vote and participate in shaping the future of NAMSSN UI.
        </p>
        
        <div className="flex flex-wrap gap-3 mt-4 sm:mt-5">
          <Link to={'/login'}>
            <button className="bg-amber-500 text-black rounded-lg border-2 border-transparent py-2 px-6 sm:px-8 font-bold hover:bg-black hover:text-amber-500 transition-all text-sm sm:text-base">
              Vote Now
            </button>
          </Link>
          
          <button className="bg-transparent text-black rounded-lg border-2 border-gray-500 py-2 px-6 sm:px-8 font-bold hover:bg-black hover:text-white hover:border-transparent transition-all text-sm sm:text-base">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}