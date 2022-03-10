import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Button from "components/Button";
import { useHistory } from "react-router-dom";
import PlatformAlert from "components/PlatformAlert";

const Login = (props) => {
  let history = useHistory();
  const [showLoginAlert, setShowLoginAlert] = useState(false);
  return (
    <Container fluid className="home-container">
      <h3>Welcome to the Platform</h3>
      <div className="tw-flex tw-flex-row tw-gap-2">
        <Button
          title="Login"
          onClick={() => {
            setShowLoginAlert(true);
          }}
          variant="secondary"
        />
        <Button
          title="Register"
          variant="primary"
          onClick={() => {
            setShowLoginAlert(false);
            history.push("/register");
          }}
        />
      </div>
      {showLoginAlert && (
        <PlatformAlert message="Only registration is available at the moment" />
      )}
    </Container>
  );
};

export default Login;
