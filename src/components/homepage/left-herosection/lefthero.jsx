import { useState } from 'react';
import './lefthero.css';
import logo from '/logo.jpg'


export default function Lefthero() {
  const [activeLink, setActiveLink] = useState(null);

  const handleMouseEnter= (link) => {
    setActiveLink(link)
  }
  const handleMouseLeave = () => {
    setActiveLink(null);
  };
  return (
    <section className='m-10 w-1/2 h-screen'>
        {/* Nav  */}
        <div className="flex items-center justify-between">
            <div className="">
                 <img src={logo} alt="" className='' />
            </div>
            <div className="nav">
                <ul className='flex justify-around cursor-pointer'>
                    <a href="" className='font-bold text-lg mx-5 relative py-1'>
                      <li className={activeLink === 'home' ? 'active' : ''} onMouseOver={() => handleMouseEnter('home')} onMouseLeave={handleMouseLeave}>Home</li>
                    </a>
                    <a href="" className='font-bold text-lg mx-5 relative py-1'>
                      <li className={activeLink === 'result' ? 'active' : ''} onMouseOver={() => handleMouseEnter('result')} onMouseLeave={handleMouseLeave}>Results</li>
                    </a>
                    
                </ul>
            </div>
        </div>

        {/* Hero */}
        <div className="mt-40">
            <button className='bg-black text-white font-bold rounded-3xl px-4 py-2 my-5'>Cast Your Vote</button>
            <h1 className='mt-5 font-bold text-3xl'>NAMSSN UI Elections - Empower Your Voice, Shape The Future, Vote Your Choice!</h1>
            <p className='my-2'>Welcome to NAMSSN UI Elections powered by Electpoll. We&apos;re here to empower your voice and make voting your choice easier than ever. Your vote matters. Make it count! Click below to cast your vote and participate in shaping the future of NAMSSN UI.</p>
            <button className="bg-amber-500 text-black rounded-lg border-2 border-transparent py-2 px-8 my-5 font-bold hover:bg-black hover:text-amber-500 transition-all">Vote Now</button>
            <button className="bg-transparent text-black rounded-lg border-2 border-gray-500 py-2 px-8 m-5 font-bold hover:bg-black hover:text-white hover:border-transparent transition-all">Learn More</button>
        </div>
    </section>
  )
}
