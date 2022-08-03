import React from "react";
import PropTypes from "prop-types";
import "./Sidebar.scss";
import { Link,Navlink } from "react-router-dom";
Sidebar.propTypes = {};

function Sidebar(props) {
  return (
    <div className="col-md-2 pd-0">
      <div className="menu">
        <ul>
          <li className="menu-color">
           <Link to="/"> All Task</Link>
          </li>
          <li>
          <Link to="/newtask"> New Task</Link>
          </li>
          <li>
          <Link to="/doingtask"> Doing Task</Link>
          </li>
          <li>
          <Link to="/donetask"> Done Task</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
