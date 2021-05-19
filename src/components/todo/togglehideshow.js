import React from 'react';
import { HideShowContext } from '../context/hideShow';
import Button from 'react-bootstrap/Button';


class Content extends React.Component {


  static contextType = HideShowContext;




  render() {
    
    return (
      <>

       <Button variant="primary" size="lg"  onClick={this.context.StatusHideShow} className="hideShow">

       {this.context.status === 'show' ? 'hide' : 'show'} completed items

        </Button>{' '}
      </>
    );
  }
}
export default Content;



