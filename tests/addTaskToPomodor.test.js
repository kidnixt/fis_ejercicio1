const addTaskToPomodoro = require('../src/todoApp.js'); // Ajusta la ruta según tu estructura de carpetas

test('adds a task to a pomodoro', () => {
  const mockPomodoro = {
    name: 'Mock Pomodoro',
    tasks: [],
  };
  const mockTask = {
    name: 'Mock Task',
    done: false,
  };

  addTaskToPomodoro(mockPomodoro, mockTask);

  expect(mockPomodoro.tasks).toContain(mockTask);
});
