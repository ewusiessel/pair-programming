import React from "react";
import { Alert } from "react-bootstrap";

const WarningSign = (props) => (
  <div>
    <Alert variant="danger">{this.props.text}</Alert>
  </div>
);

export default WarningSign();
