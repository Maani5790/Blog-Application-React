import React from "react";
import { Link } from "react-router-dom";
// import Blog from "./Blog";
import { useAuth0 } from "@auth0/auth0-react";

const MainPortion = () => {
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
  const {isAuthenticated} = useAuth0();

  return (
    <>
      <div className="bg-black flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
        <h1 className="w-full text-3xl font-bold text-white">REHMAN BLOGS</h1>
        <ul className="flex">
          <Link to="/" className="p-4">
            Home
          </Link>
          <li className="p-4">Contact</li>
          <li className="p-4">About</li>
          {isAuthenticated ? (
            <button
              onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
              }
            >
              Logout
            </button>
          ) : (
            <button onClick={() => loginWithRedirect()}>Login</button>
          )}
          
        </ul>
      </div>

      <div className=" bg-black text-white">
        <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
          <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
            All Types Of Blogs Here
          </h1>
          <div className="flex justify-center items-center"></div>
          <p className="md:text-2xl text-xl font-bold text-white">
            Blogging is good for your career. A well-executed blog sets you
            apart as an expert in your field.
          </p>
          <Link
            to="/Blog"
            className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black"
          >
            Visit
          </Link>
        </div>
      </div>
    </>
  );
};

export default MainPortion;
