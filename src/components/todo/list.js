import React, { useContext } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import {PaginationContext} from '../context/pagination-context.js';
import { HideShowContext } from '../context/hideShow';


function TodoList(props) {
  const toggleContext = useContext(HideShowContext);
  const pagination = useContext(PaginationContext);

  return (
    <ul>
      {pagination.current.map((item) => (
        <Card 
          className={`complete-${item.complete} complete-${item.complete}-${toggleContext.status} card`}
          key={item._id}
        >
          <Card.Header>
            <Badge pill variant={item.complete ? 'danger' : 'success'}>
              {item.complete ? 'Complete' : 'Pending'}
            </Badge>
            <strong style={{ marginLeft: '20px' }} >
							{item.assignee}
						</strong>
            <Button style={{ marginLeft: '226px' }} variant="danger" className='delete' onClick={() => props.handleDelete(item._id, 'delete')}>X</Button></Card.Header>
          <Card.Text onClick={() => props.handleComplete(item._id, 'put')}>
            {"      "}{item.text}

            <strong className="text-muted">Difficulty:{item.difficulty} </strong>

          </Card.Text>
          {/* <Card.Footer className="text-muted">Difficulty:{item.difficulty}</Card.Footer> */}
        </Card>
      ))}
    </ul>
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