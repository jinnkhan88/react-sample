import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import Loading from 'components/Loading';
import { getUserAction } from 'js/actions/userActions';

const AuthenticatedRouteContainer = ({
  user: { token },
  getUser,
  children,
  isLoading,
  ...props
}) => {
  const [isLoadStarted, setIsLoadStarted] = useState(false);

  useEffect(() => {
    if (token) {
      getUser();
      setIsLoadStarted(true);
    }
  }, []);

  const content = isLoadStarted && !isLoading ? children : <Loading />;

  return (
    <Route
      {...props}
      render={({ location }) => (token ? content : (
        <Redirect
          to={{
            pathname: '/log-in',
            state: { from: isLoadStarted ? '' : location },
          }}
        />
      ))}
    />
  );
};

AuthenticatedRouteContainer.propTypes = {
  user: PropTypes.shape({
    token: PropTypes.string,
  }).isRequired,
  getUser: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => {
  const {
    user,
    loading: { isGetUserLoading },
  } = state;

  return {
    user,
    isLoading: isGetUserLoading,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getUser: () => dispatch(getUserAction()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AuthenticatedRouteContainer);
