import React, { Dispatch } from "react";
import { LoginAction } from "./AuthProvider";

interface AuthContextType{
    user:string;
    dispatch:Dispatch<LoginAction>;
}

const AuthContext = React.createContext<AuthContextType>({} as AuthContextType);
export default AuthContext;