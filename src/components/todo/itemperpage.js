import React, { useContext } from 'react';
import './todo.scss';
import { PaginationContext }  from '../context/pagination-context'
import {Form} from 'react-bootstrap';


function ChengeNumberOfPages  () {

const pagination = useContext(PaginationContext);

const onChang = (e) =>{
    
    pagination.setItems(e.target.value)
    // console.log(pagination.setItems(e.target.value));
}
  
    return (
      <>
       <Form.Control as="select" size="lg" custom onChange={onChang}>

           <option>ITEMS PER PAGES</option>
           <option value='2'>2</option>
           <option value='4'>4</option>
           <option value='5'>5</option>
           <option value='6'>6</option>
           <option value='7'>7</option>
           <option value='8'>8</option>
           
      </Form.Control>
      </>
    );
  
}
export default ChengeNumberOfPages;