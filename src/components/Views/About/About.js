import React from "react";
import "./about.css";
// import "../../Sidebar/Sidebar";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";

const About = () => {
  return (
    <div>
      <Sidebar defaultCollapsed={true} backgroundColor="#cccccc">
        <Menu>
          <SubMenu label="Charts">
            <MenuItem> Pie charts </MenuItem>
            <MenuItem> Line charts </MenuItem>
          </SubMenu>
          <MenuItem> Documentation </MenuItem>
          <MenuItem> Calendar </MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
};

export default About;
