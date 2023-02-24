import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,Outlet,
  RouterProvider,
} from "react-router-dom";
import Blogs from "./components/Blogs/Blog";
import MainPortion from "./components/Blogs/Main";


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
    <Route path="/" element={<Root />}>

      <Route index element  = {<MainPortion />} />
      <Route path="/Blog" element  = {<Blogs />} />
    
      
    </Route>
    )
  );

  return <>
  <RouterProvider router={router} />
    </>;
}

const Root = () => {
  return (
    <>
      <div>
        {/* <Link to="/"> Home </Link> */}
        {/* <Link to="/Blog">Blog</Link> */}
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default App;
