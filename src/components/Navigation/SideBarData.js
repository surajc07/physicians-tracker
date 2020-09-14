import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
// import * as IoIcons from "react-icons/io";

export const SideBarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Employees",
    path: "/employee",
    icon: <FaIcons.FaUserMd />,
    cName: "nav-text",
  },
  {
    title: "Candidates",
    path: "/candidate",
    icon: <FaIcons.FaUserCheck />,
    cName: "nav-text",
  },
];
