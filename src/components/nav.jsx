import { useState } from 'react';
import PropTypes from 'prop-types';
import './nav.css';

Nav.propTypes = {
    link: PropTypes.string,
    logo: PropTypes.bool
  }
export default function Nav ({link, logo}) {
    const [activeLink, setActiveLink] = useState(link);

    // const activeDashboard = dashboard ? 'active' : ''
    
  return (
    <>
    {/* Nav  */}
    <div className="flex items-center justify-between">
    <div className={`${logo ? 'block' : 'hidden'} hidden md:block`}>
         <img src="/logo.jpg" alt="" className='' />
    </div>
    <div className="nav">
        <ul className='flex justify-around cursor-pointer'>
            <a href="/" className='font-bold text-base md:text-lg mx-5 relative py-1'>
              <li className={activeLink === 'home' ? 'active' : ''} onClick={() => setActiveLink('home')}>Home</li>
            </a>
            <a href="/voting-portal" className={`font-bold text-base md:text-lg mx-5 relative py-1 ${link == 'dashboard' ? 'block' : 'hidden'}`}>
              <li className={activeLink === 'dashboard' ? 'active' : ''} onClick={() => setActiveLink('dashboard')}>Dashboard</li>
            </a>
            <a href="/result" className='font-bold text-base md:text-lg mx-5 relative py-1'>
              <li className={activeLink === 'result' ? 'active' : ''} onClick={() => setActiveLink('result')}>Results</li>
            </a>
            
        </ul>
    </div>
    </div>
    </>
  )
}
