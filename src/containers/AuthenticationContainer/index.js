import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Login from "components/Login";

const AuthenticationContainer = (props) => <Login user={props.user} />;

export default AuthenticationContainer;
