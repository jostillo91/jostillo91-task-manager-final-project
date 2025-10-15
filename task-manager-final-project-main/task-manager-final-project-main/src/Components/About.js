import React from 'react';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';

/**
 * About Component
 * 
 * This component displays information about the Task Management Application.
 * It provides details about features, technology stack, and project information.
 * 
 * Features:
 * - Bootstrap styling with cards and lists
 * - Feature highlights
 * - Technology stack information
 * - Responsive design
 */
export default function About() {
  return (
    <Container className="py-4">
      {/* Header Section */}
      <Row className="mb-4">
        <Col>
          <div className="text-center">
            <h1 className="display-4 text-primary mb-3">
              ℹ️ About Task Manager
            </h1>
            <p className="lead">
              A comprehensive task management application built with modern web technologies.
            </p>
          </div>
        </Col>
      </Row>

      <Row>
        {/* Application Overview */}
        <Col md={6} className="mb-4">
          <Card className="h-100 shadow-sm">
            <Card.Header className="bg-primary text-white">
              <Card.Title className="mb-0">🎯 Application Overview</Card.Title>
            </Card.Header>
            <Card.Body>
              <p>
                Task Manager is a full-featured productivity application designed to help users
                organize, track, and manage their daily tasks efficiently.
              </p>
              <p>
                Built as part of the Week 16-18 Final Coding Project, this application demonstrates
                proficiency in React development, API integration, and modern web development practices.
              </p>
            </Card.Body>
          </Card>
        </Col>

        {/* Key Features */}
        <Col md={6} className="mb-4">
          <Card className="h-100 shadow-sm">
            <Card.Header className="bg-success text-white">
              <Card.Title className="mb-0">✨ Key Features</Card.Title>
            </Card.Header>
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item>✅ Full CRUD Operations (Create, Read, Update, Delete)</ListGroup.Item>
                <ListGroup.Item>🎨 Modern Bootstrap UI Design</ListGroup.Item>
                <ListGroup.Item>🔍 Advanced Filtering and Search</ListGroup.Item>
                <ListGroup.Item>📊 Task Statistics and Analytics</ListGroup.Item>
                <ListGroup.Item>📱 Responsive Mobile Design</ListGroup.Item>
                <ListGroup.Item>🔗 API Integration Ready</ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        {/* Technology Stack */}
        <Col md={6} className="mb-4">
          <Card className="h-100 shadow-sm">
            <Card.Header className="bg-info text-white">
              <Card.Title className="mb-0">🛠️ Technology Stack</Card.Title>
            </Card.Header>
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item><strong>Frontend:</strong> React 17</ListGroup.Item>
                <ListGroup.Item><strong>Routing:</strong> React Router DOM 5.3</ListGroup.Item>
                <ListGroup.Item><strong>Styling:</strong> React Bootstrap</ListGroup.Item>
                <ListGroup.Item><strong>API:</strong> MockAPI (RESTful)</ListGroup.Item>
                <ListGroup.Item><strong>Build Tool:</strong> Create React App</ListGroup.Item>
                <ListGroup.Item><strong>Version Control:</strong> Git & GitHub</ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>

        {/* Project Requirements */}
        <Col md={6} className="mb-4">
          <Card className="h-100 shadow-sm">
            <Card.Header className="bg-warning text-dark">
              <Card.Title className="mb-0">📋 Project Requirements</Card.Title>
            </Card.Header>
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item>✅ React Router with 3+ pages</ListGroup.Item>
                <ListGroup.Item>✅ React Bootstrap styling</ListGroup.Item>
                <ListGroup.Item>✅ 10+ custom components</ListGroup.Item>
                <ListGroup.Item>✅ Full CRUD operations</ListGroup.Item>
                <ListGroup.Item>✅ API integration</ListGroup.Item>
                <ListGroup.Item>✅ Comprehensive documentation</ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Footer */}
      <Row>
        <Col>
          <Card className="text-center">
            <Card.Body>
              <Card.Text className="text-muted">
                <strong>Week 16-18 Final Coding Project</strong><br />
                Frontend Development with React<br />
                Built with ❤️ and modern web technologies
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}


