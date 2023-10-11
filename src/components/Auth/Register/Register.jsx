import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { object, ref, string } from 'yup';
import axios from 'axios';
import { Alert, loading } from '../Login/Login.jsx';

const Register = () => {
  const navigate = useNavigate();
  const [isLoding, setIsLoading] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [showRrPass, setReShowPass] = useState(false);
  const validationSchema = object({
    name: string()
      .max(15, 'Maximum 15 characters')
      .min(5, 'Minimum 5 characters'),
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
    rePassword: string()
      .matches(
        /(?=[A-Za-z0-9@#$%^&+!=]+$)^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+!=])(?=.{8,}).*$/,
        {
          message:
            'At least 8 characters, min 1 Uppercase 1 Lowercase 1 Number 1 special character',
        },
      )
      .equals([ref('password')], 'Both passwords must match'),
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      rePassword: '',
    },
    validationSchema,
    onSubmit({ name, email, password }) {
      const data = { name, email, password };
      setIsLoading(true);
      axios
        .post('https://trello-app-v2.onrender.com/api/user/register', data, {})
        .then(res => {
          if (res.status === 201) navigate('/signin');
        })
        .catch(err => {
          formik.setErrors({
            errMsg: err.response.data.body.message,
          });
        })
        .finally(() => setIsLoading(false));
    },
  });

  if (!formik.values.name) {
    formik.touched.name = false;
  }
  if (!formik.values.email) {
    formik.touched.email = false;
  }
  if (!formik.values.password) {
    formik.touched.password = false;
  }
  if (!formik.values.rePassword) {
    formik.touched.rePassword = false;
  }

  useEffect(() => {
    const whoiam = JSON.parse(sessionStorage.getItem('whoiam'));
    if (whoiam?.isAuthentcation) navigate('/');
  }, []);

  return (
    <div className=" flex min-h-full flex-1 flex-col justify-center px-6 pb-28 pt-6 lg:px-8">
      {isLoding ? (
        loading
      ) : (
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={formik.handleSubmit}>
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-white">
                Full Name
              </label>
              <div className="relative">
                <input
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  type="text"
                  id="name"
                  name="name"
                  className="block w-full rounded-md border-gray-600 py-2 pl-11 text-gray-800 ring ring-gray-700 focus:border-gray-400 focus:ring focus:ring-gray-400 focus:ring-offset-1 focus:ring-offset-gray-400 dark:border-gray-600"
                  placeholder="Mohamed Nasr"
                />
                <div className="pointer-events-none absolute inset-y-0 left-0 z-20 flex items-center pl-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-5 w-5 text-gray-700">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                    />
                  </svg>
                </div>
              </div>
              {formik.touched.name &&
                formik.errors.name &&
                Alert(formik.errors.name)}
            </div>
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-white">
                Email address
              </label>
              <div className="relative">
                <input
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  type="email"
                  id="email"
                  name="email"
                  className="block w-full rounded-md border-gray-600 py-2 pl-11 text-gray-800 ring ring-gray-700 focus:border-gray-400 focus:ring focus:ring-gray-400 focus:ring-offset-1 focus:ring-offset-gray-400 dark:border-gray-600"
                  placeholder="you@site.com"
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
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="block w-full rounded-md border-gray-600 py-2 pl-11 text-gray-800 ring ring-gray-700 focus:border-gray-400 focus:ring focus:ring-gray-400 focus:ring-offset-1 focus:ring-offset-gray-400 dark:border-gray-600"
                  id="password"
                  name="password"
                  required="required"
                  autoComplete="new-password"
                  placeholder="password"
                  type={showPass ? 'text' : 'password'}
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
            <div className="space-y-2 text-gray-700">
              <label
                className="mx-auto block text-sm font-medium text-white"
                htmlFor="rePassword">
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
                  value={formik.values.rePassword}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="block w-full rounded-md border-gray-600 py-2 pl-11 text-gray-800 ring ring-gray-700 focus:border-gray-400 focus:ring focus:ring-gray-400 focus:ring-offset-1 focus:ring-offset-gray-400 dark:border-gray-600"
                  id="rePassword"
                  name="rePassword"
                  required
                  autoComplete="new-password"
                  placeholder="confirm password"
                  type={showRrPass ? 'text' : 'password'}
                />
                <div className="absolute inset-y-1 right-0 z-30 flex items-center px-4 ">
                  <button
                    type="button"
                    className="z-30"
                    onClick={() => setReShowPass(!showRrPass)}>
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
              {formik.touched.rePassword &&
                formik.errors.rePassword &&
                Alert(formik.errors.rePassword)}
            </div>
            <div>
              <button
                type="submit"
                className="mb-2 flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Create account
              </button>
              {formik.errors.errMsg && Alert(formik.errors.errMsg)}
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-300">
            Already have an account?{' '}
            <Link
              to="/signin"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Sign in
            </Link>
          </p>
        </div>
      )}
    </div>
  );
};

export default Register;
