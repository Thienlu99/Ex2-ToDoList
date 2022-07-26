import React from "react";
import PropTypes from "prop-types";
import "./Sidebar.css";
Sidebar.propTypes = {};

function Sidebar(props) {
  return (
    <div className="col-md-2">
      <div class="menu">
        <ul>
          <li className="menu-color">
            <a href="">All Task</a>
          </li>
          <li>
            <a href="">New Task</a>
          </li>
          <li>
            <a href="">Doing Task</a>
          </li>
          <li>
            <a href="">Done Task</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
