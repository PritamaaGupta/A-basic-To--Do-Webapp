const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const pendingTasks = document.getElementById('pendingTasks');
const completedTasks = document.getElementById('completedTasks');

// Function to create a task element
function createTaskElement(taskText) {
  const li = document.createElement('li');
  li.textContent = taskText;

  // Buttons: Complete, Edit, Delete
  const completeBtn = document.createElement('button');
  completeBtn.textContent = 'Complete';
  completeBtn.className = 'task-btn complete-btn';
  completeBtn.onclick = () => markComplete(li);

  const editBtn = document.createElement('button');
  editBtn.textContent = 'Edit';
  editBtn.className = 'task-btn edit-btn';
  editBtn.onclick = () => editTask(li);

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.className = 'task-btn delete-btn';
  deleteBtn.onclick = () => li.remove();

  li.appendChild(completeBtn);
  li.appendChild(editBtn);
  li.appendChild(deleteBtn);

  return li;
}

// Add task
addTaskBtn.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  if (taskText === '') {
    alert('Please enter a task!');
    return;
  }
  const taskElement = createTaskElement(taskText);
  pendingTasks.appendChild(taskElement);
  taskInput.value = '';
});

// Mark task as complete
function markComplete(task) {
  task.classList.add('completed');
  task.querySelector('.complete-btn').remove();
  completedTasks.appendChild(task);
}

// Edit task
function editTask(task) {
  const newText = prompt('Edit your task:', task.firstChild.textContent);
  if (newText !== null && newText.trim() !== '') {
    task.firstChild.textContent = newText;
  }
}
