import React from "react";
import FacebookLogin from "react-facebook-login";

const FacebookLoginComponent = () => {
  const responseFacebook = (response) => {
    console.log(response);
  };

  return (
    <FacebookLogin
      appId="1088597931155576"
      fields="name,email,picture"
      //onClick={() => true}
      callback={responseFacebook}
      textButton="Facebook Login"
    ></FacebookLogin>
  );
};

export default FacebookLoginComponent;
