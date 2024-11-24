import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { useAppSelector } from '../../store/hooks';

const TaskDonutChart: React.FC = () => {
  const tasks = useAppSelector((state) => state.tasks) as Array<{ completed: boolean; dueDate: string }>;
  const completedTasks = tasks.filter((task) => task.completed && task.dueDate === new Date().toISOString().split('T')[0]);
  const uncompletedTasks = tasks.filter((task) => !task.completed && task.dueDate === new Date().toISOString().split('T')[0]);

  const data = [
    { name: 'Uncompleted', value: uncompletedTasks.length },
    { name: 'Completed', value: completedTasks.length },
  ];

  const COLORS = document.documentElement.classList.contains('dark')
    ? ['#3F9142', '#A0EDA3']
    : ['#3F9142', '#142E15'];

  return (
    <ResponsiveContainer width="100%" height={200}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default TaskDonutChart;
