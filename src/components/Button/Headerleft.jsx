import React from "react";
import PropTypes from "prop-types";
import { Link,Navlink } from "react-router-dom";
Headerleft.propTypes = {};

function Headerleft(props) {
  return (
      <div className="col-md-4">
    <div className="headerleft-create">
    <Link to="/create" className="btn btn-primary">Create New Task</Link>
    {/* <Link to="/" className="btn btn-primary">Home</Link> */}
   
      </div>
    </div>
  );
}

export default Headerleft;
