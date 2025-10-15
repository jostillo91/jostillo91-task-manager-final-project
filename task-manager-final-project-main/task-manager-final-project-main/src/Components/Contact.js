import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';

/**
 * Contact Component
 * 
 * This component provides contact information and a contact form.
 * It demonstrates form handling and validation in React.
 * 
 * Features:
 * - Contact information display
 * - Contact form with validation
 * - Bootstrap styling
 * - Form state management
 * - Success/error feedback
 */
export default function Contact() {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

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
    if (formErrors[name]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  /**
   * Validate form data
   */
  const validateForm = () => {
    const errors = {};

    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }

    if (!formData.subject.trim()) {
      errors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters long';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
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
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Container className="py-4">
      {/* Header */}
      <Row className="mb-4">
        <Col>
          <div className="text-center">
            <h1 className="display-4 text-primary mb-3">
              📞 Contact Us
            </h1>
            <p className="lead">
              Get in touch with us for questions, feedback, or support.
            </p>
          </div>
        </Col>
      </Row>

      <Row>
        {/* Contact Information */}
        <Col md={4} className="mb-4">
          <Card className="h-100 shadow-sm">
            <Card.Header className="bg-primary text-white">
              <Card.Title className="mb-0">📋 Contact Information</Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="mb-3">
                <h6><strong>📧 Email</strong></h6>
                <p className="mb-0">support@taskmanager.com</p>
              </div>
              
              <div className="mb-3">
                <h6><strong>📱 Phone</strong></h6>
                <p className="mb-0">+1 (555) 123-4567</p>
              </div>
              
              <div className="mb-3">
                <h6><strong>🏢 Address</strong></h6>
                <p className="mb-0">
                  123 Tech Street<br />
                  Innovation City, IC 12345
                </p>
              </div>
              
              <div className="mb-3">
                <h6><strong>💼 LinkedIn</strong></h6>
                <p className="mb-0">linkedin.com/company/taskmanager</p>
              </div>
              
              <div>
                <h6><strong>🕒 Business Hours</strong></h6>
                <p className="mb-0">
                  Monday - Friday: 9:00 AM - 6:00 PM<br />
                  Saturday: 10:00 AM - 4:00 PM<br />
                  Sunday: Closed
                </p>
              </div>
            </Card.Body>
          </Card>
        </Col>

        {/* Contact Form */}
        <Col md={8}>
          <Card className="shadow-sm">
            <Card.Header className="bg-success text-white">
              <Card.Title className="mb-0">✉️ Send us a Message</Card.Title>
            </Card.Header>
            <Card.Body>
              {/* Success/Error Messages */}
              {submitStatus === 'success' && (
                <Alert variant="success" dismissible onClose={() => setSubmitStatus(null)}>
                  <Alert.Heading>Message Sent!</Alert.Heading>
                  Thank you for your message. We'll get back to you soon!
                </Alert>
              )}
              
              {submitStatus === 'error' && (
                <Alert variant="danger" dismissible onClose={() => setSubmitStatus(null)}>
                  <Alert.Heading>Error!</Alert.Heading>
                  There was a problem sending your message. Please try again.
                </Alert>
              )}

              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group>
                      <Form.Label><strong>Name *</strong></Form.Label>
                      <Form.Control
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        isInvalid={!!formErrors.name}
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        {formErrors.name}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  
                  <Col md={6} className="mb-3">
                    <Form.Group>
                      <Form.Label><strong>Email *</strong></Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        isInvalid={!!formErrors.email}
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        {formErrors.email}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-3">
                  <Form.Label><strong>Subject *</strong></Form.Label>
                  <Form.Control
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What's this about?"
                    isInvalid={!!formErrors.subject}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    {formErrors.subject}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label><strong>Message *</strong></Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us what you're thinking..."
                    isInvalid={!!formErrors.message}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    {formErrors.message}
                  </Form.Control.Feedback>
                </Form.Group>

                <Button 
                  variant="primary" 
                  type="submit" 
                  size="lg"
                  disabled={isSubmitting}
                  className="w-100"
                >
                  {isSubmitting ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Footer */}
      <Row className="mt-4">
        <Col>
          <Card className="text-center bg-light">
            <Card.Body>
              <Card.Text className="text-muted">
                <strong>Task Manager Support Team</strong><br />
                We're here to help you stay organized and productive!<br />
                <small>Response time: Usually within 24 hours</small>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
