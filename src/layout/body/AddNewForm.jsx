import React, { useState } from 'react';
import PropTypes from 'prop-types';
import InputText from '../../components/InputText';
import Button from '../../components/Button';
import Form from 'react-bootstrap/Form';
import "./AddNewForm.scss";


AddNewForm.propTypes = {
    
};

function AddNewForm(props) {
    const { formClass, handleSubmit } = props;
    // React.useState
  //es6
  const [title, setTitle] = useState("");
  const [creator, setCreator] = useState("");
  const [description, setDescription] = useState("");
    return (
        <div className='add'>
            {/* <form action="" onSubmit={handleSubmit} className={`formClassContainer ${formClass}`}>
                <InputText 
                    label={'Title'}
                    placeholder = {'Type title'}
                    name={'title'}
                    value={title}
                    onChange ={(e) => setTitle(e.target.value)}
                />
                <InputText 
                    label={'Creator'}
                    placeholder = {'Name of Creator'}
                    name={'creator'}
                    value={creator}
                    onChange ={(e) => setCreator(e.target.value)}
                />
                <InputText 
                    label={'Desscription'}
                    placeholder = {'Desscription Details'}
                    name={'description'}
                    value={description}
                    onChange ={(e) => setDescription(e.target.value)}
                />
            </form>
            <div>
                <Button className="btn btn-primary"
                    title={'Save'} type={'submit'}
                />
            </div> */}

            <Form>
      <Form.Group className="mb-3" controlId="">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="">
        <Form.Label>Creator</Form.Label>
        <Form.Control type="text" placeholder="" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="">
        <Form.Label>Desscription</Form.Label>
        <Form.Control type="text" placeholder="" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="">
      <button className='btn btn-primary'>Save</button>
      </Form.Group>
    </Form>
        </div>
    );
}

export default AddNewForm;