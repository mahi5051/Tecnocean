import React from 'react'
import events from '../events'
import Event from '../components/Event'
import {Row, Col } from 'react-bootstrap'

const HomeScreen = () => {
    
  return (
    <>
     <h1>Latest Events</h1>
     <Row>
        {events.map(event => (
            <Col sm={12} md={6} lg={4}>
               <Event event={event} />
            </Col>
        ))}
     </Row>
    </>
  )
}

export default HomeScreen