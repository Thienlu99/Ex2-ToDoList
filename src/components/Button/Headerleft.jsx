import React,{useState, useEffect } from "react";

function Headerleft(props) {
  

  return (
      <>
      <div className="col-md-4">
      <div className="headerleft-create">
          <button variant="primary" className="btn btn-primary" disabled>
              + Add new blog
          </button>
          </div>
          </div>
      </>

  )
}

export default Headerleft;
