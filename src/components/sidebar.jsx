import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { 
  FileText, 
  Vote, 
  LogOut,
  BarChart,
  Shield,
  Menu,
  X
} from 'lucide-react';

Sidebar.propTypes = {
  for: PropTypes.string.isRequired,
  logout: PropTypes.bool.isRequired
};

export default function Sidebar({ for: section = '', logout: arg = '' }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const votingNavs = [
    { to: "/voting-portal", icon: <FileText className="mr-2 md:mr-3" />, label: "Check Details" },
    { to: "/voting-portal/cast-vote", icon: <Vote className="mr-2 md:mr-3" />, label: "Cast Vote" },
  ];

  const resultsNavs = [
    { to: "/voting-portal/results", icon: <BarChart className="mr-2 md:mr-3" />, label: "Election Results" },
    { to: "/voting-portal/transparency-report", icon: <Shield className="mr-2 md:mr-3" />, label: "Transparency Report" }
  ];

  const logNav = [
    { to: "/login", icon: <LogOut className="mr-2 md:mr-3" />, label: "Logout" }
  ];

  const navItems = section === 'voting' ? votingNavs : section === 'results' ? resultsNavs : [];
  const logOut = arg === true ? logNav : [];

  return (
    <>
      {/* Mobile Toggle Button */}
      <button 
        className="fixed top-4 left-4 z-50 p-2 rounded-md bg-black text-white md:hidden"
        onClick={toggleSidebar}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <div 
        className={`bg-black py-6 px-4 md:px-6 lg:px-10 fixed md:relative inset-y-0 left-0 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        } transition-transform duration-300 ease-in-out z-40 w-64 md:w-72 lg:w-80 xl:w-96 min-h-full flex flex-col justify-between shadow-xl md:shadow-none`}
      >
        <div className='flex flex-col space-y-8 md:space-y-10'>
          <div className="flex justify-center md:justify-start">
            <img src="/electpoll logo (plain white).png" alt="Electpoll Logo" className="my-6 md:my-10 max-h-12 md:max-h-16" />
          </div>

          <nav className="space-y-4 md:space-y-8">
            {navItems.map((nav, index) => (
              <SidebarLink 
                key={index} 
                to={nav.to} 
                icon={nav.icon} 
                label={nav.label} 
                onClick={() => setIsOpen(false)}
              />
            ))}
          </nav>
        </div>
        <div className="justify-end items-end mt-8">
          {logOut.map((log, index) => (
            <SidebarLink 
              key={index} 
              to={log.to} 
              icon={log.icon} 
              label={log.label} 
              onClick={() => setIsOpen(false)}
            />
          ))}
        </div>
      </div>

      {/* Overlay that closes the sidebar when clicked (mobile only) */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}

SidebarLink.propTypes = {
  to: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

function SidebarLink({ to, icon, label, onClick }) {
  return (
    <NavLink 
      to={to}
      end
      onClick={onClick}
      className={({ isActive }) =>
        `w-full px-3 md:px-5 py-3 md:py-4 flex items-center text-sm md:text-base font-semibold rounded-md transition-colors duration-300 ${
          isActive ? "bg-amber-600 text-black" : "text-white hover:bg-gray-700"
        }`
      }
    >
      {icon}
      <span className="truncate">{label}</span>
    </NavLink>
  );
}