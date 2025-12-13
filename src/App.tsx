import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap'

function App() {
  const [count, setCount] = useState(0)

  console.log(import.meta.env.XR_ENV)

  return (
    <Container className="py-5">
    <Row className="text-center mb-4">
      <Col>
        <h1 className="display-4 mb-4">Vite + React</h1>
        <div className="mb-4">
          <a href="https://vite.dev" target="_blank" className="me-4">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
      </Col>
    </Row>

    <Row className="justify-content-center">
        <Col md={6}>
          <Card className="shadow-sm">
            <Card.Body className="text-center">
              <Card.Title className="mb-3">
                Counter Example
              </Card.Title>
              <Button 
                variant="primary" 
                size="lg"
                onClick={() => setCount((count) => count + 1)}
                className="mb-3"
              >
                Count is <Badge bg="light" text="dark">{count}</Badge>
              </Button>
              <Card.Text className="text-muted">
                Edit <code>src/App.tsx</code> and save to test HMR
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col className="text-center">
          <p className="text-muted">
            Click on the Vite and React logos to learn more
          </p>
        </Col>
      </Row>
    </Container>
  )
}

export default App
