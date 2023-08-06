class Task {
    constructor(name) {
        this.name = name;
        this.done = false;
    }
}

class Pomodoro {
    constructor(name, duration) {
        this.name = name;
        this.duration = duration;
        this.done = false;
        this.tasks = [];
    }
}

var tasks = [];
var pomodoros = [];

//TASK FUNCTIONS

const addTask = (name) => {
    tasks.push(new Task(name));
}

const removeTask = (name) => {
    const index = tasks.findIndex(task => task.name === name);
    tasks.splice(index, 1);
}

const completeTask = (name) => {
    const task = tasks.find(task => task.name === name);
    task.done = true;
}

const markTaskAsUncompleted = (name) => {
    //TODO
}

//POMODORO FUNCTIONS

const createPomodoro = (name, duration) => {
    pomodoros.push(new Pomodoro(name, duration));
}

const removePomodoro = (name) => {
    const index = pomodoros.findIndex(pomodoro => pomodoro.name === name);
    pomodoros.splice(index, 1);
}

const changePomodoroDuration = (pomodoroName, newDuration) => {
    const pomodoro = pomodoros.find(p => p.name === pomodoroName);
    if (pomodoro) {
        pomodoro.duration = newDuration;
    }
}

const addTaskToPomodoro = (pomodoroName, taskName) => {
    //TODO
}


module.exports = {
    tasks,
    pomodoros,
    addTask,
    completeTask,
    addTaskToPomodoro,
    markTaskAsUncompleted,
    createPomodoro
}