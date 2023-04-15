import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'

const event = ({ event }) => {
  return (
    <Card className='my-3 p-3 rounded relative'>
      <Link to={`/event/${event._id}`}>
        <Card.Img src={event.image} variant='top' />
      </Link>

      <Card.Body>
        <Link to={`/event/${event._id}`}>
          <Card.Title as='div'>
            <strong>{event.name}</strong>
          </Card.Title>
        </Link>
        <Card.Text>
          {event.description}
        </Card.Text>
        
        <Card.Text variant="primary">
          {event.date}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default event