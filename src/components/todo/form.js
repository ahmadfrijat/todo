import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';





function TodoForm(props) {
  const [item,setItem] = useState({});

  const handleInputChange = e => {
    setItem( {...item, [e.target.name]: e.target.value  });
    
};
const  handleSubmit = (e) => {
  e.preventDefault();
  e.target.reset();
  props.handleSubmit(item);
  const item1 = {};
  setItem(item1);
};

  return (
    <>
     <Card style={{ marginLeft: '400px', width: '24rem', height: '25rem' ,padding: '10px' }}>
      <h3>Add Item</h3>
      <Form onSubmit={handleSubmit} style={{ margin: '20px' }}>
      <Form.Label>
          <span>To Do Item</span>
          <Form.Control
            name="text"
            placeholder="Add To Do List Item"
            onChange={handleInputChange}
          />
        </Form.Label>
        <Form.Label>
          <span>Difficulty Rating</span>
          <Form.Control defaultValue="1" type="range" min="1" max="5" name="difficulty" onChange={handleInputChange} />
        </Form.Label>
        <Form.Label>
          <span>Assigned To</span>
          <Form.Control type="text" name="assignee" placeholder="Assigned To" onChange={handleInputChange} />
        </Form.Label>
        <Button type="submit">Add Item</Button>
        {/* <button></button> */}
      </Form>
    </Card>
    </>
  );
}



// class TodoForm extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = { item: {} };
//   }
//   handleInputChange = e => {
//     this.setState({ item: {...this.state.item, [e.target.name]: e.target.value } });
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();
//     e.target.reset();
//     this.props.handleSubmit(this.state.item);
//     const item = {};
//     this.setState({item});
//   };

//   render() {
    // return (
    //   <>
    //     <h3>Add Item</h3>
    //     <form onSubmit={this.handleSubmit}>
    //       <label>
    //         <span>To Do Item</span>
    //         <input
    //           name="text"
    //           placeholder="Add To Do List Item"
    //           onChange={this.handleInputChange}
    //         />
    //       </label>
    //       <label>
    //         <span>Difficulty Rating</span>
    //         <input defaultValue="1" type="range" min="1" max="5" name="difficulty" onChange={this.handleInputChange} />
    //       </label>
    //       <label>
    //         <span>Assigned To</span>
    //         <input type="text" name="assignee" placeholder="Assigned To" onChange={this.handleInputChange} />
    //       </label>
    //       <button>Add Item</button>
    //     </form>
    //   </>
    // );
//   }
// }

export default TodoForm;