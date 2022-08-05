import React from 'react';
import PropTypes from 'prop-types';
import Todolistitem from '../todolistitem/Todolistitem';

Todolist.propTypes = {
    
};
// const todoList = [
//     {
//       taskName :"Task 1",
//       taskAuthor:"Thien",
//       taskStatus:"New",
//       taskDess:"this is a tassk, this1.... "
//     },
//     {
//       taskName :"Task 2",
//       taskAuthor:"Van",
//       taskStatus:"New",
//       taskDess:"this is a tassk, this1.... "
//     },
//     {
//       taskName :"Task 3",
//       taskAuthor:"Dat",
//       taskStatus:"New",
//       taskDess:"this is a tassk, this1.... "
//     }
// ];
function Todolist(props) {
  const todoList = JSON.parse(localStorage.getItem("data")) || [];
    //  const renderTodoItem = () =>{
    //     return  todoList.map((item,index) => (
    //       <>
    //       <Todolistitem 
    //         key = {`${item.taskName}_${index}`}
    //         taskName= {item.taskName}
    //         taskAuthor= {item.taskAuthor}
    //         taskStatus= {item.taskStatus}
    //         taskDess= {item.taskDess}
    //       />
    //    </>
    //     ));
        
    //   }
    return (
        <>
           {todoList.length > 0 &&
            todoList.map((item, index) => <Todolistitem  item={item} key={index}  taskName= {item.taskName}
             taskAuthor= {item.taskAuthor}
             taskStatus= {item.taskStatus}
             taskDess= {item.taskDess}/>)}
            </>
    );
}

export default Todolist;