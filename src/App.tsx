import React from "react";
import styled from "styled-components";
import Header from "./components/layout/header/Header";
import RouterWrapper from "./router/RouterWrapper";

const StyledApp = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

function App() {
  return (
    <StyledApp className="App">
      <Header />
      <RouterWrapper />
    </StyledApp>
  );
}

export default App;
