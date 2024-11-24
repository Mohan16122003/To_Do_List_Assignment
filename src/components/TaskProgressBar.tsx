import React from 'react';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useAppSelector } from '../store/hooks';
import useCompletedTasks from './hooks/useCompletedTasks';
import useTodayTasks from './hooks/useTodayTasks';

const TaskProgressBar: React.FC = () => {
  const todaysTasks = useTodayTasks();
  const tasks = useAppSelector((state) => state.tasks.tasks);

  const { tasks: todayTasksDone } = useCompletedTasks({
    tasks: todaysTasks,
    done: true,
  });

  const { tasks: allTasksDone } = useCompletedTasks({
    tasks: tasks,
    done: true,
  });

  const percentageTodayTasks = (todayTasksDone.length * 100) / todaysTasks.length || 0;
  const percentageAllTasks = (allTasksDone.length * 100) / tasks.length || 0;

  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-between w-full mb-2">
        <span className="text-gray-600">Today's Tasks</span>
        <span className="text-gray-600">{Math.round(percentageTodayTasks)}%</span>
      </div>
      <div style={{ width: 150, height: 150 }}>
        <CircularProgressbarWithChildren
          value={percentageTodayTasks}
          strokeWidth={10}
          styles={{
            path: {
              stroke: `#48bb78`,
              strokeLinecap: 'round',
              transition: 'stroke-dashoffset 0.5s ease 0s',
            },
            trail: {
              stroke: '#e2e8f0',
            },
            text: {
              fill: '#1a202c',
              fontSize: '24px',
              fontWeight: 'bold',
            },
          }}
        >
          <div className="flex flex-col items-center justify-center h-full">
            <span className="text-2xl font-bold">{Math.round(percentageTodayTasks)}%</span>
            <span className="text-gray-600">Today's Tasks</span>
          </div>
        </CircularProgressbarWithChildren>
      </div>
     
    </div>
  );
};

export default TaskProgressBar;