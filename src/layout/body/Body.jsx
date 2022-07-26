import React from 'react';
import PropTypes from 'prop-types';
import Sidebar from '../../components/sidebar/Sidebar';
import Todolistitem from '../../components/todolistitem/Todolistitem';

Body.propTypes = {
    
};

function Body(props) {
    return (
        <div className='container-fluid'>
        <div className='row'>
            <Sidebar />
            <div className="col-md-10">
            <div className="row">
            <Todolistitem
              taskName="Task 1"
              taskAuthor="Thien"
              taskStatus="New"
              taskDess="this is a tassk, this1.... "
            />
            <Todolistitem
              taskName="Task 2"
              taskAuthor="Van"
              taskStatus="New"
              taskDess="this is a tassk, this2.... "
            />
            <Todolistitem
              taskName="Task 3"
              taskAuthor="Dat"
              taskStatus="New"
              taskDess="this is a tassk, this3.... "
            />
            <Todolistitem
              taskName="Task 4"
              taskAuthor="Cong"
              taskStatus="New"
              taskDess="this is a tassk, this4.... "
            />
            <Todolistitem
              taskName="Task 5"
              taskAuthor="Amit"
              taskStatus="New"
              taskDess="this is a tassk, this5.... "
            />
            <Todolistitem
              taskName="Task 6"
              taskAuthor="Marco"
              taskStatus="New"
              taskDess="this is a tassk, this6.... "
            />
            <Todolistitem
              taskName="Task 7"
              taskAuthor="Thiago"
              taskStatus="New"
              taskDess="this is a tassk, this7.... "
            />
            <Todolistitem
              taskName="Task 8"
              taskAuthor="Viet"
              taskStatus="New"
              taskDess="this is a tassk, this8.... "
            />
            <Todolistitem
              taskName="Task 9"
              taskAuthor="Nam"
              taskStatus="New"
              taskDess="this is a tassk, this9.... "
            />
            <Todolistitem
              taskName="Task 10"
              taskAuthor="Tien"
              taskStatus="New"
              taskDess="this is a tassk, this10.... "
            />
            <Todolistitem
              taskName="Task 11"
              taskAuthor="Cuong"
              taskStatus="New"
              taskDess="this is a tassk, this11.... "
            />
            <Todolistitem
              taskName="Task 12"
              taskAuthor="Thinh"
              taskStatus="New"
              taskDess="this is a tassk, this12.... "
            />
            </div>
            </div>
           
         </div>
    </div>
    );
}

export default Body;