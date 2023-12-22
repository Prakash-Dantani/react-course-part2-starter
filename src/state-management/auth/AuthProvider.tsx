import { ReactNode, useReducer } from "react";
import AuthContext from "./authContext";

export interface User {
  name: string;
  userId: number;
}

interface Login {
  type: "LOGIN";
  name: string;
}

interface Logout {
  type: "LOGOUT";
}

export type LoginAction = Login | Logout;

const authReducer = (state: string, action: LoginAction): string => {
  if (action.type === "LOGIN") return action.name;
  if (action.type === "LOGOUT") return "";
  return state;
};

interface Props {
  children: ReactNode;
}
const AuthProvider = ({ children }: Props) => {
  const [user, dispatch] = useReducer(authReducer, "");
  return (
    <AuthContext.Provider value={{ user, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
