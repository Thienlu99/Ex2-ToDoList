import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Modal from 'react-bootstrap/Modal';
import axios from "axios";
import moment from "react-moment";
import useFetch from "../../customize/fetch";
import AddNewForm from "../../layout/body/AddNewForm";
// import useFetch from "../../customize/fetch";
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
  const [show, setShow] = useState(false);
  // const [newData, setNewData] = useState([]);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [dataCovid, setDatacovid] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  // const [isError, setIsError] = useState(false);

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

  //componentDidMount
  const { data: dataBlogs, isLoading, isError }
  = useFetch('http://localhost:3005/todoItems', false);

useEffect(() => {
  if (dataBlogs && dataBlogs.length > 0) {
      let data = dataBlogs.slice(0, 9);
      setDatacovid(data)
  }
}, [dataBlogs]);

const handleAddNew = (blog) => {
  let data = dataCovid;
  data.unshift(blog);

  setShow(false);
  setDatacovid(data);
}

  const deletePost = (id) => {
    let data = dataCovid;
    data = data.filter(item => item.id !== id)
    setDatacovid(data);
}
  return (
 
// variant="primary"
    <>
    <button  className="btn btn-primary"  onClick={handleShow}>
              + Add new blog
          </button>
          <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                  <Modal.Title>Add New TodoList</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                  <AddNewForm handleAddNew={handleAddNew} />
              </Modal.Body>
          </Modal>
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
                <Button className="btn btn-primary ml-3" onClick={() => deletePost(item.id)}>Delete</Button>
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
