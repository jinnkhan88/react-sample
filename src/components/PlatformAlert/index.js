import React from "react";
import { Alert } from "react-bootstrap";

const PlatformAlert = ({
  message = "default message",
  variant = "warning",
}) => {
  return (
    <div className="tw-flex tw-flex-row tw-mt-4">
      <Alert key="warning" variant={variant} className="tw-text-base">
        {message}
      </Alert>
    </div>
  );
};
export default PlatformAlert;
