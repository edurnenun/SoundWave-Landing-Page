
import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


class JoinForm extends Component {
  render() {
    return (
    <Container className='container-form'>
      <Form className='joinForm'>
        <Form.Group controlId="form.Name">
            <Form.Label>Name:</Form.Label>
            <Form.Control type="text" placeholder="Enter name" />
        </Form.Group>

        <Form.Group controlId="form.Email">
            <Form.Label>Email:</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>

        <Form.Group controlId="form.Textarea">
            <Form.Label>Password:</Form.Label>
            <Form.Control type="password" placeholder="*****" />
        </Form.Group>

        <Button variant="primary" type="submit">
        Join Now
        </Button>
       
        
      </Form>
    </Container>
    );
  }
       
}
 
  
  
  export default JoinForm;