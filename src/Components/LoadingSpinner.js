import React from 'react';
import { Spinner, Row, Col } from 'react-bootstrap';

/**
 * LoadingSpinner Component
 * 
 * This component displays a loading spinner while data is being fetched.
 * It provides visual feedback to users during API operations.
 * 
 * Features:
 * - Bootstrap spinner component
 * - Centered layout
 * - Customizable size and color
 * - Accessibility features
 */
export default function LoadingSpinner({ size = 'lg', variant = 'primary', message = 'Loading...' }) {
  return (
    <Row className="justify-content-center">
      <Col xs="auto">
        <div className="text-center">
          <Spinner 
            animation="border" 
            variant={variant} 
            size={size}
            role="status"
            className="mb-3"
          >
            <span className="visually-hidden">{message}</span>
          </Spinner>
          <p className="text-muted">{message}</p>
        </div>
      </Col>
    </Row>
  );
}
