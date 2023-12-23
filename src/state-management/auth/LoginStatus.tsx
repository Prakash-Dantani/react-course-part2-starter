import ZustandAuth from "./ZustandAuth";
import useAuth from "./useAuth";

const LoginStatus = () => {
  // const [user, dispatch] = useReducer(authReducer, "");
  const { user, dispatch } = useAuth();
  const { user: zustandUser, login, logout } = ZustandAuth();

  if (user)
    return (
      <>
        <div>
          <span className="mx-2">{user}</span>
          <br />
          <span className="mx-2">{zustandUser}</span>
          <a onClick={() => dispatch({ type: "LOGOUT" })} href="#">
            Logout
          </a>
          <br />
          <a onClick={() => logout()} href="#">
            Zustand Logout
          </a>
        </div>
      </>
    );
  return (
    <div>
      <a
        onClick={() => dispatch({ type: "LOGIN", name: "Prakash Dantani" })}
        href="#"
      >
        Login
      </a>
      <br />
      <a onClick={() => login("Prakash Dantani")} href="#">
        Zustand Login
      </a>
    </div>
  );
};

export default LoginStatus;
