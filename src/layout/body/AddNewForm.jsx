import React, { useState } from "react";
import PropTypes from "prop-types";
import InputText from "../../components/InputText";
import Button from "../../components/Button";
import Form from "react-bootstrap/Form";
import isEmpty from "validator/lib/isEmpty"

AddNewForm.propTypes = {};

function AddNewForm(props) {
  const [formValue, setFormValue] = useState("");
  // React.useState
  //es6
  const [title, setTitle] = useState("");
  const [creator, setCreator] = useState("");
  const [description, setDescription] = useState("");
  const [vallidate,setValidate] = useState("");
  
  const handleChange = (e) => {
    console.log(e.target.value);
    // setTitleValue(e.target.value);
  };
  const HandelChangeTitle = (event) =>{
    setTitle(event.target.value);
  }
  const HandelChangeCreator = (event) =>{
    setCreator(event.target.value);
  }
  const HandelChangeTitleDescription = (event) =>{
    setDescription(event.target.value);
  }
  const validateAll = () =>{
    const msg = {};
    if(isEmpty(title)){
      msg.title = "*Please input your Title"
    }

    if(isEmpty(creator)){
      msg.creator = "*Please input your Creator"
    }

    if(isEmpty(description)){
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

    localStorage.setItem("data", JSON.stringify(formValue));
  }
  // handChangeFor
  return (
    <div className="">
      <Form>
        {/* <input type="number" name="index" id="index" value="" hidden="true" /> */}
        <div className="form-group row mb-3 mt-3">
          <label htmlFor="txtTitle" className="col-md-3 col-form-label">
            Title:
          </label>
          <div className="col-md-7">
            <input type="text" className="form-control" id="txtTitle" value={formValue.title} onChange={(event) =>{HandelChangeTitle(event)}} />
            <span className="text-danger" id="startError">{vallidate.title}</span>
          </div>
        </div>

        <div className="form-group row mb-3">
          <label htmlFor="txtCreator" className="col-md-3 col-form-label">
            Creator:
          </label>
          <div className="col-md-7">
            <input type="text" className="form-control" id="txtCreator" value={formValue.creator} onChange={(event) =>{HandelChangeCreator(event)}}/>
            <span className="text-danger" id="startError">{vallidate.creator}</span>
          </div>
        </div>

        <div className="form-group row mb-3">
          <label htmlFor="txtDescription" className="col-md-3 col-form-label">
            Description:
          </label>
          <div className="col-md-7">
            <input type="text" className="form-control" id="txtDescription"  value={formValue.description} onChange={(event) =>{HandelChangeTitleDescription(event)}}/>
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
