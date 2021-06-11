import React, { useState, useEffect } from "react";

const Alert = ({ text, type }) => {
  return <p className={`alert alert-${type}`}>{text}</p>;
};

export default Alert;
