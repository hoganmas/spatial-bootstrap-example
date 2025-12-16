import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Container, Row, Col, Card, Button, Badge, ButtonGroup } from 'react-bootstrap'

function App() {
  const [count, setCount] = useState(0)
  const [showAlert, setShowAlert] = useState(true)
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    // Initialize from localStorage or default to 'light'
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null
    return savedTheme || 'light'
  })

  useEffect(() => {
    // Apply theme to document
    document.documentElement.setAttribute('data-bs-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light')
  }

  return (
    <Container className="py-5">
      <Row className="mb-3">
        <Col className="text-end">
          <Button 
            variant={theme === 'light' ? 'dark' : 'light'}
            onClick={toggleTheme}
            className="d-inline-flex align-items-center"
          >
            {theme === 'light' ? (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-moon-fill me-2" viewBox="0 0 16 16">
                  <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278"/>
                </svg>
                Dark Mode
              </>
            ) : (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-sun-fill me-2" viewBox="0 0 16 16">
                  <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708"/>
                </svg>
                Light Mode
              </>
            )}
          </Button>
        </Col>
      </Row>
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

      {showAlert && (
        <Row className="mb-4">
          <Col>
            <div className="alert alert-info alert-dismissible fade show" role="alert">
              <h4 className="alert-heading">Welcome!</h4>
              <p className="mb-0">This page showcases various Bootstrap components including cards and buttons.</p>
              <button 
                type="button" 
                className="btn-close" 
                aria-label="Close"
                onClick={() => setShowAlert(false)}
              ></button>
            </div>
          </Col>
        </Row>
      )}

      <Row className="mb-4">
        <Col md={6} className="mb-4">
          <Card className="shadow-sm h-100">
            <Card.Body className="text-center">
              <Card.Title className="mb-3">
                Counter Example <Badge bg="primary">New</Badge>
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
        <Col md={6} className="mb-4">
          <Card className="shadow-sm h-100 border-primary">
            <Card.Header className="bg-primary text-white">
              <Card.Title className="mb-0">Button Variants</Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="d-grid gap-2">
                <Button variant="primary">Primary Button</Button>
                <Button variant="secondary">Secondary Button</Button>
                <Button variant="success">Success Button</Button>
                <Button variant="danger">Danger Button</Button>
                <Button variant="warning">Warning Button</Button>
                <Button variant="info">Info Button</Button>
                <Button variant="light">Light Button</Button>
                <Button variant="dark">Dark Button</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col md={4} className="mb-4">
          <Card className="shadow-sm h-100">
            <Card.Img variant="top" src={viteLogo} style={{ height: '200px', objectFit: 'contain', padding: '1rem' }} />
            <Card.Body>
              <Card.Title>Vite Card</Card.Title>
              <Card.Text>
                Fast build tool and development server for modern web projects.
              </Card.Text>
              <ButtonGroup className="w-100">
                <Button variant="outline-primary" size="sm">Learn More</Button>
                <Button variant="outline-secondary" size="sm">Docs</Button>
              </ButtonGroup>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card className="shadow-sm h-100">
            <Card.Img variant="top" src={reactLogo} style={{ height: '200px', objectFit: 'contain', padding: '1rem' }} />
            <Card.Body>
              <Card.Title>React Card</Card.Title>
              <Card.Text>
                A JavaScript library for building user interfaces with components.
              </Card.Text>
              <ButtonGroup className="w-100">
                <Button variant="outline-success" size="sm">Learn More</Button>
                <Button variant="outline-info" size="sm">Docs</Button>
              </ButtonGroup>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card className="shadow-sm h-100 border-success">
            <Card.Header className="bg-success text-white">
              <Card.Title className="mb-0">Action Buttons</Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="d-grid gap-2">
                <Button variant="outline-primary" size="lg">
                  Large Button
                </Button>
                <Button variant="outline-secondary">
                  Default Button
                </Button>
                <Button variant="outline-success" size="sm">
                  Small Button
                </Button>
                <Button variant="primary" disabled>
                  Disabled Button
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col md={6} className="mb-4">
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Title>Button Group Examples</Card.Title>
              <Card.Text className="mb-3">Different button group styles:</Card.Text>
              <ButtonGroup className="mb-3" aria-label="Basic example">
                <Button variant="primary">Left</Button>
                <Button variant="primary">Middle</Button>
                <Button variant="primary">Right</Button>
              </ButtonGroup>
              <br />
              <ButtonGroup vertical className="w-100">
                <Button variant="outline-dark">Top</Button>
                <Button variant="outline-dark">Middle</Button>
                <Button variant="outline-dark">Bottom</Button>
              </ButtonGroup>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} className="mb-4">
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Title>Badge Examples</Card.Title>
              <Card.Text className="mb-3">Various badge styles:</Card.Text>
              <div className="mb-2">
                <Badge bg="primary" className="me-2">Primary</Badge>
                <Badge bg="secondary" className="me-2">Secondary</Badge>
                <Badge bg="success" className="me-2">Success</Badge>
                <Badge bg="danger" className="me-2">Danger</Badge>
                <Badge bg="warning" text="dark" className="me-2">Warning</Badge>
                <Badge bg="info" className="me-2">Info</Badge>
              </div>
              <div>
                <Button variant="primary">
                  Notifications <Badge bg="light" text="dark">4</Badge>
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
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
