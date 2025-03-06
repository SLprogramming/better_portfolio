import React, { useEffect, useState } from 'react';
import useProfileStore from '../../store/profile';
import usePortfolioStore from '../../store/portfolio';

const ProfileForm = () => {
  const { createProfileData,updateProfileData,getProfileData,profileData} = useProfileStore();
  const { userInfo } = usePortfolioStore();
const userId = localStorage.getItem('userId')
   const [file, setFile] = useState(null);
  const [formData, setFormData] = useState({
      profile:"",
      phone:"",
      aboutMe: '',
      user_id:userId
  });

  useEffect(() => {
    (async () => {
       await getProfileData()
    })()
  },[])
  const handleInputChange = (e) => {
    setFile(e.target.files[0]);
    console.log(e.target.files[0]);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
      e.preventDefault();
      console.log('Submitting form:', formData);
      let newFormData = new FormData()
      newFormData.append('image',file)
      newFormData.append('name',userInfo?.user?.name)
      newFormData.append('email',userInfo?.user?.email)
      newFormData.append('profile',formData.profile)
      newFormData.append('user_id',userId)
      
      newFormData.append('aboutMe',formData.aboutMe)
      newFormData.append('phone',formData.phone)
      console.log([...newFormData.entries()]); 
   
  
    try {
        if(profileData){
        
            let res = await updateProfileData(newFormData,userId);
            console.log(res)
        }else{
            let res = await createProfileData(newFormData)
            console.log(res)
        }
    } catch (error) {
        
    }
  

    // Optionally, you can add code here to handle post-submission actions, like redirecting or showing a success message
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-gray-800 rounded-md">
       <div>
          <label className="block text-sm font-medium text-gray-300">Image</label>
          <input
            type="file"
            onChange={handleInputChange}
            className="mt-1 p-2 block w-full border border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-gray-700 text-white"
          />
        </div>
     
      <div className="mb-4">
        <label className="block text-white mb-2" htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={userInfo?.user?.name}
          disabled
          className="w-full p-2 rounded-md bg-gray-700 text-white"
        />
      </div>
      <div className="mb-4">
        <label className="block text-white mb-2" htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={userInfo?.user?.email}
          disabled
          className="w-full p-2 rounded-md bg-gray-700 text-white"
        />
      </div>
      <div className="mb-4">
        <label className="block text-white mb-2" htmlFor="profile">Profile</label>
        <input
          type="profile"
          id="profile"
          name="profile"
          value={formData.profile}
          onChange={handleChange}
          className="w-full p-2 rounded-md bg-gray-700 text-white"
        />
      </div>
      <div className="mb-4">
        <label className="block text-white mb-2" htmlFor="aboutMe">about me</label>
        <textarea
          id="aboutMe"
          name="aboutMe"
          value={formData.aboutMe}
          onChange={handleChange}
          className="w-full p-2 rounded-md bg-gray-700 text-white"
        />
      </div>
      <div className="mb-4">
        <label className="block text-white mb-2" htmlFor="phone">Phone</label>
        <textarea
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full p-2 rounded-md bg-gray-700 text-white"
        />
      </div>
      <button type="submit" className="p-2 bg-blue-500 text-white rounded-md">Create Profile</button>
    </form>
  );
};

export default ProfileForm;