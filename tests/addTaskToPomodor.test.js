const todoApp = require('../src/todoApp.js'); // Ajusta la ruta según tu estructura de carpetas

test('adds a task to a pomodoro', () => {
  const mockPomodoro = {
    name: 'Mock Pomodoro',
    tasks: [],
  };
  const mockTask = {
    name: 'Mock Task',
    done: false,
  };

  const mockTask2 = {
    name: 'Mock Task 2',
    done: false,
  };

  todoApp.createPomodoro(mockPomodoro.name, 25);
  todoApp.addTask(mockTask.name);

  todoApp.addTaskToPomodoro(mockPomodoro.name, mockTask.name);

  const pomodoro = todoApp.pomodoros.find(p => p.name === mockPomodoro.name);



  expect(pomodoro.tasks).toContainEqual(mockTask);
  expect(pomodoro.tasks).not.toContainEqual(mockTask2);
});
