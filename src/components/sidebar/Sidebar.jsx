import React from "react";
import PropTypes from "prop-types";
import "./Sidebar.scss";
import { Link,Navlink } from "react-router-dom";
Sidebar.propTypes = {};

function Sidebar(props) {
  return (
    <div className="col-md-2 pd-0">
      <div class="menu">
        <ul>
          <li className="menu-color">
           <Link to="/"> <a href="">All Task</a></Link>
          </li>
          <li>
          <Link to="/newtask"> <a href="">New Task</a></Link>
          </li>
          <li>
          <Link to="/doingtask"> <a href="">Doing Task</a></Link>
          </li>
          <li>
          <Link to="/donetask"> <a href="">Done Task</a></Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
