import React, { useState } from 'react';
import { useTheme } from '../../../contexts/ThemeContext';
import { Plus, X, Calendar, Clock, Paperclip, Cross, Users, Coins, Heart, Star } from 'lucide-react';
import toast from 'react-hot-toast';

interface Task {
  id: string;
  title: string;
  pillars: string[];
  priority: 'low' | 'medium' | 'high';
  deadline: string;
  completed: boolean;
  notes?: string;
  attachments?: string[];
}

const TaskManager = () => {
  const { isDarkMode } = useTheme();
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isAddingTask, setIsAddingTask] = useState(false);
  const [newTask, setNewTask] = useState<Partial<Task>>({
    pillars: [],
    priority: 'medium'
  });

  const pillars = [
    { name: 'Faith', icon: <Cross className="h-5 w-5" /> },
    { name: 'Family', icon: <Users className="h-5 w-5" /> },
    { name: 'Finance', icon: <Coins className="h-5 w-5" /> },
    { name: 'Fitness', icon: <Heart className="h-5 w-5" /> },
    { name: 'Freedom', icon: <Star className="h-5 w-5" /> }
  ];

  const handleAddTask = () => {
    if (!newTask.title) {
      toast.error('Please enter a task title');
      return;
    }

    if (newTask.pillars?.length === 0) {
      toast.error('Please select at least one pillar');
      return;
    }

    const task: Task = {
      id: Date.now().toString(),
      title: newTask.title!,
      pillars: newTask.pillars!,
      priority: newTask.priority!,
      deadline: newTask.deadline || new Date().toISOString().split('T')[0],
      completed: false,
      notes: newTask.notes,
      attachments: []
    };

    setTasks([...tasks, task]);
    setNewTask({ pillars: [], priority: 'medium' });
    setIsAddingTask(false);
    toast.success('Task added successfully');
  };

  const toggleTaskCompletion = (taskId: string) => {
    setTasks(tasks.map(task => {
      if (task.id === taskId) {
        const newStatus = !task.completed;
        toast(newStatus ? 'Task completed! 🎉' : 'Task uncompleted');
        return { ...task, completed: newStatus };
      }
      return task;
    }));
  };

  const deleteTask = (taskId: string) => {
    setTasks(tasks.filter(task => task.id !== taskId));
    toast.success('Task deleted');
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-red-500 bg-red-500/10';
      case 'medium': return 'text-yellow-500 bg-yellow-500/10';
      case 'low': return 'text-green-500 bg-green-500/10';
      default: return 'text-gray-500 bg-gray-500/10';
    }
  };

  return (
    <div className={`p-6 rounded-2xl ${
      isDarkMode ? 'bg-gray-800' : 'bg-white'
    } border border-gray-200 dark:border-gray-700`}>
      <div className="flex items-center justify-between mb-6">
        <h2 className={`text-lg font-bold ${
          isDarkMode ? 'text-white' : 'text-gray-900'
        }`}>
          Task Manager
        </h2>
        <button
          onClick={() => setIsAddingTask(true)}
          className="flex items-center space-x-2 px-4 py-2 bg-gold hover:bg-gold-light text-royal-dark rounded-lg transition-colors"
        >
          <Plus className="h-4 w-4" />
          <span>Add Task</span>
        </button>
      </div>

      {isAddingTask && (
        <div className="mb-6 p-4 rounded-xl bg-gray-700/50">
          <div className="space-y-4">
            <input
              type="text"
              value={newTask.title || ''}
              onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
              placeholder="Task title"
              className={`w-full px-4 py-2 rounded-lg ${
                isDarkMode
                  ? 'bg-gray-700 text-white placeholder-gray-400 border-gray-600'
                  : 'bg-gray-100 text-gray-900 placeholder-gray-500 border-gray-200'
              } border focus:outline-none focus:ring-2 focus:ring-gold`}
            />

            <div className="flex flex-wrap gap-2">
              {pillars.map((pillar) => (
                <button
                  key={pillar.name}
                  onClick={() => {
                    const newPillars = newTask.pillars?.includes(pillar.name)
                      ? newTask.pillars.filter(p => p !== pillar.name)
                      : [...(newTask.pillars || []), pillar.name];
                    setNewTask({ ...newTask, pillars: newPillars });
                  }}
                  className={`flex items-center space-x-2 px-3 py-1.5 rounded-lg transition-colors ${
                    newTask.pillars?.includes(pillar.name)
                      ? 'bg-gold text-royal-dark'
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                >
                  {pillar.icon}
                  <span>{pillar.name}</span>
                </button>
              ))}
            </div>

            <div className="flex space-x-4">
              <select
                value={newTask.priority}
                onChange={(e) => setNewTask({ ...newTask, priority: e.target.value as Task['priority'] })}
                className={`px-4 py-2 rounded-lg ${
                  isDarkMode
                    ? 'bg-gray-700 text-white border-gray-600'
                    : 'bg-gray-100 text-gray-900 border-gray-200'
                } border focus:outline-none focus:ring-2 focus:ring-gold`}
              >
                <option value="low">Low Priority</option>
                <option value="medium">Medium Priority</option>
                <option value="high">High Priority</option>
              </select>

              <input
                type="date"
                value={newTask.deadline || ''}
                onChange={(e) => setNewTask({ ...newTask, deadline: e.target.value })}
                className={`px-4 py-2 rounded-lg ${
                  isDarkMode
                    ? 'bg-gray-700 text-white border-gray-600'
                    : 'bg-gray-100 text-gray-900 border-gray-200'
                } border focus:outline-none focus:ring-2 focus:ring-gold`}
              />
            </div>

            <textarea
              value={newTask.notes || ''}
              onChange={(e) => setNewTask({ ...newTask, notes: e.target.value })}
              placeholder="Add notes..."
              className={`w-full px-4 py-2 rounded-lg ${
                isDarkMode
                  ? 'bg-gray-700 text-white placeholder-gray-400 border-gray-600'
                  : 'bg-gray-100 text-gray-900 placeholder-gray-500 border-gray-200'
              } border focus:outline-none focus:ring-2 focus:ring-gold`}
              rows={3}
            />

            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setIsAddingTask(false)}
                className="px-4 py-2 text-gray-400 hover:text-white transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleAddTask}
                className="px-4 py-2 bg-gold hover:bg-gold-light text-royal-dark rounded-lg transition-colors"
              >
                Add Task
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="space-y-4">
        {tasks.map((task) => (
          <div
            key={task.id}
            className={`p-4 rounded-xl ${
              isDarkMode ? 'bg-gray-700' : 'bg-gray-50'
            } hover:bg-gold/10 transition-colors group`}
          >
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-4">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTaskCompletion(task.id)}
                  className="mt-1 h-4 w-4 rounded border-gray-300 text-gold focus:ring-gold"
                />
                <div>
                  <h3 className={`font-medium ${
                    task.completed
                      ? 'line-through text-gray-400'
                      : isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {task.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {task.pillars.map((pillar) => (
                      <span
                        key={pillar}
                        className="px-2 py-1 text-xs rounded-full bg-gold/20 text-gold"
                      >
                        {pillar}
                      </span>
                    ))}
                    <span className={`px-2 py-1 text-xs rounded-full ${getPriorityColor(task.priority)}`}>
                      {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}
                    </span>
                  </div>
                  {task.notes && (
                    <p className={`mt-2 text-sm ${
                      isDarkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      {task.notes}
                    </p>
                  )}
                  <div className="flex items-center space-x-4 mt-2 text-sm text-gray-400">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(task.deadline).toLocaleDateString()}
                    </div>
                    {task.attachments && task.attachments.length > 0 && (
                      <div className="flex items-center">
                        <Paperclip className="h-4 w-4 mr-1" />
                        {task.attachments.length}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <button
                onClick={() => deleteTask(task.id)}
                className="text-gray-400 hover:text-red-500 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskManager;