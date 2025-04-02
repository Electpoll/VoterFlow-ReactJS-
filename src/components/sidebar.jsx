import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { 
  FileText, 
  Vote, 
  LogOut,
  BarChart,
  Shield 
} from 'lucide-react';

Sidebar.propTypes = {
  for: PropTypes.string.isRequired,
  logout: PropTypes.bool.isRequired
};

export default function Sidebar({ for: section = '', logout: arg = '' }) {
  const votingNavs = [
    { to: "/voting-portal", icon: <FileText className="mr-3" />, label: "Check Details" },
    { to: "/voting-portal/cast-vote", icon: <Vote className="mr-3" />, label: "Cast Vote" },
  ];

  const resultsNavs = [
    { to: "/portal/results", icon: <BarChart className="mr-3" />, label: "Election Results" },
    { to: "/portal/transparency-report", icon: <Shield className="mr-3" />, label: "Transparency Report" }
  ];

  const logNav = [
    { to: "/login", icon: <LogOut className="mr-3" />, label: "Logout" }
  ];

  const navItems = section === 'voting' ? votingNavs : section === 'results' ? resultsNavs : [];
  const logOut = arg === true ? logNav : [];

  return (
    <div className="bg-black py-6 px-10 w-[35vw] flex flex-col justify-between">
      <div className='flex flex-col space-y-10'>
        <div className="">
          <img src="/electpoll logo (plain white).png" alt="Electpoll Logo" className="my-10" />
        </div>

        <nav className="space-y-8">
          {navItems.map((nav, index) => (
            <SidebarLink key={index} to={nav.to} icon={nav.icon} label={nav.label} />
          ))}
        </nav>
      </div>
      <div className="justify-end items-end">
        {logOut.map((log, index) => (
          <SidebarLink key={index} to={log.to} icon={log.icon} label={log.label} />
        ))}
      </div>
    </div>
  );
}

SidebarLink.propTypes = {
  to: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired
};

function SidebarLink({ to, icon, label }) {
  return (
    <NavLink 
      to={to}
      end
      className={({ isActive }) =>
        `w-full px-5 py-4 flex items-center font-semibold rounded-md transition-colors duration-300 ${
          isActive ? "bg-amber-600 text-black" : "text-white hover:bg-gray-700"
        }`
      }
    >
      {icon}
      {label}
    </NavLink>
  );
}
