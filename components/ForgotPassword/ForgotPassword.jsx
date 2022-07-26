import React from "react";
import { useState } from "react";
import styles from "../../styles/Login.module.css";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { forgotPasswordAction } from "../../redux/users/user.actions";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const ForgotPassword = () => {
  const [values, setValues] = useState({});
  const inputChangeHandler = (e) => {
    setValues({
      ...values,
      [e?.target?.name]: e?.target?.value,
    });
  };

  const dispatch = useDispatch();

  const forgotClickHandler = (e) => {
    e.preventDefault();
    let payload = {
      ...values,
    };
    dispatch(forgotPasswordAction(payload));
  };

  const router = useRouter();

  return (
    <div
      className={classNames("flex-column  flex card", styles.login_container)}
    >
      <h2>Forgot Form</h2>
      <form className="flex-column  flex" onSubmit={forgotClickHandler}>
        <input
          name="email"
          className="basic-input mb-1"
          type="email"
          placeholder="Email"
          onChange={inputChangeHandler}
        />

        <div className="flex gap-2">
          <button type="submit" className="btn-primary btn">
            Fogot Password
          </button>
          <button
            type="button"
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

export default ForgotPassword;
