import React from "react";
import Home from "components/Home";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { clearUserAction, logOutAction } from "js/actions/userActions";

const HomeContainer = (props) => (
  <Home user={props.user} logout={props.clearUser} />
);

HomeContainer.propTypes = {
  user: PropTypes.object,
};

const mapStateToProps = (state) => {
  const { user } = state;

  return {
    user,
  };
};
const mapDispatchToProps = (dispatch) => ({
  getUser: () => dispatch(getUserAction()),
  clearUser: () => dispatch(clearUserAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
