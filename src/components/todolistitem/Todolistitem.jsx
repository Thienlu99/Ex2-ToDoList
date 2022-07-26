import React, { useState } from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
Todolistitem.propTypes = {
  taskName: PropTypes.string,
  taskAuthor: PropTypes.string,
  //   taskStatus: PropTypes.string,
  taskDess: PropTypes.string,
};
Todolistitem.defaultProps = {
  taskName: "Task Name",
};
function Todolistitem(props) {
  // taskStatus
  const { taskName, taskAuthor, taskDess } = props;

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

  return (
    
        <div className="col-md-3">
          <div className="list-title" style={{ margin: "15px" }}>
            <Card>
              <Card.Body style={{ textAlign: "left" }}>
                <Card.Title>Title: {taskName}</Card.Title>
                <p>Author: {taskAuthor}</p>
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
                <Card.Text>{taskDess}</Card.Text>
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
}

export default Todolistitem;
