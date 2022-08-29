import React, { useState, useEffect } from 'react';
import axios from "axios";
import moment from "react-moment";
import "./DoneTask.scss";
import Sidebar from '../../components/sidebar/Sidebar';
function DoneTask(props) {
    const [dataCovid, setDatacovid] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  //componentDidMount
  useEffect(() => {
    setTimeout( () => {
      const axios = require("axios").default;
      
      // Make a request for a user with a given ID
      axios
        .get(
          "http://localhost:3005/todoItems"
        )
        .then(function (response) {
          // handle success
          let data = response.data;
          // data = data.reverse()
          //format Data
          setDatacovid(data);
          //set isLoading
          setIsLoading(false);
          setIsError(false);
          // if (data && data.length > 0) {

          //   data.map((item) => {
          //     item.Date = moment(item.Date).format("DD/MM/YYYY");

          //     setDatacovid(data);
          //     return item;
          //   });
          // }
          // console.log( setDatacovid(data))
        })
        .catch(function (error) {
          // handle error
          console.log(error);
          setIsError(true);
          setIsLoading(false);
        })
        .then(function () {
          // always executed
        });
      }, 3000)
  }, []); //despen
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
            <th>Confirmed</th>
            <th>Creator</th>
            <th>Title</th>
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