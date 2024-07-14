import { useContext } from "react";
import { UserContext } from "../Ulti/UserContext";

export const useUsers = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("UseUser must be within a userProvider");
  }

  return context;
};
