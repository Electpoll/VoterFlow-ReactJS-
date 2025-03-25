// import logo from '/logo (light).png'
// import Outline from '/Outline.svg'

// export default function sidebar() {
//   return (
//     <div>
//         <div className="h-screen bg-black p-10">
//             <img src={logo} alt="" className='my-10'/>
//             <div className="flex items-center">
//             <div className="">
//             <button className='pl-2 pr-20 py-3 flex items-center text-xl rounded-xl bg-[#FF9900] text-black font-semibold'>
//                 <svg  className='mx-2' width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <path d="M23.3333 3.33331H9.99996C9.1159 3.33331 8.26806 3.6845 7.64294 4.30962C7.01782 4.93474 6.66663 5.78259 6.66663 6.66665V33.3333C6.66663 34.2174 7.01782 35.0652 7.64294 35.6903C8.26806 36.3155 9.1159 36.6666 9.99996 36.6666H30C30.884 36.6666 31.7319 36.3155 32.357 35.6903C32.9821 35.0652 33.3333 34.2174 33.3333 33.3333V13.3333L23.3333 3.33331ZM30 33.3333H9.99996V6.66665H21.6666V15H30V33.3333Z" fill="#00010f"/>
//                 </svg> Check Details </button>
//             <button></button>
//             <button></button>
//             <button></button>
//             </div>
//             </div>
//         </div>
//     </div>
//   )
// }

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { 
  FileText, 
  Vote, 
  CheckCircle2, 
  LogOut,
  BarChart,
  Shield 
} from 'lucide-react';

export default function Sidebar() {
  return (
    <div className="h-screen bg-black p-6 w-64 flex flex-col justify-between">
      <div>
        <img 
          src="/logo.jpg" 
          alt="Electpo Logo" 
          className="mb-10"
        />
        
        <nav className="space-y-4">
          <SidebarLink 
            to="/portal/check-details" 
            icon={<FileText className="mr-3 text-black" />} 
            label="Check Details" 
          />
          <SidebarLink 
            to="/portal/cast-vote" 
            icon={<Vote className="mr-3 text-black" />} 
            label="Cast Vote" 
          />
          <SidebarLink 
            to="/portal/verify-choices" 
            icon={<CheckCircle2 className="mr-3 text-black" />} 
            label="Verify Choices" 
          />
          <SidebarLink 
            to="/portal/results" 
            icon={<BarChart className="mr-3 text-black" />} 
            label="Election Results" 
          />
          <SidebarLink 
            to="/portal/transparency-report" 
            icon={<Shield className="mr-3 text-black" />} 
            label="Transparency Report" 
          />
        </nav>
      </div>
      
      <SidebarLink 
        to="/portal/logout" 
        icon={<LogOut className="mr-3 text-black" />} 
        label="Logout" 
        className="mb-6"
      />
    </div>
  );
}

SidebarLink.propTypes = {
  to: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
};

function SidebarLink({ to, icon, label, className = '' }) {
  return (
    <Link 
      to={to}
      className={`
        w-full text-left px-4 py-3 
        flex items-center 
        bg-[#FF9900] text-black 
        font-semibold rounded-xl 
        hover:bg-orange-600 
        transition-colors 
        ${className}
      `}
    >
      {icon}
      {label}
    </Link>
  );
}
