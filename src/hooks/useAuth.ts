import { useContext } from "react";
import { AuthContext } from "../context/AuhtContext";

export function useAuth() {
  const value = useContext(AuthContext);
  return value;
}
