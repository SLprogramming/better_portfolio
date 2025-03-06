
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import HomeScreen from "./pages/HomeScreen";
import Project from "./pages/Project";
import usePortfolioStore from "./store/portfolio";
import Dashboard from "./pages/Dashboard";
import PortfolioList from "./components/PortfolioList";
import AddPortfolio from "./components/AddPortfolio";
import  { Toaster } from 'react-hot-toast';
import { useEffect } from "react";
import ProfileForm from "./components/profile/profileForm";

const router = createBrowserRouter([
  { path: "/", element: <HomeScreen /> },
  { path: "/home", element: <Navigate to="/" replace /> },
  { path: "/project/:id", element: <Project/> },
  { path: "/dashboard", element: <Dashboard/> ,
    children:[
      {path:'list',element:<PortfolioList/>},
      {path:'add',element:<AddPortfolio/>},
      {path:'profile',element:<ProfileForm/>}
    ]
  },
  // { path: "/*", element: <NotFound /> },
]);

function App() {
  const {getUserId,setUserId,userId} = usePortfolioStore();
  const prepareFunction = async () => {
   const res =  await getUserId()
    
      setUserId(res?.user?._id)
      localStorage.setItem('userId',res?.user?._id)
     console.log(userId)
  }
 
  useEffect(() => {
    prepareFunction()
  }
  ,[getUserId,setUserId])
  


  return (
    <>
   


          <RouterProvider router={router} />
      <Toaster/>
  
    </>
  )
}

export default App
