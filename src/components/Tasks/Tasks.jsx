import React from 'react';
import TaskCard from './TaskCard/TaskCard.jsx';

const Tasks = ({ tasks }) => {
  return (
    <div className="flex flex-wrap gap-5 p-4 justify-center pb-24">
      {tasks.map(task => {
        return <TaskCard key={task._id} task={task} />;
      })}
    </div>
  );
};

export default Tasks;
