import { create } from 'zustand'
import { getAxiosClient } from '../api.js'
import usePortfolioStore from './portfolio';
const email = import.meta.env.VITE_EMAIL
const  userId  = localStorage.getItem('userId');
const useProfileStore = create((set) => ({
    profileData: {},
    getProfileData: async () => {
       
        console.log(userId)
        const response = await getAxiosClient().get(`/profile/getByUserId/${userId}`)
        set({ profileData: response?.data });
        
        return response?.data;
    },
    setProfileData: (data) => {
        set({
            profileData: data
        })
    },
    createProfileData: async (data) => {
        const response = await getAxiosClient().post(`/profile/create`, data)
        set({ profileData: response?.data });
        return response?.data;
    },
    updateProfileData:async (data,id) => {
        const res = await getAxiosClient().put(`/profile/update/${id}`,data)
        set({ profileData: res?.data });
        return res?.data
    }
 
  
}))

export default useProfileStore