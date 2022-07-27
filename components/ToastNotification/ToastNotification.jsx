import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { snackbarMessage } from "../../redux/settings/settings.actions";

const ToastNotification = () => {
  let { snackbar } = useSelector((store) => store.settings || {});
  console.log(snackbar, "snackbar");
  useEffect(() => {
    if (snackbar?.show) {
      if (snackbar?.severity == "success") {
        toast.success(snackbar?.message);
      } else {
        toast.error(snackbar?.message);
      }
    }
  }, [snackbar]);
  const dispatch = useDispatch();
  //     let payload = {
  //       severity: "success",
  //       message: "some message",
  //     };
  //     dispatch(snackbarMessage(payload));
  return <ToastContainer />;
};

export default ToastNotification;
