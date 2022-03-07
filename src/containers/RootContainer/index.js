import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Route,
  Switch,
  useHistory,
} from 'react-router-dom';
import HomeContainer from 'containers/HomeContainer';
import { clearErrorsAction } from 'js/actions/errorActions';
import { resetLoadingAction } from 'js/actions/loadingActions';

const RootContainer = (props) => {
  const { clearErrors, resetLoading } = props;

  const history = useHistory();

  useEffect(() => history.listen(() => {
    clearErrors();
    resetLoading();
  }), []);

  return (
    <Switch>
      <Route path="/">
        <HomeContainer />
      </Route>
    </Switch>
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

export default connect(
  null,
  mapDispatchToProps,
)(RootContainer);
