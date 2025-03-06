import { create } from 'zustand'
import { getAxiosClient } from '../api.js'
import { use } from 'react'
// const email = 'slprogramming.dev@gmail.com'
const email = import.meta.env.VITE_EMAIL
const usePortfolioStore = create((set) => ({
    portfolio: [],
    userId: '',
    userInfo:{},
  getUserId: async (state) => {
  
    const response = await getAxiosClient().post(`/auth/user/info`, {email: email})
    set({userInfo: response?.data})
    set({userId:response?.data?.user?._id})
    return response?.data;
   
  } ,
  setUserId: (data) => {
    console.log(data)
    set({
      userId: data
    })
    console.log({userId:data})
  },
  setPortfolio: (data) => {
    console.log(data)
    set({
      portfolio: data
    })
    console.log({portfolio:data})
  },
  createPortfolio:async (data) => {
 await getAxiosClient().post(`/portfolio/create`,data).then((res) => {
      console.log(res)
    }).catch((err) => {
      console.log(err)
    })
    return response?.data;
  },
  getPortfolio: async ({userId}) => {
    const response = await getAxiosClient().post(`/portfolio/getById`,{user_id: userId})
   console.log(response?.data)
   return response?.data
  },
  deletePortfolio: async (id) => {  
    await getAxiosClient().delete(`/portfolio/delete/${id}`).then((res) => {
      console.log(res)
    }).catch((err) => {
      console.log(err)
    })
  },
  
}))

export default usePortfolioStore