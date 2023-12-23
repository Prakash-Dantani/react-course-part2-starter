import { useContext } from "react";
import LoginStatus from "./auth/LoginStatus";
import TaskContext from "./tasks/taskContext";
import useCounterStore from "./counter/Store";

const NavBar = () => {
  const { tasks } = useContext(TaskContext);
  const { counter } = useCounterStore();
  return (
    <nav className="navbar d-flex justify-content-between">
      <span className="badge text-bg-secondary">{tasks.length}</span>
      <span className="badge text-bg-secondary">
        Zustand Counter : {counter}
      </span>
      <LoginStatus />
    </nav>
  );
};

export default NavBar;
