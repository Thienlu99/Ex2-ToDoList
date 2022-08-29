import React from 'react';
import PropTypes from 'prop-types';
import Todolistitem from '../todolistitem/Todolistitem';

Todolist.propTypes = {
    
};
// const todoList = [
//     {
//       title :"Task 1",
//       author:"Thien",
//       status:"New",
//       description:"this is a tassk, this1.... "
//     },
//     {
//       title :"Task 2",
//       author:"Van",
//       status:"New",
//       description:"this is a tassk, this1.... "
//     },
//     {
//       title :"Task 3",
//       author:"Dat",
//       status:"New",
//       description:"this is a tassk, this1.... "
//     }
// ];
function Todolist() {
  // const todoList = JSON.parse(localStorage.getItem("data")) || [];
  // localStorage.setItem('data',JSON.stringify(todoList))
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
           {/* {todoList.length > 0 &&
            todoList.map((item, index) => <Todolistitem  item={item} key={index}  
             title= {item.title}
             author= {item.author}
             status= {item.status}
             description= {item.description}/>)} */}
             <Todolistitem 
             />
            </>
    );
}

export default Todolist;