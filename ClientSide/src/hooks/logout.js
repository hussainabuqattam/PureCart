import React from "react";
import { useAuthContext } from "./useAuthContext";

export const useLogout = () => {
  const { dispatch } = useAuthContext();

  const logout = () => {
    // remove token from local storge
    localStorage.removeItem("token");
    // dispatch({ type: "LOGOUT" });
  };

  return {logout};
};
