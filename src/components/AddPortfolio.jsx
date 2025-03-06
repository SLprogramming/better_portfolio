import React, { useState } from 'react';
import usePortfolioStore from '../store/portfolio';

const AddPortfolio = () => {
  const portfolioStore = usePortfolioStore();
  const [file, setFile] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    user_id: '',
    link: '',
  });

  const handleInputChange = (e) => {
    setFile(e.target.files[0]);
    console.log(e.target.files[0]);
  };

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('image', file);
    data.append('title', formData.title);
    data.append('description', formData.description);
    data.append('category', formData.category);
    data.append('user_id', portfolioStore.userId);
    data.append('link', formData.link);

    console.log([...data.entries()]); // Log the form data entries for debugging

    try {
      const response = await portfolioStore.createPortfolio(data);
      console.log('Portfolio created successfully:', response);
    } catch (error) {
      console.error('Error creating portfolio:', error);
    } finally {
      let res = await portfolioStore.getPortfolio({ userId: portfolioStore.userId });
      console.log(res.portfolio);
      portfolioStore.setPortfolio(res.portfolio);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-800 shadow-md rounded-lg mt-10">
      <h2 className="text-2xl font-bold mb-6 text-white">Add New Portfolio</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-300">Image</label>
          <input
            type="file"
            onChange={handleInputChange}
            className="mt-1 p-2 block w-full border border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-gray-700 text-white"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300">Title</label>
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={formData.title}
            onChange={handleFormChange}
            className="mt-1 p-2 block w-full border border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-gray-700 text-white"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300">Description</label>
          <textarea
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleFormChange}
            className="mt-1 p-2 block w-full border border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-gray-700 text-white"
          ></textarea>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300">Category</label>
          <input
            type="text"
            name="category"
            placeholder="Category"
            value={formData.category}
            onChange={handleFormChange}
            className="mt-1 p-2 block w-full border border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-gray-700 text-white"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300">Link</label>
          <input
            type="text"
            name="link"
            placeholder="Link"
            value={formData.link}
            onChange={handleFormChange}
            className="mt-1 p-2 block w-full border border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-gray-700 text-white"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddPortfolio;
