import React from 'react';
import { Form, InputGroup, Row, Col } from 'react-bootstrap';

/**
 * FilterBar Component
 * 
 * This component provides filtering and searching functionality for tasks.
 * It allows users to filter by status/priority and search by text content.
 * 
 * Features:
 * - Status and priority filtering
 * - Text search functionality
 * - Bootstrap form components
 * - Responsive design
 * - Real-time filtering
 */
export default function FilterBar({ filter, setFilter, searchTerm, setSearchTerm }) {
  return (
    <Row className="g-3">
      {/* Search Input */}
      <Col md={6}>
        <InputGroup>
          <InputGroup.Text>🔍</InputGroup.Text>
          <Form.Control
            type="text"
            placeholder="Search tasks..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </InputGroup>
      </Col>

      {/* Filter Dropdown */}
      <Col md={6}>
        <Form.Select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">📋 All Tasks</option>
          <option value="pending">⏳ Pending</option>
          <option value="completed">✅ Completed</option>
          <option value="high">🔴 High Priority</option>
          <option value="medium">🟡 Medium Priority</option>
          <option value="low">🟢 Low Priority</option>
        </Form.Select>
      </Col>
    </Row>
  );
}
