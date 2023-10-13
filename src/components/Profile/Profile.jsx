import React, { useEffect } from 'react';
import Loading from '../utils/Loading.jsx';
import Tasks from '../Tasks/Tasks.jsx';
import AddTask from '../Tasks/AddTask/AddTask.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { getTasks } from '../../redux/tasksSlice.ts';

const Profile = () => {
  const { tasks } = useSelector(state => state.tasks);
  const { isLoading } = useSelector(state => state.tasks);
  const dispatch = useDispatch();

  // const { isLoading, error, data, refetch } = useQuery({
  //   queryKey: 'userInfo',
  //   queryFn: () =>
  //     axios
  //       .get('https://todo-api-dcld.onrender.com/api/user/get-data', {
  //         withCredentials: true,
  //       })
  //       .then(res => {
  //         if (res.status === 200) {
  //           setIsAuth(true);
  //           localStorage.setItem(
  //             'whoiam',
  //             JSON.stringify({ isAuthentcation: true }),
  //           );

  //           return res.data.body.tasks;
  //         }
  //       })
  //       .catch(err => {
  //         setIsAuth(false);
  //         localStorage.setItem(
  //           'whoiam',
  //           JSON.stringify({ isAuthentcation: false }),
  //         );
  //         navigate('/signin');
  //       }),
  //   refetchOnMount: false,
  //   refetchOnWindowFocus: false,
  //   enabled: false,
  // });

  useEffect(() => {
    dispatch(getTasks());
  }, [dispatch]);

  let content;
  isLoading && (content = <Loading />);

  // error && (content = <AlertError />);

  !isLoading &&
    (tasks.length
      ? (content = <Tasks tasks={tasks} />)
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
        <AddTask />
      </div>
      {content}
    </>
  );
};

export default Profile;
