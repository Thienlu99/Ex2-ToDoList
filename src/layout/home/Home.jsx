import React from 'react';
import PropTypes from 'prop-types';
import Sidebar from '../../components/sidebar/Sidebar';
import Todolistitem from '../../components/todolistitem/Todolistitem';
import Todolist from '../../components/Todolist/Todolist';

Home.propTypes = {
    
};

function Home(props) {
    return (
        <div className='container-fluid'>
        <div className='row ' >
            <Sidebar />
            <div className="col-md-10">
            <div className="row">
            <Todolist />
            </div>
            </div>
           
         </div>
    </div>
    );
}

export default Home;