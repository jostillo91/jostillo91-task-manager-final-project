import React, { useState, useEffect } from 'react';
import { Modal, Form, Button, Row, Col } from 'react-bootstrap';

/**
 * TaskForm Component
 * 
 * This component provides a modal form for creating and editing tasks.
 * It includes form validation and handles both create and update operations.
 * 
 * Features:
 * - Bootstrap modal form
 * - Form validation
 * - Create and edit modes
 * - Date picker for due dates
 * - Priority and status selection
 * - Responsive design
 */
export default function TaskForm({ task, onSubmit, onCancel }) {
  // Form state
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    status: 'pending',
    priority: 'medium',
    dueDate: ''
  });

  // Form validation state
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialize form data when editing
  useEffect(() => {
    if (task) {
      setFormData({
        title: task.title || '',
        description: task.description || '',
        status: task.status || 'pending',
        priority: task.priority || 'medium',
        dueDate: task.dueDate || ''
      });
    }
  }, [task]);

  /**
   * Handle form input changes
   */
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  /**
   * Validate form data
   */
  const validateForm = () => {
    const newErrors = {};

    // Title validation
    if (!formData.title.trim()) {
      newErrors.title = 'Title is required';
    } else if (formData.title.trim().length < 3) {
      newErrors.title = 'Title must be at least 3 characters long';
    }

    // Description validation
    if (!formData.description.trim()) {
      newErrors.description = 'Description is required';
    } else if (formData.description.trim().length < 10) {
      newErrors.description = 'Description must be at least 10 characters long';
    }

    // Due date validation
    if (formData.dueDate) {
      const dueDate = new Date(formData.dueDate);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      
      if (dueDate < today) {
        newErrors.dueDate = 'Due date cannot be in the past';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  /**
   * Handle form submission
   */
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Prepare data for submission
      const taskData = {
        ...formData,
        title: formData.title.trim(),
        description: formData.description.trim()
      };

      await onSubmit(taskData);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Modal show={true} onHide={onCancel} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>
          {task ? '✏️ Edit Task' : '➕ Create New Task'}
        </Modal.Title>
      </Modal.Header>
      
      <Form onSubmit={handleSubmit}>
        <Modal.Body>
          <Row>
            {/* Task Title */}
            <Col md={12} className="mb-3">
              <Form.Group>
                <Form.Label>
                  <strong>Task Title *</strong>
                </Form.Label>
                <Form.Control
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  placeholder="Enter task title..."
                  isInvalid={!!errors.title}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  {errors.title}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>

            {/* Task Description */}
            <Col md={12} className="mb-3">
              <Form.Group>
                <Form.Label>
                  <strong>Description *</strong>
                </Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Describe the task details..."
                  isInvalid={!!errors.description}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  {errors.description}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>

            {/* Priority Selection */}
            <Col md={6} className="mb-3">
              <Form.Group>
                <Form.Label>
                  <strong>Priority</strong>
                </Form.Label>
                <Form.Select
                  name="priority"
                  value={formData.priority}
                  onChange={handleInputChange}
                >
                  <option value="low">🟢 Low</option>
                  <option value="medium">🟡 Medium</option>
                  <option value="high">🔴 High</option>
                </Form.Select>
              </Form.Group>
            </Col>

            {/* Status Selection */}
            <Col md={6} className="mb-3">
              <Form.Group>
                <Form.Label>
                  <strong>Status</strong>
                </Form.Label>
                <Form.Select
                  name="status"
                  value={formData.status}
                  onChange={handleInputChange}
                >
                  <option value="pending">⏳ Pending</option>
                  <option value="completed">✅ Completed</option>
                </Form.Select>
              </Form.Group>
            </Col>

            {/* Due Date */}
            <Col md={12} className="mb-3">
              <Form.Group>
                <Form.Label>
                  <strong>Due Date</strong>
                </Form.Label>
                <Form.Control
                  type="date"
                  name="dueDate"
                  value={formData.dueDate}
                  onChange={handleInputChange}
                  isInvalid={!!errors.dueDate}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.dueDate}
                </Form.Control.Feedback>
                <Form.Text className="text-muted">
                  Optional: Set a due date for this task
                </Form.Text>
              </Form.Group>
            </Col>
          </Row>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={onCancel} disabled={isSubmitting}>
            Cancel
          </Button>
          <Button 
            variant="primary" 
            type="submit" 
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                {task ? 'Updating...' : 'Creating...'}
              </>
            ) : (
              task ? 'Update Task' : 'Create Task'
            )}
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}
