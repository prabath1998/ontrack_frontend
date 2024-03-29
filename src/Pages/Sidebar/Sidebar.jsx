import React, { useState } from "react";
import { Avatar,Button } from "@mui/material";
import "./Sidebar.css";

const menu = [
  { name: "Home", value: "Home", role: ["ROLE_ADMIN", "ROLE_CUSTOMER"] },
  { name: "DONE", value: "DONE", role: ["ROLE_ADMIN", "ROLE_CUSTOMER"] },
  { name: "ASSIGNED", value: "ASSIGNED", role: ["ROLE_ADMIN"] },
  { name: "NOT ASSIGNED", value: "PENDING", role: ["ROLE_ADMIN"] },
  { name: "Create New Task", value: "", role: ["ROLE_ADMIN"] },
  { name: "Notification", value: "NOTIFICATION", role: ["ROLE_CUSTOMER"] },
];

const role = "ROLE_ADMIN";

const Sidebar = () => {
  const [activeMenu,setActiveMenu] = useState("ASSIGNED");
  const handleMenuChange = (item) => {
    setActiveMenu(item.name);
  }

  const handleLogout = () => {
    alert("Logout")
  }
  return (
    <div className="card min-h-[85vh] flex flex-col justify-center fixed w-[20vw]">
      <div className="space-y-5 h-full">
        <div className="flex justify-center">
          <Avatar
            className="border-2 border-[#c24dd0]"
            sx={{ width: "8rem", height: "8rem" }}
            src="https://res.cloudinary.com/imagist/image/fetch/q_auto,f_auto,c_scale,w_2624/https%3A%2F%2Fimages.ctfassets.net%2Fdm4oa8qtogq0%2F3sLA4m726qEdgbDhZVQ3Tw%2F12a33481f6ccc132860b5ad131d8c120%2Fintegration-logo-jira-1.jpg"
          />
        </div>

        {menu
          .filter((item) => item.role.includes(role))
          .map((item) => (
            <p onClick={() => handleMenuChange(item)} className={`py-3 px-5 rounded-full text-center cursor-pointer ${activeMenu == item.name ? "activeMenuItem" : "menuItem"}`}>{item.name}</p>
          ))}


          <Button onClick={handleLogout} sx={{ padding:".7rem", borderRadius:"2rem" }} fullWidth className="logoutButton">
            logout
          </Button>
      </div>
    </div>
  );
};

export default Sidebar;
