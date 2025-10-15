import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Stats from './Stats.js';

/**
 * Home/Dashboard Component
 * 
 * This is the main dashboard component that displays:
 * - Welcome message and overview
 * - Task statistics
 * - Quick action buttons
 * - Recent activity summary
 * 
 * Features:
 * - Bootstrap styling with cards and grid layout
 * - Statistics display
 * - Quick navigation to main features
 */
export default function Home() {
  return (
    <Container className="py-4">
      {/* Welcome Section */}
      <Row className="mb-4">
        <Col>
          <div className="text-center">
            <h1 className="display-4 text-primary mb-3">
              🚀 Welcome to Task Manager
            </h1>
            <p className="lead">
              Organize your tasks efficiently and stay productive with our comprehensive task management system.
            </p>
          </div>
        </Col>
      </Row>

      {/* Statistics Section */}
      <Row className="mb-4">
        <Col>
          <Stats />
        </Col>
      </Row>

      {/* Quick Actions Section */}
      <Row className="mb-4">
        <Col md={6} className="mb-3">
          <Card className="h-100 shadow-sm">
            <Card.Body className="text-center">
              <Card.Title className="text-primary">
                📋 Manage Your Tasks
              </Card.Title>
              <Card.Text>
                Create, edit, and organize your tasks with our intuitive interface.
                Track progress and stay on top of your goals.
              </Card.Text>
              <Button as={Link} to="/tasks" variant="primary" size="lg">
                Go to Tasks
              </Button>
            </Card.Body>
          </Card>
        </Col>
        
        <Col md={6} className="mb-3">
          <Card className="h-100 shadow-sm">
            <Card.Body className="text-center">
              <Card.Title className="text-success">
                📊 View Analytics
              </Card.Title>
              <Card.Text>
                Monitor your productivity with detailed statistics and insights
                about your task completion patterns.
              </Card.Text>
              <Button as={Link} to="/tasks" variant="success" size="lg">
                View Statistics
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Features Section */}
      <Row>
        <Col>
          <Alert variant="info" className="text-center">
            <Alert.Heading>✨ Key Features</Alert.Heading>
            <hr />
            <div className="row">
              <div className="col-md-3">
                <strong>✅ CRUD Operations</strong><br />
                Create, Read, Update, Delete tasks
              </div>
              <div className="col-md-3">
                <strong>🎨 Modern UI</strong><br />
                Beautiful Bootstrap interface
              </div>
              <div className="col-md-3">
                <strong>📱 Responsive</strong><br />
                Works on all devices
              </div>
              <div className="col-md-3">
                <strong>🔗 API Integration</strong><br />
                Real-time data management
              </div>
            </div>
          </Alert>
        </Col>
      </Row>
    </Container>
  );
}


