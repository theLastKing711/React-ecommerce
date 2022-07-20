import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  background-color: lightblue;
  color: white;
`;

const Header = () => {
  return (
    <StyledHeader>
      <div className="container mx-auto">
        <div className="p-4 text-xl flex justify-between">
          <div className="cursor-pointer">E-commerce</div>
          <div>
            <h1 className="cursor-pointer">Register</h1>
          </div>
        </div>
      </div>
    </StyledHeader>
  );
};

export default Header;
