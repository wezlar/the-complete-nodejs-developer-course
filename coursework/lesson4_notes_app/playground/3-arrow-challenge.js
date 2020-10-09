const tasks = {
  getTasksToDo() {
    return this.tasks.filter((item) => !item.completed);
  },
  tasks: [
    {
      text: 'Grocery shopping',
      completed: true,
    },
    {
      text: 'Clean yard',
      completed: false,
    },
    {
      text: 'Film course',
      completed: false,
    },
  ],
};

console.log(tasks.getTasksToDo());
