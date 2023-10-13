import { Link } from 'react-router-dom';

const AlertError = () => {
  return (
    <div
      id="alert-2"
      className=" mx-auto mb-4 mt-10 flex w-fit items-center rounded-lg bg-red-50 p-4 text-red-800 dark:bg-gray-800 dark:text-red-400"
      role="alert">
      <svg
        className="h-4 w-4 flex-shrink-0"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 20">
        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
      </svg>
      <span className="sr-only">Info</span>
      <div className="ml-3 text-sm font-medium">
        An error occurred during authentication{' '}
        <Link
          to="/signin"
          className="font-semibold underline hover:no-underline">
          try signin
        </Link>
        .
      </div>
    </div>
  );
};

export default AlertError;
