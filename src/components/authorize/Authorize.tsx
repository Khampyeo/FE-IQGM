import React, { useEffect } from "react";
import { authorize } from "zmp-sdk";
import { getSetting } from "zmp-sdk/apis";

const Authorize = ({ children }) => {
  useEffect(() => {
    getSetting({
      success: (data) => {
        if (!data.authSetting["scope.userInfo"]) {
          authorize({
            scopes: ["scope.userLocation", "scope.userPhonenumber"],
            success: () => {
              console.log("success");
            },
            fail: (error) => {
              console.log(error);
            },
          });
        }
      },
      fail: (error) => {
        console.log(error);
      },
    });
  }, []);
  return <>{children}</>;
};
export default Authorize;
