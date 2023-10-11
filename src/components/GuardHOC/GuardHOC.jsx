const GuardHOC = (WrappedCommponent) => {
  return (props) => <WrappedCommponent {...props} />;
};

export default GuardHOC;
