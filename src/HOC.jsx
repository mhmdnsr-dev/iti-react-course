import React, { Component } from "react";

const HOC = (WrappedComponent) => {
  return class extends Component {
    render() {
      console.log("WrappedComponent render after manipulate", this.props);
      return <WrappedComponent {...this.props} />;
    }
  };
};

export default HOC;
