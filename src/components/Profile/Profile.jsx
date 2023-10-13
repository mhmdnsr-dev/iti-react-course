import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { isAuthContext } from '../../App.jsx';
import Loading from '../utils/Loading.jsx';
import AlertError from '../utils/AlertError.jsx';
import Tasks from '../Tasks/Tasks.jsx';
import AddTask from '../Tasks/AddTask/AddTask.jsx';
import { useState } from 'react';

const Profile = () => {
  const navigate = useNavigate();
  const { setIsAuth } = useContext(isAuthContext);

  const [tasks, setTasks] = useState([]);

  const { isLoading, error, data, refetch } = useQuery({
    queryKey: 'userInfo',
    queryFn: () =>
      axios
        .get('https://todo-api-dcld.onrender.com/api/user/get-data', {
          withCredentials: true,
        })
        .then(res => {
          if (res.status === 200) {
            setIsAuth(true);
            localStorage.setItem(
              'whoiam',
              JSON.stringify({ isAuthentcation: true }),
            );

            return res.data.body.tasks;
          }
        })
        .catch(err => {
          setIsAuth(false);
          localStorage.setItem(
            'whoiam',
            JSON.stringify({ isAuthentcation: false }),
          );
          navigate('/signin');
        }),
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    enabled: false,
  });

  useEffect(() => {
    refetch();
  }, [refetch]);

  let content;
  isLoading && (content = <Loading />);

  error && (content = <AlertError />);

  data &&
    (data.length
      ? (content = <Tasks tasks={data} />)
      : (content = (
          <div className=" mt-6 text-center ">
            <p className="mx-auto w-fit text-4xl text-red-500">
              There are no tasks
            </p>
          </div>
        )));

  return (
    <>
      <div>
        <AddTask reFetchTasks={refetch} />
      </div>
      {content}
    </>
  );
};

export default Profile;
