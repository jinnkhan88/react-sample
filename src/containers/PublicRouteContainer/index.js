import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Redirect, Route } from "react-router-dom";

const PublicRouteContainer = ({ user: { token }, children, ...props }) => {
  debugger;
  return (
    <Route
      {...props}
      render={({ location }) => {
        const { state: { from: { pathname } = {} } = {} } = location;
        debugger;

        return token ? <Redirect to={pathname || "/confirmation"} /> : children;
      }}
    />
  );
};

PublicRouteContainer.propTypes = {
  user: PropTypes.shape({
    token: PropTypes.string,
  }).isRequired,
  children: PropTypes.node.isRequired,
};

const mapStateToProps = ({ user }) => ({ user });

export default connect(mapStateToProps)(PublicRouteContainer);
