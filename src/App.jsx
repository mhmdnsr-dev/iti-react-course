import React, { createContext, useState } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

// COMPONENT
import Layout from './components/Layout/Layout.jsx';
import Profile from './components/Profile/Profile.jsx';
import NotFound from './components/NotFound/NotFound.jsx';
import Login from './components/Auth/Login/Login.jsx';
import Register from './components/Auth/Register/Register.jsx';
import withGuard from './components/GuardHOC/GuardHOC.jsx';
import { Provider } from 'react-redux';
import store from './redux/store.ts';

const queryClient = new QueryClient();
export const isAuthContext = createContext({
  isAuth: false,
  setIsAuth() {},
});

const ProfileGuard = withGuard(Profile);

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <ProfileGuard />,
      },
      {
        path: 'signin',
        element: <Login />,
      },
      {
        path: 'register',
        element: <Register />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);

const App = () => {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <isAuthContext.Provider value={{ isAuth, setIsAuth }}>
          <RouterProvider router={router} />
        </isAuthContext.Provider>
      </QueryClientProvider>
    </Provider>
  );
};

export default App;
