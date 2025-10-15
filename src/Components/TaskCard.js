import React from 'react';
import { Card, Button, Badge, ButtonGroup } from 'react-bootstrap';

/**
 * TaskCard Component
 * 
 * This component displays an individual task in a card format.
 * It shows task details and provides action buttons for editing, deleting, and toggling status.
 * 
 * Features:
 * - Bootstrap card styling
 * - Priority and status badges
 * - Action buttons for CRUD operations
 * - Responsive design
 * - Color-coded status indicators
 */
export default function TaskCard({ task, onEdit, onDelete, onToggleStatus }) {
  // Get priority color for badge
  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'danger';
      case 'medium': return 'warning';
      case 'low': return 'success';
      default: return 'secondary';
    }
  };

  // Get status color for badge
  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'success';
      case 'pending': return 'warning';
      default: return 'secondary';
    }
  };

  // Format date for display
  const formatDate = (dateString) => {
    if (!dateString) return 'No date set';
    const date = new Date(dateString);
    return date.toLocaleDateString();
  };

  return (
    <Card className={`h-100 shadow-sm ${task.status === 'completed' ? 'border-success' : 'border-primary'}`}>
      {/* Card Header with Title and Badges */}
      <Card.Header className="d-flex justify-content-between align-items-start">
        <Card.Title className="mb-0 text-truncate" style={{ maxWidth: '70%' }}>
          {task.title}
        </Card.Title>
        <div>
          <Badge bg={getPriorityColor(task.priority)} className="me-1">
            {task.priority}
          </Badge>
          <Badge bg={getStatusColor(task.status)}>
            {task.status}
          </Badge>
        </div>
      </Card.Header>

      {/* Card Body with Description */}
      <Card.Body className="d-flex flex-column">
        <Card.Text className="flex-grow-1">
          {task.description || 'No description provided'}
        </Card.Text>
        
        {/* Due Date */}
        <div className="mb-2">
          <small className="text-muted">
            <strong>Due:</strong> {formatDate(task.dueDate)}
          </small>
        </div>

        {/* Created Date */}
        <div className="mb-3">
          <small className="text-muted">
            <strong>Created:</strong> {formatDate(task.createdAt)}
          </small>
        </div>

        {/* Action Buttons */}
        <ButtonGroup className="w-100">
          {/* Toggle Status Button */}
          <Button
            variant={task.status === 'completed' ? 'outline-warning' : 'outline-success'}
            size="sm"
            onClick={onToggleStatus}
            className="flex-fill"
          >
            {task.status === 'completed' ? '↩️ Reopen' : '✅ Complete'}
          </Button>
          
          {/* Edit Button */}
          <Button
            variant="outline-primary"
            size="sm"
            onClick={onEdit}
            className="flex-fill"
          >
            ✏️ Edit
          </Button>
          
          {/* Delete Button */}
          <Button
            variant="outline-danger"
            size="sm"
            onClick={onDelete}
            className="flex-fill"
          >
            🗑️ Delete
          </Button>
        </ButtonGroup>
      </Card.Body>
    </Card>
  );
}
