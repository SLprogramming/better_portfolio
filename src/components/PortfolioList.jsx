import React, { useEffect } from 'react';
import usePortfolioStore from '../store/portfolio';

const PortfolioList = () => {
  const { portfolio, deletePortfolio } = usePortfolioStore();

  useEffect(() => {
    console.log(portfolio);
  }, [portfolio]);

  const deleteHandler = async (id) => {
    try {
      let res = await deletePortfolio(id);
      console.log(res);
    } catch (error) {
      // Handle error (e.g., show a toast message)
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gray-800 shadow-md rounded-lg mt-10"> {/* Dark background */}
      <h2 className="text-2xl font-bold mb-6 text-white">Portfolio List</h2> {/* White text */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-gray-800 text-white"> {/* Dark table background with light text */}
          <thead>
            <tr>
              <th className="py-2 px-4 border-b-2 border-gray-600 bg-gray-700 text-left text-sm font-semibold text-gray-300 uppercase tracking-wider"> {/* Darker header */}
                Image
              </th>
              <th className="py-2 px-4 border-b-2 border-gray-600 bg-gray-700 text-left text-sm font-semibold text-gray-300 uppercase tracking-wider">
                Title
              </th>
              <th className="py-2 px-4 border-b-2 border-gray-600 bg-gray-700 text-left text-sm font-semibold text-gray-300 uppercase tracking-wider">
                Category
              </th>
              <th className="py-2 px-4 border-b-2 border-gray-600 bg-gray-700 text-left text-sm font-semibold text-gray-300 uppercase tracking-wider">
                Description
              </th>
              <th className="py-2 px-4 border-b-2 border-gray-600 bg-gray-700 text-left text-sm font-semibold text-gray-300 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {portfolio.map((item) => (
              <tr key={item._id} className="hover:bg-gray-700"> {/* Dark row with hover effect */}
                <td className="py-2 px-4 border-b border-gray-600">
                  <img src={item?.image?.url} className="w-[50px] h-[50px] rounded-full" alt="" /> {/* Rounded image */}
                </td>
                <td className="py-2 px-4 border-b border-gray-600">{item?.title}</td>
                <td className="py-2 px-4 border-b border-gray-600">{item?.category}</td>
                <td className="py-2 px-4 border-b border-gray-600">{item?.description}</td>
                <td className="py-2 px-4 border-b border-gray-600">
                  <button className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                    Edit
                  </button>
                  <button
                    onClick={() => {
                      deleteHandler(item._id);
                    }}
                    className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 ml-2"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PortfolioList;
