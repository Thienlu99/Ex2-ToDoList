import React from "react";
import PropTypes from "prop-types";

Headerleft.propTypes = {};

function Headerleft(props) {
  return (
      <div className="col-md-4">
    <div className="headerleft-create">
        <input class="btn btn-primary" type="button" value="Create New Task" />
      </div>
    </div>
  );
}

export default Headerleft;
