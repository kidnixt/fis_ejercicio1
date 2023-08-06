const todoApp = require('../src/todoApp'); // Ajusta la ruta según tu estructura de carpetas

test('marks a task as incomplete', () => {
  const mockTask = {
    name: 'Mock Task',
  }

  todoApp.addTask(mockTask.name);
  todoApp.completeTask(mockTask.name);
  todoApp.markTaskAsUncompleted(mockTask.name);

  const task = todoApp.tasks.find(task => task.name === mockTask.name);

  expect(task.done).toBe(false);
});