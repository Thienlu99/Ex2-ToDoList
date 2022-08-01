import React from 'react';
import PropTypes from 'prop-types';
import Sidebar from '../../components/sidebar/Sidebar';
import Todolistitem from '../../components/todolistitem/Todolistitem';

Home.propTypes = {
    
};

function Home(props) {
    //Render many itiem arrap
    const todoList = [
      {
        taskName :"Task 1",
        taskAuthor:"Thien",
        taskStatus:"New",
        taskDess:"this is a tassk, this1.... "
      },
      {
        taskName :"Task 2",
        taskAuthor:"Van",
        taskStatus:"New",
        taskDess:"this is a tassk, this1.... "
      },
      {
        taskName :"Task 3",
        taskAuthor:"Dat",
        taskStatus:"New",
        taskDess:"this is a tassk, this1.... "
      },
      {
        taskName :"Task 4",
        taskAuthor:"Cong",
        taskStatus:"New",
        taskDess:"this is a tassk, this1.... "
      },
      {
        taskName :"Task 5",
        taskAuthor:"Amit",
        taskStatus:"New",
        taskDess:"this is a tassk, this1.... "
      },   {
        taskName :"Task 6",
        taskAuthor:"Marco",
        taskStatus:"New",
        taskDess:"this is a tassk, this1.... "
      },
      {
        taskName :"Task 7",
        taskAuthor:"Thiago",
        taskStatus:"New",
        taskDess:"this is a tassk, this1.... "
      },
      {
        taskName :"Task 8",
        taskAuthor:"Viet",
        taskStatus:"New",
        taskDess:"this is a tassk, this1.... "
      },
      {
        taskName :"Task 9",
        taskAuthor:"Nam",
        taskStatus:"New",
        taskDess:"this is a tassk, this1.... "
      },
      {
        taskName :"Task 10",
        taskAuthor:"Tien",
        taskStatus:"New",
        taskDess:"this is a tassk, this1.... "
      },
      {
        taskName :"Task 11",
        taskAuthor:"Cuong",
        taskStatus:"New",
        taskDess:"this is a tassk, this1.... "
      },
      {
        taskName :"Task 12",
        taskAuthor:"Thinh",
        taskStatus:"New",
        taskDess:"this is a tassk, this1.... "
      },

    ];
    const renderTodoItem = () =>{
      return todoList.map((item,index) => (
        <Todolistitem 
          key = {`${item.taskName}_${index}`}
          taskName= {item.taskName}
          taskAuthor= {item.taskAuthor}
          taskStatus= {item.taskStatus}
          taskDess= {item.taskDess}
        />
      ));
    }
    return (
        <div className='container-fluid'>
        <div className='row ' >
            <Sidebar />
            <div className="col-md-10">
            <div className="row">
           {renderTodoItem()}
            </div>
            </div>
           
         </div>
    </div>
    );
}

export default Home;