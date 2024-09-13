// Function to add a new task
function addTask() {
    const taskInput = document.getElementById('new-task-input');
    const taskList = document.getElementById('task-list');

    if (taskInput.value === '') {
        alert('Please enter a task.');
        return;
    }

    // Create a new list item
    const listItem = document.createElement('li');
    listItem.classList.add('task-item');
    
    const taskInputField = document.createElement('input');
    taskInputField.type = 'text';
    taskInputField.value = taskInput.value;
    taskInputField.setAttribute('readonly', 'readonly');
    
    listItem.appendChild(taskInputField);
    
    // Create action buttons (Edit, Delete)
    const actionsDiv = document.createElement('div');
    actionsDiv.classList.add('task-actions');
    
    const editBtn = document.createElement('button');
    editBtn.innerText = 'Edit';
    editBtn.addEventListener('click', () => {
        if (editBtn.innerText.toLowerCase() === 'edit') {
            taskInputField.removeAttribute('readonly');
            taskInputField.focus();
            editBtn.innerText = 'Save';
        } else {
            taskInputField.setAttribute('readonly', 'readonly');
            editBtn.innerText = 'Edit';
            showModal('Task updated successfully!');
        }
    });
    
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-btn');
    deleteBtn.innerText = 'Delete';
    deleteBtn.addEventListener('click', () => {
        taskList.removeChild(listItem);
        showModal('Task deleted successfully!');
    });
    
    actionsDiv.appendChild(editBtn);
    actionsDiv.appendChild(deleteBtn);
    listItem.appendChild(actionsDiv);

    taskList.appendChild(listItem);

    // Clear the input field
    taskInput.value = '';
    
    showModal('Task added successfully!');
}

// Function to show the success modal
function showModal(message) {
    const modal = document.getElementById('success-modal');
    const modalMessage = document.getElementById('modal-message');
    
    modalMessage.textContent = message;
    modal.style.display = 'block';

    setTimeout(() => {
        modal.style.display = 'none';
    }, 2000);
}

// Function to close the modal manually
function closeModal() {
    const modal = document.getElementById('success-modal');
    modal.style.display = 'none';
}
