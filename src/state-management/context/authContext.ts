import React, { Dispatch } from "react";
import { LoginAction, User } from "../reducers/authReducer";

interface AuthContextType{
    user:string;
    dispatch:Dispatch<LoginAction>;
}

const AuthContext = React.createContext<AuthContextType>({} as AuthContextType);
export default AuthContext;