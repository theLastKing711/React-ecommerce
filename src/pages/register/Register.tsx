import React, { useState } from "react";
import { DeepRequired, FieldErrorsImpl, useForm } from "react-hook-form";
import styled from "styled-components";
import { RegisterUser } from "../../store/UserSlice";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import ErrorMessage from "../../components/shared/error/ErrorMessage";
import HookFormInput from "../../components/shared/formControl/input/HookFormInput";
import { registerUser } from "../../api/users/usersApi";
import { useNavigate } from "react-router-dom";

const StyledRegister = styled.div`
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

const dummyUser: RegisterUser = {
  username: "",
  email: "",
  password: "",
};

const Register = () => {
  let navigate = useNavigate();

  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .required("Email is required")
      .email("Enter valid email"),
    password: yup.string().required("Password is required"),
    username: yup.string().required("Username is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterUser>({ resolver: yupResolver(validationSchema) });

  const onSubmit = (data: RegisterUser) => {
    console.log("data", data);

    registerUser(data).then(() => {
      navigate("/login");
    });
  };

  const errorExist = (
    error: FieldErrorsImpl<DeepRequired<RegisterUser>>,
    key: keyof RegisterUser
  ): boolean => {
    return error[key] !== undefined;
  };

  return (
    <StyledRegister>
      <div className="conatiner mx-auto">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="card">
            <header className="card__header">Register</header>
            <div className="card__content">
              <div>
                <HookFormInput
                  register={register}
                  name="email"
                  placeholder="Enter Email"
                  error={errorExist(errors, "email")}
                />
                {errors.email && (
                  <ErrorMessage>{errors.email.message}</ErrorMessage>
                )}
              </div>
              <div>
                <HookFormInput
                  register={register}
                  name="username"
                  placeholder="Enter Username"
                  error={errorExist(errors, "username")}
                />
                {errors.username && (
                  <ErrorMessage>{errors.username.message}</ErrorMessage>
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
                  <ErrorMessage>{errors.password.message}</ErrorMessage>
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
    </StyledRegister>
  );
};

export default Register;
