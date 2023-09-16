import { Basic } from "../Components/Basic/Basic";
import App from "../App";
import { Menus } from "../Components/SideMenu/Menus";
import { sideMenuData } from "../Data/SideMenuData";
import { Link } from "react-router-dom";

export const OverView = () => {
  return (
    <div className="hero-container">
      <div className="main-content pt-5 pr-5 pb-5 pl-5 bg-backgroundColor">
        <App />
      </div>
      <div className="tableContainer">
        <div className="sideMenuConatainer">
          <div className="sidenav">
            {sideMenuData.map((menu, index) => {
              return (
                <div key={index}>
                  {menu.children ? (
                    <Menus name={menu.name} children={menu.children} />
                  ) : (
                    <Link to={menu.url}>{menu.name}</Link>
                  )}
                </div>
              );
            })}
          </div>
        </div>
        <div className="resultContainer">
          <Basic />
        </div>
      </div>
    </div>
  );
};
