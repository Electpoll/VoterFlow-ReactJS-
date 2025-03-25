import Sidebar from './layouts/sidebar';
import Dashboard from './layouts/dashboard';

function Portal() {
  return (
    <div className="flex">
      <Sidebar />
      <Dashboard />
    </div>
  );
}

export default Portal;
