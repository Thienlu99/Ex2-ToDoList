import React from 'react';
import PropTypes from 'prop-types';
import Headerright from '../../components/header/Headerright';
import Headerleft from '../../components/header/Headerleft';

header.propTypes = {
    
};

function header(props) {
    return (
        <div className='container-fluid'>
            <div className='row' style={{paddingTop:"10px",background:"#3c46cf"}}>
            <Headerleft />
            <Headerright />
             </div>
        </div>
    );
}

export default header;