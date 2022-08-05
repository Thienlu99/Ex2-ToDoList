import React, { useState } from "react";
import PropTypes from "prop-types";
// import InputText from "../../components/InputText";
// import Button from "../../components/Button";
import Form from "react-bootstrap/Form";
import isEmpty from "validator/lib/isEmpty"
import { useNavigate } from "react-router-dom";
AddNewForm.propTypes = {};

function AddNewForm(props) {
  //navigate chuyen trang home
  let navigate = useNavigate();

 
  // React.useState
  //es6
  // const [title, setTitle] = useState("");
  // const [creator, setCreator] = useState("");
  // const [description, setDescription] = useState("");
  const [vallidate,setValidate] = useState("");
  
  const [formValue, setFormValue] = useState({
    title: "",
    author: "",
    description: "",
    status: "new",
  });
  console.log(formValue);
  // const handleChange = (e) => {
  //   console.log(e.target.value);
  //   // setTitleValue(e.target.value);
  // };
  const handleChangeFile = (event) => {
    setFormValue({
      ...formValue,
      [event.target.name]: event.target.value,
    });
  };
  const validateAll = () =>{
    const msg = {};
    if(isEmpty(formValue.title)){
      msg.title = "*Please input your Title"
    }

    if(isEmpty(formValue.author)){
      msg.author = "*Please input your Author"
    }

    if(isEmpty(formValue.description)){
      msg.description = "*Please input your Description"
    }
    
    setValidate(msg);
    if(Object.keys(msg).length >0) return false;
    return true;
  }
  const onSubmitSave = (event) =>{
    // event.preventdefault();
    const isValid = validateAll()
    if(!isValid) return;
    //call API
    let arr = JSON.parse(localStorage.getItem('data')) || [];
    arr.push(formValue);
     //save to localstorage
    //  var json = JSON.stringify(arr);
    //  console.log(json);
    localStorage.setItem("data", JSON.stringify(arr));
    navigate('/');
  }
  // handChangeFor
  return (
    <div className="">
      <Form>
        {/* <input type="number" name="index" id="index" value="" hidden="true" /> */}
        <div className="form-group row mb-3 mt-3">
          <label htmlFor="txtTitle" className="col-md-3 col-form-label" >
            Title:
          </label>
          <div className="col-md-7">
            <input type="text" className="form-control" id="txtTitle" name="title" value={formValue.title} onChange={(event) =>{handleChangeFile(event)}} />
            <span className="text-danger" id="startError">{vallidate.title}</span>
          </div>
        </div>

        <div className="form-group row mb-3">
          <label htmlFor="txtCreator" className="col-md-3 col-form-label">
            Author:
          </label>
          <div className="col-md-7">
            <input type="text" className="form-control" id="txtAuthor" name="author" value={formValue.author} onChange={(event) =>{handleChangeFile(event)}}/>
            <span className="text-danger" id="startError">{vallidate.author}</span>
          </div>
        </div>

        <div className="form-group row mb-3">
          <label htmlFor="txtDescription" className="col-md-3 col-form-label">
            Description:
          </label>
          <div className="col-md-7">
            <input type="text" className="form-control" id="txtDescription" name="description"  value={formValue.description} onChange={(event) =>{handleChangeFile(event)}}/>
            <span className="text-danger" id="startError">{vallidate.description}</span>
          </div>
        </div>

        {/* <!-- end input --> */}
        <div className="form-group row mb-3" >
          <div className="col-md-12">
            <input style={{margin: "0 auto", display:"block"}}
              type="button"
              id="btnCalculate"
              className="btn btn-primary btn-block"
              value="Save"
              onClick={(event) => onSubmitSave(event)}
            />
          </div>
        
        </div>
      </Form>
    </div>
  );
}
export default AddNewForm;
