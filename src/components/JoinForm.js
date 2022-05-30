import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';


class JoinForm extends Component {
  render() {
    return (
    <Container>
      <Form className='joinForm'>
        {/*<Form.Group controlId="form.Name">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter name" />
        </Form.Group>
        <Form.Group controlId="form.Email">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group controlId="form.Textarea">
            <Form.Label>Comment</Form.Label>
            <Form.Control as="textarea" rows={3} />
        </Form.Group>*/}
        {/*<label>Name</label>
        <input type="text" id="name" name="user_name" placeholder='Name'></input>*/}
        
      </Form>
    </Container>
    );
  }
       
}
 
  
  
  export default JoinForm;