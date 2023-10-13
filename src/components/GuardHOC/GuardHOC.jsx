import { Navigate } from 'react-router-dom';

const withGuard = WrappedCommponent => {
  return props => {
    const whoiam = JSON.parse(localStorage.getItem('whoiam'));
    if (!whoiam?.isAuthentcated) return <Navigate to={'/signin'} />;
    return <WrappedCommponent {...props} />;
  };
};

export default withGuard;
