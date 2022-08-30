import React, { useState, useEffect } from 'react';
import axios from "axios";
import moment from "react-moment";
import "./DoneTask.scss";
import useFetch from "../../customize/fetch";

import Sidebar from '../../components/sidebar/Sidebar';
function DoneTask(props) {
  const { data: dataCovid, isLoading, isError }
        // = useFetch('https://api.covid19api.com/country/vietnam?from=2021-10-01T00:00:00Z&to=2021-10-20T00:00:00Z')
        = useFetch('http://localhost:3005/todoItems')
  return (
    <div className='container-fluid'>
    <div className='row ' >
        <Sidebar />
        <div className="col-md-5" style={{margin: "0 auto"}}>
        <div className="row">
        <table>
        {console.log("checkData>>>", dataCovid)}
        <thead>
          <tr>
            <th>Title</th>
            <th>Creator</th>
            <th>Descript</th>
          </tr>
        </thead>

        <tbody>
          {isError === false &&
            isLoading === false &&
            dataCovid &&
            dataCovid.length > 0 &&
            dataCovid.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.title}</td>
                  <td>{item.creator}</td>
                  <td>{item.descript}</td>
                </tr>
              );
            })}
          {isLoading === true && (
            <tr>
              <td colSpan="5" style={{ textAlign: "center" }}>
                {" "}
                Loading...
              </td>
            </tr>
          )}

          {isError === true && (
            <tr>
              <td colSpan="5" style={{ textAlign: "center" }}>
                {" "}
                Something wrong state 404...{" "}
              </td>
            </tr>
          )}

          {/* <tr>
            <td>Centro comercial Moctezuma</td>
            <td>Francisco Chang</td>
            <td>Mexico</td>
            <td>Mexico</td>
          </tr>
          <tr>
            <td>Ernst Handel</td>
            <td>Roland Mendel</td>
            <td>Austria</td>
            <td>Mexico</td>
          </tr> */}
        </tbody>
      </table>
        </div>
        </div>
       
     </div>
</div>


 
  );
}

export default DoneTask;