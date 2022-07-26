import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { base_url } from "../../Config/constants";
import styles from "../../styles/Login.module.css";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { LoginUserAction } from "../../redux/users/user.actions";
import GoogleLoginComponent from "./GoogleLoginComponent";
import FacebookLoginComponent from "./FacebookLoginComponent";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const Login = () => {
  const [values, setValues] = useState({});
  const inputChangeHandler = (e) => {
    setValues({
      ...values,
      [e?.target?.name]: e?.target?.value,
    });
  };

  const dispatch = useDispatch();

  const SigninClickHandler = (e) => {
    e.preventDefault();
    let payload = {
      email: values?.username?.toLowerCase(),
      password: values?.password,
    };
    dispatch(LoginUserAction(payload));
  };

  const router = useRouter();

  return (
    <div
      className={classNames("flex-column  flex card", styles.login_container)}
    >
      <h2>Login Form</h2>
      <form className="flex-column  flex" onSubmit={SigninClickHandler}>
        <input
          name="username"
          className="basic-input mb-1"
          type="text"
          placeholder="Phone , User , Email"
          onChange={inputChangeHandler}
        />
        <input
          name="password"
          className="basic-input "
          type="password"
          placeholder="Password"
          onChange={inputChangeHandler}
        />
        <div className="flex mb-2 align-center gap-0_5">
          <input
            name="remember"
            onChange={inputChangeHandler}
            id="remember"
            type="checkbox"
          />
          <label htmlFor="remember">Remember me</label>
        </div>

        <button
          type="submit"
          disabled={
            !values.username ||
            !values.password ||
            !values?.username?.length ||
            !values?.password?.length
          }
          className="btn-primary btn  mb-2"
        >
          Sign in
        </button>

        <div className="flex gap-2 mb-1 ">
          <GoogleLoginComponent />
          <FacebookLoginComponent />
        </div>
        <div className="flex align-center justify-between mt-1">
          <p className="pointer" onClick={() => router.push("/forgot")}>
            Forgot Password ?
          </p>
          <button
            type="button"
            onClick={() => router.push("/signup")}
            className="btn btn-outline"
          >
            Create a New Account ?
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
