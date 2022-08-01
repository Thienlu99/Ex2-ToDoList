import React from 'react';
import PropTypes from 'prop-types';
import Sidebar from '../../components/sidebar/Sidebar';
import Todolistitem from '../../components/todolistitem/Todolistitem';
import AddNewForm from './AddNewForm';

Body.propTypes = {
    
};

function Body(props) {
    //Render many itiem arrap

  
    return (
        <div className='container-fluid'>
        <div className='row ' >
            <Sidebar />
            <div className="col-md-5" style={{margin: "0 auto"}}>
            <div className="row">
            <AddNewForm />
            </div>
            </div>
           
         </div>
    </div>
    );
}

export default Body;