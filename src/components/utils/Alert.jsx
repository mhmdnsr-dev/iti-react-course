const Alert = ({ msg }) => (
  <div
    className="mb-4 flex items-center rounded-lg bg-red-50 p-2 text-sm text-red-800 dark:bg-gray-800 dark:text-red-400"
    role="alert">
    <span className="sr-only">Info</span>
    <div>{msg}</div>
  </div>
);

export default Alert;
