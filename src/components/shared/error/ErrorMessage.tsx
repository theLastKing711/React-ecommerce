import React from "react";
import styled from "styled-components";

const StyledErrorMessage = styled.p`
  margin-top: 0.3rem;
  color: red;
  font-size: 0.7rem;
`;

interface Props {
  children: React.ReactNode;
}

const ErrorMessage: React.FC<Props> = ({ children }) => {
  return <StyledErrorMessage className="error">{children}</StyledErrorMessage>;
};

export default ErrorMessage;
