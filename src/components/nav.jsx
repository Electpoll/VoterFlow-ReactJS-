import { useState } from 'react';
import PropTypes from 'prop-types';
import './nav.css';
import { Link } from 'react-router-dom';

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
    <div className="flex items-center justify-between min-h-fit py-4 border-b-2 border-gray-200 md:border-none">
    <div className={`${logo ? 'block' : 'hidden'}`}>
         <img src="/logo.jpg" alt="" className='h-6 md:h-auto' />
    </div>
    <div className="nav">
        <ul className='flex justify-around cursor-pointer'>
            <Link to="/" className='font-bold text-sm sm:text-base md:text-lg mx-2 md:mx-5 relative py-1'>
              <li className={activeLink === 'home' ? 'active' : ''} onClick={() => setActiveLink('home')}>Home</li>
            </Link>
            <Link to="/voting-portal" className={`font-bold text-sm sm:text-base md:text-lg mx-2 md:mx-5 relative py-1 ${link == 'dashboard' ? 'block' : 'hidden'}`}>
              <li className={activeLink === 'dashboard' ? 'active' : ''} onClick={() => setActiveLink('dashboard')}>Dashboard</li>
            </Link>
            <Link to="/voting-portal/results" className='font-bold text-sm sm:text-base md:text-lg mx-2 md:mx-5 relative py-1'>
              <li className={activeLink === 'result' ? 'active' : ''} onClick={() => setActiveLink('result')}>Results</li>
            </Link>
            
        </ul>
    </div>
    </div>
    </>
  )
}
