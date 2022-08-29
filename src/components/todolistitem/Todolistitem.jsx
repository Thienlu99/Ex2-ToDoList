import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import axios from "axios";
import moment from "react-moment";
Todolistitem.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  //   taskStatus: PropTypes.string,
  taskDess: PropTypes.string,
};
// Todolistitem.defaultProps = {
//   title: "Task Name",
// };
function Todolistitem(props) {
  // taskStatus
  //destructring Assigment
  // const { title, author, description } = props;

  // React.useState
  //es6
  const [status, setStatus] = useState("Start");
  const [text, setText] = useState("New");
  function changeText() {
    if (status === "Start" && text === "New") {
      setStatus("Done");
      setText("Doing");
    } else if (status === "Done" && text === "Doing") {
      setStatus("Renew");
      setText("Done");
    }
  }

  const hangleChangeColor = (status) => {
    switch (status) {
      case "Doing":
        return "Chocolate";
      case "Done":
        return "DarkBlue";
      default:
        return "Green";
    }
  };

  //API
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
    // <div className="col-md-3">
    //       <div className="list-title" style={{ margin: "15px" }}>
    //         <Card>
    //           <Card.Body style={{ textAlign: "left" }}>
    //             <Card.Title>Title: {title}</Card.Title>
    //             <p>Author: {author}</p>
    //             <p
    //               id="textChange"
    //               style={{ fontWeight: "bold", color: hangleChangeColor(text) }}
    //             >
    //               Status: {text}
    //             </p>
    //             <hr style={{ color: "blue" }} />
    //             <Card.Text style={{ fontWeight: "bold" }}>
    //               Desscription:
    //             </Card.Text>
    //             <Card.Text>{description}</Card.Text>
    //             {/* <h3>{status}</h3> */}
    //             <Button variant="primary" onClick={changeText}>
    //               {status}
    //             </Button>
    //             {/* <Button variant="primary" onClick={()=>setStatus("Done")}>Done</Button>
    //         <Button variant="primary" onClick={()=>setStatus("Renew")}>Renew</Button> */}
    //           </Card.Body>
    //         </Card>
    //       </div>
        
    //       </div>

    <>
    {isError === false &&
      isLoading === false &&
      dataCovid &&
      dataCovid.length > 0 &&
      dataCovid.map((item) => {
        return (
           <div className="col-md-3" key={item.id}>
           <div className="list-title" style={{ margin: "15px" }}>
             <Card>
               <Card.Body style={{ textAlign: "left" }}>
                 <Card.Title>Title: {item.title}</Card.Title>
                 <p>Author: {item.creator}</p>
                 <p
                  id="textChange"
                  style={{ fontWeight: "bold", color: hangleChangeColor(text) }}
                >
                  Status: {text}
                </p>
                <hr style={{ color: "blue" }} />
                <Card.Text style={{ fontWeight: "bold" }}>
                  Desscription:
                </Card.Text>
                <Card.Text>{item.descript}</Card.Text>
                {/* <h3>{status}</h3> */}
                <Button variant="primary" onClick={changeText}>
                  {status}
                </Button>
                {/* <Button variant="primary" onClick={()=>setStatus("Done")}>Done</Button>
            <Button variant="primary" onClick={()=>setStatus("Renew")}>Renew</Button> */}
              </Card.Body>
            </Card>
          </div>
        
          </div>
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
  
    </>
  );
}

export default Todolistitem;
