import React from 'react';
import { ListGroup } from 'react-bootstrap';


function TodoList(props) {
    return (
        <ListGroup as="ul"  >
          {props.list.map(item => (
            <ListGroup.Item as="li"
              className={`complete-${item.complete.toString()}`}
              key={item._id}
            >
              <span type="onClick" onClick={() => props.handleComplete(item._id)}>
                {item.text} -- {item.assignee}
              </span>
            </ListGroup.Item>
          ))}
        </ListGroup >
      );
}





// class TodoList extends React.Component {

//   render() {
    // return (
    //   <ul>
    //     {this.props.list.map(item => (
    //       <li
    //         className={`complete-${item.complete.toString()}`}
    //         key={item._id}
    //       >
    //         <span onClick={() => this.props.handleComplete(item._id)}>
    //           {item.text}
    //         </span>
    //       </li>
    //     ))}
    //   </ul>
    // );
//   }
// }

export default TodoList;