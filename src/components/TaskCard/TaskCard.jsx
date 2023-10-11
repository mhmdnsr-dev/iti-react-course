import React from "react";

const TaskCard = ({ task }) => {
  return (
    <div className="w-full max-w-sm rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800">
      <div className=" flex flex-col items-center gap-2 py-5">
        <h5 className=" text-xl font-medium text-gray-900 dark:text-white">
          {task.title}
        </h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {task.description || "No Description Found"}
        </span>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {task.deadline.split("T")[0]}
        </span>
        <div className="mt-4 flex space-x-3 md:mt-6">
          <button className="inline-flex items-center rounded-lg bg-blue-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Edit
          </button>
          <button className="inline-flex items-center rounded-lg border border-gray-300 bg-red-500 px-4 py-2 text-center text-sm font-medium  text-white hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
