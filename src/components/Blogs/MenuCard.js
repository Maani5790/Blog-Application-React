import React, { useState } from "react";
import { useNavigate } from "react-router";

const MenuCard = ({ menuData }) => {
  const navigate = useNavigate();
  const handleMenuClick = () => navigate("/Menu", { replace: true });

  const [sortType, setSortType] = useState("name");

  const handleSortClick = (type) => {
    setSortType(type);
  };

  const sortedMenuData = menuData.sort((a, b) => {

    if (sortType === "name") {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    } else if (sortType === "id") {
      return a.id - b.id;
    }
  });

  return (
    <>
      <div className="sort-buttons ">
        <button onClick={() => handleSortClick("name")}>Sort A To Z</button>
        <br />
        <button onClick={() => handleSortClick("id")}>Sort by ID</button>
      </div>
      <section className="main-card--cointainer">
        {sortedMenuData.map((curElem) => {
          const { id, name, image, description } = curElem;

          return (
            <div className="card-container" key={id}>
              <div className="card">
                <div className="card-body">
                  <span className="card-number card-circle subtle" key={id}>
                    1
                  </span>
                  <span className="card-author subtle">{name}</span>
                  <h2 className="card-title">{name}</h2>
                  <span className="card-description subtle">
                    {description}
                  </span>
                  <div className="card-read">Read</div>
                </div>
                <img src={image} alt="images" className="card-media" />
                <button
                  onClick={handleMenuClick}
                  className="card-tag  subtle"
                >
                  Read More
                </button>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default MenuCard;































// import React from "react";
// import { useNavigate } from "react-router";

// const MenuCard = ({ menuData }) => {
//   const navigate = useNavigate();
//   const handleMenuClick = () => navigate("/Menu", { replace: true });

//   return (
//     <>
//       <section className="main-card--cointainer">
//         {menuData.map((curElem) => {
//           const { id, name, image, description } = curElem;

//           return (
//             <>
//               <div className="card-container" key={id}>
//                 <div className="card">
//                   <div className="card-body">
//                     <span className="card-number card-circle subtle" key={id}>
//                       1
//                     </span>
//                     <span className="card-author subtle">{name}</span>
//                     <h2 className="card-title">{name}</h2>
//                     <span className="card-description subtle">
//                       {description}
//                     </span>
//                     <div className="card-read">Read</div>
//                   </div>
//                   <img src={image} alt="images" className="card-media" />
                
//                   <button
//                     onClick={handleMenuClick}
//                     className="card-tag  subtle"
//                   >
//                     Read More
//                   </button>
//                 </div>
//               </div>
//             </>
//           );
//         })}
//       </section>
//     </>
//   );
// };

// export default MenuCard;