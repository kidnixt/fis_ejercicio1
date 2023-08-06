const markTaskAsUncompleted = require('../src/todoApp'); // Ajusta la ruta según tu estructura de carpetas

test('marks a task as incomplete', () => {
  const mockTask = {
    name: 'Mock Task',
    done: true,
  };

  markTaskAsUncompleted(mockTask);

  expect(mockTask.done).toBe(false);
});
