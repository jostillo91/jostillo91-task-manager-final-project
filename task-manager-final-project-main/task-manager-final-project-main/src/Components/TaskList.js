import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Alert } from 'react-bootstrap';
import TaskCard from './TaskCard.js';
import TaskForm from './TaskForm.js';
import FilterBar from './FilterBar.js';
import LoadingSpinner from './LoadingSpinner.js';
import {
  fetchTasks as fetchTasksFromApi,
  createTask as createTaskOnServer,
  updateTask as updateTaskOnServer,
  deleteTask as deleteTaskOnServer,
} from '../api/tasksApi.js';

/**
 * TaskList Component - Main Task Management Interface
 * 
 * This component provides the main task management functionality including:
 * - Display all tasks in a grid layout
 * - Create new tasks
 * - Edit existing tasks
 * - Delete tasks
 * - Filter and search tasks
 * 
 * Features:
 * - Full CRUD operations via API
 * - Bootstrap styling with cards
 * - Real-time updates
 * - Error handling
 * - Loading states
 */
export default function TaskList() {
  // State management for tasks and UI
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [editingTask, setEditingTask] = useState(null);
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  /**
   * Fetch all tasks from API
   * Demonstrates READ operation (GET)
   */
  const fetchTasks = async () => {
    try {
      setLoading(true);
      setError(null);
      const apiTasks = await fetchTasksFromApi();
      setTasks(apiTasks);
    } catch (err) {
      setError('Failed to fetch tasks. Please try again.');
      console.error('Error fetching tasks:', err);
    } finally {
      setLoading(false);
    }
  };

  /**
   * Create a new task
   * Demonstrates CREATE operation (POST)
   */
  const createTask = async (taskData) => {
    try {
      setError(null);
      const payload = {
        ...taskData,
        createdAt: new Date().toISOString(),
      };
      const newTask = await createTaskOnServer(payload);
      setTasks(prevTasks => [newTask, ...prevTasks]);
      setShowForm(false);

      // Show success message
      alert('Task created successfully!');
    } catch (err) {
      setError('Failed to create task. Please try again.');
      console.error('Error creating task:', err);
    }
  };

  /**
   * Update an existing task
   * Demonstrates UPDATE operation (PUT)
   */
  const updateTask = async (id, updatedData) => {
    try {
      setError(null);
      const updatedTask = await updateTaskOnServer(id, updatedData);
      setTasks(prevTasks =>
        prevTasks.map(task =>
          task.id === id ? updatedTask : task
        )
      );

      setEditingTask(null);
      setShowForm(false);
      alert('Task updated successfully!');
    } catch (err) {
      setError('Failed to update task. Please try again.');
      console.error('Error updating task:', err);
    }
  };

  /**
   * Delete a task
   * Demonstrates DELETE operation (DELETE)
   */
  const deleteTask = async (id) => {
    try {
      setError(null);

      if (window.confirm('Are you sure you want to delete this task?')) {
        await deleteTaskOnServer(id);
        setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
        alert('Task deleted successfully!');
      }
    } catch (err) {
      setError('Failed to delete task. Please try again.');
      console.error('Error deleting task:', err);
    }
  };

  /**
   * Toggle task status between completed and pending
   */
  const toggleTaskStatus = (id) => {
    const task = tasks.find(t => t.id === id);
    if (task) {
      updateTask(id, { status: task.status === 'completed' ? 'pending' : 'completed' });
    }
  };

  // Load tasks on component mount
  useEffect(() => {
    fetchTasks();
  }, []);

  // Filter tasks based on current filter and search term
  const filteredTasks = tasks.filter(task => {
    const matchesFilter = filter === 'all' || task.status === filter || task.priority === filter;
    const matchesSearch = task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         task.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <Container className="py-4">
      {/* Header Section */}
      <Row className="mb-4">
        <Col>
          <div className="d-flex justify-content-between align-items-center">
            <h1 className="text-primary">📋 Task Management</h1>
            <Button 
              variant="primary" 
              size="lg"
              onClick={() => setShowForm(true)}
            >
              ➕ Add New Task
            </Button>
          </div>
        </Col>
      </Row>

      {/* Error Display */}
      {error && (
        <Row className="mb-3">
          <Col>
            <Alert variant="danger" dismissible onClose={() => setError(null)}>
              {error}
            </Alert>
          </Col>
        </Row>
      )}

      {/* Filter and Search Bar */}
      <Row className="mb-4">
        <Col>
          <FilterBar 
            filter={filter}
            setFilter={setFilter}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />
        </Col>
      </Row>

      {/* Task Form Modal */}
      {showForm && (
        <TaskForm
          task={editingTask}
          onSubmit={editingTask ? (data) => updateTask(editingTask.id, data) : createTask}
          onCancel={() => {
            setShowForm(false);
            setEditingTask(null);
          }}
        />
      )}

      {/* Tasks Grid */}
      {loading ? (
        <LoadingSpinner />
      ) : (
        <Row>
          {filteredTasks.length === 0 ? (
            <Col>
              <Alert variant="info" className="text-center">
                <Alert.Heading>No tasks found</Alert.Heading>
                <p>Try adjusting your filters or create a new task to get started!</p>
              </Alert>
            </Col>
          ) : (
            filteredTasks.map(task => (
              <Col key={task.id} md={6} lg={4} className="mb-3">
                <TaskCard
                  task={task}
                  onEdit={() => {
                    setEditingTask(task);
                    setShowForm(true);
                  }}
                  onDelete={() => deleteTask(task.id)}
                  onToggleStatus={() => toggleTaskStatus(task.id)}
                />
              </Col>
            ))
          )}
        </Row>
      )}

      {/* Tasks Summary */}
      <Row className="mt-4">
        <Col>
          <Alert variant="light" className="text-center">
            <strong>Showing {filteredTasks.length} of {tasks.length} tasks</strong>
          </Alert>
        </Col>
      </Row>
    </Container>
  );
}
