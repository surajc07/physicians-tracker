import React from "react";
import { Link } from "react-router-dom";
import { SideBarData } from "./SideBarData";
import { IconContext } from "react-icons";
import "./NavBar.css";

const NavBar = () => {
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar">
          <nav className="nav-menu active">
            <ul className="nav-menu-items">
              <li className="navbar-toggle">
                {SideBarData.map((item, index) => {
                  return (
                    <div key={index} className={item.cName}>
                      <Link to={item.path}>
                        {item.icon}
                        <span>{item.title}</span>
                      </Link>
                    </div>
                  );
                })}
              </li>
            </ul>
          </nav>
        </div>
      </IconContext.Provider>
    </>
  );
};

export default NavBar;
