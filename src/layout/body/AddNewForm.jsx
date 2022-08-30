import React, { useState } from "react";
import axios from 'axios';
// import InputText from "../../components/InputText";
// import Button from "../../components/Button";
import Form from "react-bootstrap/Form";



function AddNewForm(props) {
  const [title, setTitle] = useState('');
    const [creator, setCreator] = useState('');
    const [descript, setDescript] = useState('');

    const handleSubmitBtn = async () => {
        if (!title) {
            alert('empty title');
            return;
        }
        if (!creator) {
            alert('empty creator')
            return;
        }
        if (!descript) {
          alert('empty descript')
          return;
      }

        let data = {
            title: title,
            creator: creator,
            descript: descript,
        }

        let res = await axios.post('http://localhost:3005/todoItems', data);
        if (res && res.data) {
            let newBlog = res.data;
            props.handleAddNew(newBlog);
        }

    }
  return (
    <div className="">
      <Form>
        {/* <input type="number" name="index" id="index" value="" hidden="true" /> */}
        <div className="form-group row mb-3 mt-3">
          <label htmlFor="txtTitle" className="col-md-3 col-form-label" >
            Title:
          </label>
          <div className="col-md-7">
            <input type="text" className="form-control" id="txtTitle" name="title" value={title} onChange={(event) =>{setTitle(event.target.value)}} />
            {/* <span className="text-danger" id="startError">{vallidate.title}</span> */}
          </div>
        </div>

        <div className="form-group row mb-3">
          <label htmlFor="txtCreator" className="col-md-3 col-form-label">
            Author:
          </label>
          <div className="col-md-7">
            <input type="text" className="form-control" id="txtCreator" name="creator" value={creator} onChange={(event) =>{setCreator(event.target.value)}}/>
            {/* <span className="text-danger" id="startError">{vallidate.creator}</span> */}
          </div>
        </div>

        <div className="form-group row mb-3">
          <label htmlFor="txtDescription" className="col-md-3 col-form-label">
            Description:
          </label>
          <div className="col-md-7">
            <input type="text" className="form-control" id="txtDescript" name="descript"  value={descript} onChange={(event) =>{setDescript(event.target.value)}}/>
            {/* <span className="text-danger" id="startError">{vallidate.descript}</span> */}
          </div>
        </div>

        {/* <!-- end input --> */}
        <div className="form-group row mb-3" >
          <div className="col-md-12">
          <button variant="primary" className="btn btn-primary" onClick={handleSubmitBtn}>Submit</button>
          </div>
        
        </div>
      </Form>
    </div>
  );
}
export default AddNewForm;
