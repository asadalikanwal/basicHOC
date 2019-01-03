import React, { Component } from "react";

const withAuthGuard = WrappedComponent => {
  return class HOC extends React.Component {
    render() {
      console.log("Authorized checking..");
      return <WrappedComponent {...this.props} />;
    }
  };
};

export default withAuthGuard;
