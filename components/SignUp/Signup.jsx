import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { base_url } from "../../Config/constants";
import styles from "../../styles/Login.module.css";
import { useRouter } from "next/router";
import { signupUserAction } from "../../redux/users/user.actions";
import { useDispatch } from "react-redux";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const Signup = () => {
  const [values, setValues] = useState({});
  const inputChangeHandler = (e) => {
    setValues({
      ...values,
      [e?.target?.name]: e?.target?.value,
    });
  };

  const dispatch = useDispatch();
  const signupHandler = (e) => {
    e?.preventDefault();
    let payload = { ...values };
    dispatch(signupUserAction(payload));
  };
  const router = useRouter();

  return (
    <div className={classNames(" card", styles.login_container)}>
      <h2>Create an Account</h2>
      <form className="flex-column  flex" onSubmit={signupHandler}>
        <input
          name="first_name"
          className="basic-input mb-1"
          type="text"
          placeholder="First Name"
          onChange={inputChangeHandler}
          required
        />
        <input
          name="last_name"
          className="basic-input mb-1"
          type="text"
          placeholder="Last Name"
          onChange={inputChangeHandler}
          required
        />
        <input
          name="email"
          className="basic-input mb-1"
          type="email"
          placeholder="Email"
          onChange={inputChangeHandler}
          required
        />

        <input
          name="password"
          className="basic-input "
          type="password"
          placeholder="Password"
          onChange={inputChangeHandler}
          required
        />
        <input
          name="cpassword"
          className="basic-input "
          type="password"
          placeholder="Confirm Password"
          onChange={inputChangeHandler}
          required
        />
        <div className="flex gap-2 mt-1">
          <button
            type="submit"
            onClick={signupHandler}
            disabled={
              !values.username ||
              !values.password ||
              !values?.username?.length ||
              !values?.password?.length ||
              !(values?.password == values?.cpassword)
            }
            className="btn-primary btn"
          >
            Create Account
          </button>

          <button
            onClick={() => router.push("/login")}
            className="btn btn-outline"
          >
            Back to Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
