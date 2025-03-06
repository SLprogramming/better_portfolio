import { useEffect, useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import usePortfolioStore from '../store/portfolio';

const Dashboard = () => {
  const { userId, getPortfolio, setPortfolio } = usePortfolioStore();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    (async () => {
      if (userId) {
        let res = await getPortfolio({ userId });
        console.log(res.portfolio);
        setPortfolio(res.portfolio);
      }
    })();
  }, [userId]);

  return (
    <div className="flex h-screen bg-gray-900 text-white"> {/* Dark background and light text */}
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out bg-gray-800 shadow-md w-64`}>
        <div className="p-4">
          {/* Sidebar Title */}
          <h2 className="text-2xl font-bold text-white">Dashboard</h2>
        </div>
        {/* Sidebar Navigation */}
        <nav className="mt-4">
          <ul>
            <li className="px-4 py-2 hover:bg-gray-700">
              <Link to="list" className="text-gray-300 hover:text-blue-400">
                Portfolio List
              </Link>
            </li>
            <li className="px-4 py-2 hover:bg-gray-700">
              <Link to="add" className="text-gray-300 hover:text-blue-400">
                Add Portfolio
              </Link>
            </li>
            <li className="px-4 py-2 hover:bg-gray-700">
              <Link to="profile" className="text-gray-300 hover:text-blue-400">
                Profile
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 ml-64 bg-gray-900"> {/* Dark background for content */}
        <button
          className="p-2 bg-blue-500 text-white rounded-md mb-4"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          {isSidebarOpen ? 'Close Menu' : 'Open Menu'}
        </button>
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
