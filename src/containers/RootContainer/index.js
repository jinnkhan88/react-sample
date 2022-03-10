import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Switch, useHistory, Route } from "react-router-dom";
import PublicRouteContainer from "containers/PublicRouteContainer";
import HomeContainer from "containers/HomeContainer";
import { clearErrorsAction } from "js/actions/errorActions";
import { resetLoadingAction } from "js/actions/loadingActions";
import SignupContainer from "containers/SignupContainer";
import AuthenticatedRouteContainer from "containers/AuthenticatedRouteContainer";
import Home from "components/Home";
import AuthenticationContainer from "containers/AuthenticationContainer";

const RootContainer = (props) => {
  console.log("root props", props);
  const { clearErrors, resetLoading } = props;

  const history = useHistory();

  useEffect(
    () =>
      history.listen(() => {
        clearErrors();
        resetLoading();
      }),
    []
  );

  return (
    <div className="tw-h-full tw-w-full">
      <Switch>
        <PublicRouteContainer exact path="/">
          <AuthenticationContainer />
        </PublicRouteContainer>

        <PublicRouteContainer exact path="/register">
          <SignupContainer />
        </PublicRouteContainer>

        <AuthenticatedRouteContainer exact path="/confirmation">
          <HomeContainer />
        </AuthenticatedRouteContainer>
      </Switch>
    </div>
  );
};

RootContainer.propTypes = {
  clearErrors: PropTypes.func.isRequired,
  resetLoading: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  clearErrors: () => dispatch(clearErrorsAction()),
  resetLoading: () => dispatch(resetLoadingAction()),
});

export default connect(null, mapDispatchToProps)(RootContainer);
