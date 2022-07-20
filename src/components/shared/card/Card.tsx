import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  .card {
    width: 280px;
    padding: 2rem;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.3);
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 6px;
  }
`;

interface Props {
  children: JSX.Element;
}

const Card: React.FC<Props> = ({ children }) => {
  return <StyledCard>{children}</StyledCard>;
};

export default Card;
