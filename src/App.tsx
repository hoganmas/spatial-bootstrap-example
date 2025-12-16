import { useState, useEffect } from 'react'
import './App.css'
import { Container, Row, Col, Card, Button, Badge, ButtonGroup } from 'react-bootstrap'

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    // Initialize from localStorage or default to 'light'
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null
    return savedTheme || 'light'
  })
  const [example, setExample] = useState<'pricing' | 'components'>('pricing')

  useEffect(() => {
    // Apply theme to document
    document.documentElement.setAttribute('data-bs-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light')
  }

  return (
    <Container fluid className="py-4">
      <Row>
        {/* Sidebar */}
        <Col md={3} lg={2} className="d-none d-md-block border-end">
          <div
            className="d-flex flex-column position-sticky"
            style={{ top: '1rem', padding: '1.5rem 1rem 1.5rem 0' }}
          >
            <div className="mb-4">
              <h5 className="mb-3">Examples</h5>
              <div className="d-grid gap-2">
                <Button
                  variant={example === 'pricing' ? 'primary' : 'outline-primary'}
                  size="sm"
                  onClick={() => setExample('pricing')}
                >
                  Pricing page
                </Button>
                <Button
                  variant={example === 'components' ? 'primary' : 'outline-primary'}
                  size="sm"
                  onClick={() => setExample('components')}
                >
                  Components demo
                </Button>
              </div>
            </div>
            <div className="mt-auto pt-3 border-top">
              <div className="d-flex justify-content-between align-items-center">
                <span className="small text-muted">Theme</span>
                <Button
                  variant={theme === 'light' ? 'dark' : 'light'}
                  size="sm"
                  onClick={toggleTheme}
                >
                  {theme === 'light' ? 'Dark' : 'Light'}
                </Button>
              </div>
            </div>
          </div>
        </Col>

        {/* Main content */}
        <Col md={9} lg={10}>
          {example === 'pricing' ? <PricingExample /> : <ComponentsExample />}
        </Col>
      </Row>
    </Container>
  )
}

function PricingExample() {
  return (
    <>
      {/* Header bar */}
      <header className="pb-3 mb-4 border-bottom">
        <Row className="align-items-center">
          <Col md={6}>
            <a href="#" className="d-inline-flex align-items-center text-decoration-none">
              <span className="fs-4 fw-bold">Company name</span>
            </a>
          </Col>
          <Col md={6} className="d-none d-md-flex justify-content-end">
            <nav>
              <a href="#" className="px-2 text-secondary">Features</a>
              <a href="#" className="px-2 text-secondary">Enterprise</a>
              <a href="#" className="px-2 text-secondary">Support</a>
              <a href="#" className="px-2 text-secondary">Pricing</a>
            </nav>
          </Col>
        </Row>
      </header>

      {/* Hero */}
      <Row className="text-center mb-5">
        <Col lg={{ span: 6, offset: 3 }}>
          <h1 className="display-4">Pricing</h1>
          <p className="lead text-muted">
            Quickly build an effective pricing table for your potential customers with this
            Bootstrap-inspired example. It uses default components and utilities with light
            customization.
          </p>
        </Col>
      </Row>

      {/* Pricing cards */}
      <Row className="row-cols-1 row-cols-md-3 mb-5 text-center g-4">
        <Col>
          <Card className="mb-4 shadow-sm h-100">
            <Card.Header>
              <h4 className="my-0 fw-normal">Free</h4>
            </Card.Header>
            <Card.Body>
              <h1 className="card-title pricing-card-title">
                $0 <small className="text-muted fw-light">/ mo</small>
              </h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>10 users included</li>
                <li>2 GB of storage</li>
                <li>Email support</li>
                <li>Help center access</li>
              </ul>
              <Button variant="outline-primary" className="w-100">
                Sign up for free
              </Button>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card className="mb-4 shadow-sm h-100 border-primary">
            <Card.Header className="bg-primary text-white">
              <h4 className="my-0 fw-normal">Pro</h4>
            </Card.Header>
            <Card.Body>
              <h1 className="card-title pricing-card-title">
                $15 <small className="text-muted fw-light">/ mo</small>
              </h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>20 users included</li>
                <li>10 GB of storage</li>
                <li>Priority email support</li>
                <li>Help center access</li>
              </ul>
              <Button variant="primary" className="w-100">
                Get started
              </Button>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card className="mb-4 shadow-sm h-100">
            <Card.Header>
              <h4 className="my-0 fw-normal">Enterprise</h4>
            </Card.Header>
            <Card.Body>
              <h1 className="card-title pricing-card-title">
                $29 <small className="text-muted fw-light">/ mo</small>
              </h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>30 users included</li>
                <li>15 GB of storage</li>
                <li>Phone and email support</li>
                <li>Help center access</li>
              </ul>
              <Button variant="primary" className="w-100">
                Contact us
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Footer-style links */}
      <Row className="pt-4 mt-4 border-top text-muted">
        <Col md={4} className="mb-3">
          <h5>Features</h5>
          <ul className="list-unstyled">
            <li>Cool stuff</li>
            <li>Random feature</li>
            <li>Team feature</li>
            <li>Stuff for developers</li>
            <li>Another one</li>
            <li>Last time</li>
          </ul>
        </Col>
        <Col md={4} className="mb-3">
          <h5>Resources</h5>
          <ul className="list-unstyled">
            <li>Resource</li>
            <li>Resource name</li>
            <li>Another resource</li>
            <li>Final resource</li>
          </ul>
        </Col>
        <Col md={4} className="mb-3">
          <h5>About</h5>
          <ul className="list-unstyled">
            <li>Team</li>
            <li>Locations</li>
            <li>Privacy</li>
            <li>Terms</li>
          </ul>
          <small className="d-block mt-3">© 2017–2018</small>
        </Col>
      </Row>
    </>
  )
}

function ComponentsExample() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header className="pb-3 mb-4 border-bottom">
        <h1 className="display-5">Components demo</h1>
        <p className="lead text-muted mb-0">
          A gallery of Bootstrap cards, buttons, badges, and layouts.
        </p>
      </header>

      <Row className="mb-4">
        <Col md={6} className="mb-4">
          <Card className="shadow-sm h-100">
            <Card.Body className="text-center">
              <Card.Title className="mb-3">
                Counter example <Badge bg="primary">Live</Badge>
              </Card.Title>
              <Button
                variant="primary"
                size="lg"
                onClick={() => setCount(c => c + 1)}
                className="mb-3"
              >
                Count is <Badge bg="light" text="dark" className="ms-1">{count}</Badge>
              </Button>
              <Card.Text className="text-muted">
                Click the button to increment the counter.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} className="mb-4">
          <Card className="shadow-sm h-100 border-primary">
            <Card.Header className="bg-primary text-white">
              <Card.Title className="mb-0">Button variants</Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="d-grid gap-2">
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="success">Success</Button>
                <Button variant="danger">Danger</Button>
                <Button variant="warning">Warning</Button>
                <Button variant="info">Info</Button>
                <Button variant="light">Light</Button>
                <Button variant="dark">Dark</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col md={4} className="mb-4">
          <Card className="shadow-sm h-100">
            <Card.Body>
              <Card.Title>Outline buttons</Card.Title>
              <Card.Text className="mb-3">
                Use outline styles for secondary actions.
              </Card.Text>
              <div className="d-grid gap-2">
                <Button variant="outline-primary">Outline primary</Button>
                <Button variant="outline-secondary">Outline secondary</Button>
                <Button variant="outline-success">Outline success</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card className="shadow-sm h-100">
            <Card.Body>
              <Card.Title>Button groups</Card.Title>
              <Card.Text className="mb-3">
                Group related actions together.
              </Card.Text>
              <ButtonGroup className="mb-3">
                <Button variant="primary">Left</Button>
                <Button variant="primary">Middle</Button>
                <Button variant="primary">Right</Button>
              </ButtonGroup>
              <div>
                <ButtonGroup vertical>
                  <Button variant="outline-dark">Top</Button>
                  <Button variant="outline-dark">Middle</Button>
                  <Button variant="outline-dark">Bottom</Button>
                </ButtonGroup>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card className="shadow-sm h-100">
            <Card.Body>
              <Card.Title>Badges</Card.Title>
              <Card.Text className="mb-3">
                Small count and labeling components.
              </Card.Text>
              <div className="mb-2">
                <Badge bg="primary" className="me-1">Primary</Badge>
                <Badge bg="secondary" className="me-1">Secondary</Badge>
                <Badge bg="success" className="me-1">Success</Badge>
                <Badge bg="danger" className="me-1">Danger</Badge>
                <Badge bg="warning" text="dark" className="me-1">Warning</Badge>
                <Badge bg="info" className="me-1">Info</Badge>
              </div>
              <Button variant="primary">
                Notifications <Badge bg="light" text="dark" className="ms-1">4</Badge>
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default App
