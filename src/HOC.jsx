import React, { Component } from "react";

const HOC = (WrappedComponent) => {
  return class NewComponent extends Component {
    render() {
      console.log("NewComponent render after manipulate", this.props);
      return <WrappedComponent {...this.props} />;
    }
  };
};

export default HOC;
