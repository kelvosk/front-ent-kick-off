export const BASE_URL = 'http://localhost:3000'


export async function listTodos() {
  const response = await fetch(`${BASE_URL}/todo`);
  return await response.json();
}

export async function listAllSorted(status) {
  const response = await fetch(`${BASE_URL}/todo?status=${status}`);
  return await response.json();
}

export async function saveTodo(todo) {
  const response = await fetch(`${BASE_URL}/todo`, {
    method: 'POST',
    body: JSON.stringify(todo),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return await response.json();
}

export async function updateTodo(todo) {
  const response = await fetch(`${BASE_URL}/todo/${todo.id}`, {
    method: 'PUT',
    body: JSON.stringify(todo),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return await response.json();
}


export async function deleteTodo(id) {
  const response = await fetch(`${BASE_URL}/todo/${id}`, { method: 'DELETE' })
  return await response.json();
}