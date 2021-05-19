import React, { useEffect, useState } from 'react';
import TodoForm from './form.js';
import TodoList from './list.js';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import useAjax from '../hooks/useAjax.js'
import Pagination from './pagination.js'
import PaginationContext from '../context/pagination-context'
import ChangeNumberOfPages from './itemperpage'
import ToggleHideShow from './togglehideshow'
import ToggleShowProvider from '../context/hideShow';

import './todo.scss';


function ToDo(props) {
  const [list, _addItem, _toggleComplete, _getTodoItems, _deleteItems] =
    useAjax();

  //   const [list,setList] = useState([]);

  useEffect(() =>
    (document.title = `To Do List:(${list.filter((item) => !item.complete).length})`)
  );
  useEffect(_getTodoItems, []);
  //   const addItem = (item) => {
  //       item._id = Math.random();
  //       item.complete = false;
  //       setList([...list, item]);
  //     };
  //     const toggleComplete = id => {

  //       let item =list.filter(i => i._id === id)[0] || {};

  //       if (item._id) {
  //         item.complete = !item.complete;
  //         let list1 = list.map(listItem => listItem._id === item._id ? item : listItem);
  //         setList(list1);
  //       }

  //     };
  //     useEffect(() => {
  //       let list = [
  //     { _id: 1, complete: false, text: 'Clean the Kitchen', difficulty: 3, assignee: 'Person A'},
  //     { _id: 2, complete: false, text: 'Do the Laundry', difficulty: 2, assignee: 'Person A'},
  //     { _id: 3, complete: false, text: 'Walk the Dog', difficulty: 4, assignee: 'Person B'},
  //     { _id: 4, complete: true, text: 'Do Homework', difficulty: 3, assignee: 'Person C'},
  //     { _id: 5, complete: false, text: 'Take a Nap', difficulty: 1, assignee: 'Person B'},
  //   ];
  //   setList(list);
  // }, []);

  return (
    <>
      <Navbar bg="primary" variant="light">
        <Nav.Link style={{ color: 'white' }} href="#home">
          <strong className="white-text">Home</strong>
        </Nav.Link>
      </Navbar>
      <header>
        <h2 style={{ textAlign: "center", backgroundColor: "black", color: "white", marginLeft: "111px", width: "1300px", padding: "10px", marginTop: "20px" }}>
          There are ({list.filter(item => !item.complete).length}) Items To Complete
            </h2>
      </header>

      <section className="todo">

        <div>
          <TodoForm handleSubmit={_addItem} />
        </div>
        <PaginationContext list={list}>
        <div>
        <ToggleShowProvider list={list}>
        <ToggleHideShow/>
        <ChangeNumberOfPages/>
          <TodoList
            // list={list}
            handleComplete={_toggleComplete}
            handleDelete={_deleteItems}
          />
          </ToggleShowProvider>
              <Pagination
        totalitems={list.length}
      />
        </div>

        </PaginationContext>
        
      </section>
    </>
  );
}








// class ToDo extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       list: [],
//     };
//   }

//   addItem = (item) => {
//     item._id = Math.random();
//     item.complete = false;
//     this.setState({ list: [...this.state.list, item]});
//   };

//   toggleComplete = id => {

//     let item = this.state.list.filter(i => i._id === id)[0] || {};

//     if (item._id) {
//       item.complete = !item.complete;
//       let list = this.state.list.map(listItem => listItem._id === item._id ? item : listItem);
//       this.setState({list});
//     }

//   };

//   componentDidMount() {
//     let list = [
//       { _id: 1, complete: false, text: 'Clean the Kitchen', difficulty: 3, assignee: 'Person A'},
//       { _id: 2, complete: false, text: 'Do the Laundry', difficulty: 2, assignee: 'Person A'},
//       { _id: 3, complete: false, text: 'Walk the Dog', difficulty: 4, assignee: 'Person B'},
//       { _id: 4, complete: true, text: 'Do Homework', difficulty: 3, assignee: 'Person C'},
//       { _id: 5, complete: false, text: 'Take a Nap', difficulty: 1, assignee: 'Person B'},
//     ];

//     this.setState({list});
//   }

//   render() {
// return (
//   <>
//     <header>
//       <h2>
//       There are {this.state.list.filter(item => !item.complete).length} Items To Complete
//       </h2>
//     </header>

//     <section className="todo">

//       <div>
//         <TodoForm handleSubmit={this.addItem} />
//       </div>

//       <div>
//         <TodoList
//           list={this.state.list}
//           handleComplete={this.toggleComplete}
//         />
//       </div>
//     </section>
//   </>
// );
//   }
// }

export default ToDo;