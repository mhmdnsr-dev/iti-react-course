import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { object, string } from 'yup';
import axios from 'axios';

export const Alert = msg => (
  <div
    className="mb-4 flex items-center rounded-lg bg-red-50 p-2 text-sm text-red-800 dark:bg-gray-800 dark:text-red-400"
    role="alert">
    <span className="sr-only">Info</span>
    <div>{msg}</div>
  </div>
);

export const loading = (
  <div role="status" className=" mx-auto mt-6 w-fit">
    <svg
      aria-hidden="true"
      className="mr-2 h-10 w-10 animate-spin fill-blue-600 text-gray-200 dark:text-gray-600"
      viewBox="0 0 100 101"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
        fill="currentColor"
      />
      <path
        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
        fill="currentFill"
      />
    </svg>
    <span className="sr-only">Loading...</span>
  </div>
);

const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const whoiam = JSON.parse(sessionStorage.getItem('whoiam'));
    if (whoiam?.isAuthentcation) navigate('/');
  }, []);

  const [isLoding, setIsLoading] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const validationSchema = object({
    email: string()
      .email()
      .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, {
        message: 'Email must be a valid email',
      }),
    password: string().matches(
      /(?=[A-Za-z0-9@#$%^&+!=]+$)^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+!=])(?=.{8,}).*$/,
      {
        message:
          'At least 8 characters, min 1 Uppercase 1 Lowercase 1 Number 1 special character',
      },
    ),
  });
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit({ email, password }) {
      const data = { email, password };
      setIsLoading(true);
      axios
        .post('https://trello-app-v2.onrender.com/api/user/login', data, {
          withCredentials: true,
        })
        .then(req => {
          if (req.status === 200) navigate('/');
        })
        .catch(err => {
          formik.setErrors({
            errMsg: err.response.data.body.message,
          });
        })
        .finally(() => setIsLoading(false));
    },
  });

  if (!formik.values.email) {
    formik.touched.email = false;
  }
  if (!formik.values.password) {
    formik.touched.password = false;
  }

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-20 lg:px-8">
      {isLoding ? (
        loading
      ) : (
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={formik.handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-white">
                Email address
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="email"
                  name="email"
                  className="block w-full rounded-md border-gray-600 py-2 pl-11 text-gray-800 ring ring-gray-700 focus:border-gray-400 focus:ring focus:ring-gray-400 focus:ring-offset-1 focus:ring-offset-gray-400 dark:border-gray-600"
                  placeholder="you@site.com"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <div className="pointer-events-none absolute inset-y-0 left-0 z-20 flex items-center pl-4">
                  <svg
                    className="h-4 w-4 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    viewBox="0 0 16 16">
                    <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
                  </svg>
                </div>
              </div>
              {formik.touched.email &&
                formik.errors.email &&
                Alert(formik.errors.email)}
            </div>
            <div className="space-y-2 text-gray-700">
              <label
                className="mx-auto block text-sm font-medium text-white"
                htmlFor="password">
                password
              </label>
              <div className="relative  focus-within:text-gray-900 dark:focus-within:text-gray-800 ">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-y-0 flex items-center px-4">
                  <svg
                    aria-hidden="true"
                    className="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
                <input
                  className="block w-full rounded-md border-gray-600 py-2 pl-11 text-gray-800 ring ring-gray-700 focus:border-gray-400 focus:ring focus:ring-gray-400 focus:ring-offset-1 focus:ring-offset-gray-400 dark:border-gray-600"
                  id="password"
                  name="password"
                  required="required"
                  autoComplete="new-password"
                  placeholder="password"
                  type={showPass ? 'text' : 'password'}
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <div className="absolute inset-y-1 right-0 z-30 flex items-center px-4 ">
                  <button
                    type="button"
                    className="z-30"
                    onClick={() => setShowPass(!showPass)}>
                    <svg
                      aria-hidden="true"
                      className="h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                    <svg
                      x-show="isshow"
                      aria-hidden="true"
                      className="h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      style={{ display: 'none' }}>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              {formik.touched.password &&
                formik.errors.password &&
                Alert(formik.errors.password)}
            </div>
            <div>
              <button
                type="submit"
                className="mb-2 flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Sign in
              </button>
              {formik.errors.errMsg && Alert(formik.errors.errMsg)}
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-300">
            Don't have an account?{' '}
            <Link
              to="/register"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Register
            </Link>
          </p>
        </div>
      )}
    </div>
  );
};

export default Login;
