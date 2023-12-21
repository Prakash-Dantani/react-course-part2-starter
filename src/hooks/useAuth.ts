import { useContext } from "react";
import AuthContext from "../state-management/context/authContext";

const useAuth = () => useContext(AuthContext);
export default useAuth;