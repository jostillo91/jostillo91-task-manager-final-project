const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001';
const TASKS_ENDPOINT = `${API_BASE_URL}/tasks`;

const handleResponse = async (response) => {
  if (!response.ok) {
    const message = await response.text();
    throw new Error(message || 'Request failed');
  }
  return response.json();
};

export const fetchTasks = async () => {
  const response = await fetch(TASKS_ENDPOINT);
  return handleResponse(response);
};

export const createTask = async (taskData) => {
  const response = await fetch(TASKS_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(taskData),
  });
  return handleResponse(response);
};

export const updateTask = async (taskId, updates) => {
  const response = await fetch(`${TASKS_ENDPOINT}/${taskId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updates),
  });
  return handleResponse(response);
};

export const deleteTask = async (taskId) => {
  const response = await fetch(`${TASKS_ENDPOINT}/${taskId}`, {
    method: 'DELETE',
  });

  if (!response.ok) {
    const message = await response.text();
    throw new Error(message || 'Failed to delete task');
  }

  return true;
};

export const getTasksEndpoint = () => TASKS_ENDPOINT;
