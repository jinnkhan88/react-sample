import Button from "components/Button";
import React from "react";
import Container from "react-bootstrap/Container";
import "./styles.scss";

const Home = (props) => {
  console.log(props);
  const { user } = props;
  return (
    <Container fluid className="home-container">
      <div>
        <h1>Hello, {user?.fullName}</h1>
      </div>
      <div>
        <h4>
          Thank you!. We have sent a verification email on {user?.email}. After
          verification please Login to proceed
        </h4>
        <Button
          title="Login"
          variant="secondary"
          onClick={() => {
            props.logout();
          }}
        />
      </div>
    </Container>
  );
};

export default Home;
