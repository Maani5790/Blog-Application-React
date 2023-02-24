import React, { useState } from "react";
import "./style.css";
import Menu from "./menuApi.js";
import MenuCard from "./MenuCard";
import Navbar from "./Navbar";
import { useAuth0 } from "@auth0/auth0-react";


const uniqueList = [
  ...new Set(
    Menu.map((curElem) => {
      return curElem.category;
    })
  ),
  "All",
];

const Blogs = () => {
    const { loginWithRedirect } = useAuth0();
   



  const [menuData, setMenuData] = useState(Menu);
  const [menuList, setMenuList] = useState(uniqueList);

  const filterItem = (category) => {
    if (category === "All") {
      setMenuData(Menu);
      return;
    }

    const updateList = Menu.filter((curElem) => {
      return curElem.category == category;
    });
    setMenuData(updateList);
  };

  return (
    <>
      <Navbar filterItem={filterItem} menuList={menuList} />

      <MenuCard menuData={menuData} />
      
    </>
  );
};

export default Blogs;
