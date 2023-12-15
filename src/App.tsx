import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./pages/Home.tsx";
import Login from "./pages/Login.tsx";
import Register from "./pages/Register.tsx";
import Dashboard from "./pages/Dashboard.tsx";

const router=createBrowserRouter([
    {path:"/",element:<Home />},
    {path:"/login",element:<Login />},
    {path:"/register",element:<Register />},
    {path:"/dashboard",element:<Dashboard />},
])
function App() {
  return (
   <>
    <RouterProvider router={router}/>
   </>
  )
}
export default App
