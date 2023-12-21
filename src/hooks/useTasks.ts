import { useContext } from "react";
import TaskContext from "../state-management/context/taskContext";

const useTasks = () => useContext(TaskContext);
export default useTasks;