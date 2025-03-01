
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import HomeScreen from "./pages/HomeScreen";
import Project from "./pages/Project";
import Navbar from "./components/Navbar";
import  { Toaster } from 'react-hot-toast';

const router = createBrowserRouter([
  { path: "/", element: <HomeScreen /> },
  { path: "/home", element: <Navigate to="/" replace /> },
  { path: "/project/:id", element: <Project/> },
  // { path: "/*", element: <NotFound /> },
]);
function App() {


  return (
    <>
   

    <Navbar/>
          <RouterProvider router={router} />
      <Toaster/>
  
    </>
  )
}

export default App
