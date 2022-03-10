import React from "react";
import Signup from "components/Signup";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { signUpAction } from "js/actions/userActions";
import { useHistory } from "react-router-dom";
const SignupContainer = (props) => {
  const history = useHistory();

  const redirectToLogin = () => {
    history.push("/");
  };
  return (
    <Signup
      signupAction={props.signup}
      isSignUpLoading={props.isSignupLoading}
      isEmailError={props.isEmailError}
      redirectToLogin={redirectToLogin}
    />
  );
};

SignupContainer.propTypes = {
  clearErrors: PropTypes.func.isRequired,
  resetLoading: PropTypes.func.isRequired,
  signup: PropTypes.func.isRequired,
  state: PropTypes.object,
  isSignupLoading: PropTypes.bool.isRequired,
  isEmailError: PropTypes.object,
};

const mapStateToProps = (state) => {
  const {
    loading: { isSignUpLoading },
    errors: { signUpError },
  } = state;
  return {
    isSignupLoading: isSignUpLoading,
    isEmailError: signUpError,
  };
};

const mapDispatchToProps = (dispatch) => ({
  clearErrors: () => dispatch(clearErrorsAction()),
  resetLoading: () => dispatch(resetLoadingAction()),
  signup: (values) => dispatch(signUpAction(values)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignupContainer);
