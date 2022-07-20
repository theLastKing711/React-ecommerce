import React from "react";
import { DeepRequired, FieldErrorsImpl, useForm } from "react-hook-form";
import styled from "styled-components";
import { LoginUser } from "../../store/UserSlice";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import ErrorMessage from "../../components/shared/error/ErrorMessage";
import HookFormInput from "../../components/shared/formControl/input/HookFormInput";

const StyledLogin = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  .card {
    width: 290px;
    padding: 2rem;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.3);
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 6px;

    &__header {
      font-size: 1.3rem;
      margin-bottom: 2rem;
    }

    &__content {
      > * + * {
        margin-top: 1.5rem;
      }
      width: 100%;
    }

    &__input {
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

    &__input-error {
      margin-top: 0.3rem;
      color: red;
      font-size: 0.8rem;
    }

    &__actions {
      margin-top: 2rem;
    }

    &__button {
      background-color: lightblue;
      padding: 1rem 2rem;
      border-radius: 3px;

      transition: all 0.3s;

      &:hover {
        background-color: #0033ff;
        color: white;
      }
    }
  }
`;

const dummyUser: LoginUser = {
  username: "",
  password: "",
};

const Login = () => {
  const validationSchema = yup.object().shape({
    username: yup.string().required("Username is required"),
    password: yup.string().required("Password is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginUser>({ resolver: yupResolver(validationSchema) });

  const onSubmit = (data: LoginUser) => console.log(data);

  const errorExist = (
    error: FieldErrorsImpl<DeepRequired<LoginUser>>,
    key: keyof LoginUser
  ): boolean => {
    return error[key] !== undefined;
  };

  return (
    <StyledLogin>
      <div className="conatiner mx-auto">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="card">
            <header className="card__header">Login</header>
            <div className="card__content">
              <div>
                <HookFormInput
                  register={register}
                  name="username"
                  placeholder="Enter Username"
                  error={errorExist(errors, "username")}
                />
                {errors.username && (
                  <ErrorMessage>Username is Required</ErrorMessage>
                )}
              </div>
              <div>
                <HookFormInput
                  register={register}
                  name="password"
                  placeholder="Enter Password"
                  error={errorExist(errors, "password")}
                />
                {errors.password && (
                  <ErrorMessage>Password is Required</ErrorMessage>
                )}
              </div>
            </div>
            <div className="card__actions">
              <button type="submit" className="card__button">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </StyledLogin>
  );
};

export default Login;
