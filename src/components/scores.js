import React, {useState} from 'react'
import { Row, Col, Container } from "react-bootstrap";

function Scores() {
    const formInitialDetails = {
        firstName: '',
        email: '',
        phone: '',
        message: ''
      }
      const [formDetails, setFormDetails] = useState(formInitialDetails);
    
      const onFormUpdate = (category, value) => {
          setFormDetails({
            ...formDetails,
            [category]: value
          })
      }
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        let response = await fetch("https://elevance-backend.onrender.com/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
          body: JSON.stringify(formDetails),
        });
        let result = await response.json();
        setFormDetails(formInitialDetails);
        if (result === 'success'){
          alert('We have recieved your query. We will get back to you as soon as we can!')
        }
      };
    
  return (
    <section className="contact scores" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
              
                <h2>Submit the Scores here</h2>
                <form onSubmit={handleSubmit}>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="tel" value={formDetails.phone} placeholder="Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)}/>
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea rows="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                      <button type="submit"><span>Submit</span></button>
                    </Col>
                  </Row>
                </form>
          </Col>
        </Row>
        <Row >
            <button className='button-scores'>
                <p>Get the scores</p>
            </button>
        </Row>
      </Container>
    </section>
  )
}

export default Scores