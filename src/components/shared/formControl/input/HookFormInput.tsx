import React from "react";
import styled from "styled-components";

const StyledInputContainer = styled.div`
  input {
    display: block;
    width: 100%;
    border: 1px solid black;
    border-radius: 3px;
    padding: 1rem;
    outline: none;

    transition: border-color 0.3s;

    &:focus {
      border-color: lightblue;
    }
  }

  input.error {
    border-color: red;
  }
`;

interface Props {
  register: any;
  name: string;
  placeholder: string;
  error: boolean;
  // rules?: {
  //   [x: string]: any;
  // };
}

export function HookFormInput({
  register,
  name,
  error,
  ...rest
}: Props): JSX.Element {
  return (
    <StyledInputContainer className="hook-form-input-container">
      <input
        {...register(name)}
        {...rest}
        className={`${error === true ? "error" : ""} hook-form-input`}
      />
    </StyledInputContainer>
  );
}

export default HookFormInput;
