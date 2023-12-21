import React, { ReactNode, useReducer } from "react";
import taskReducer from "./reducers/TaskReducer";
import TaskContext from "./context/taskContext";
interface Props {
  children: ReactNode;
}

const TaskProvider = ({ children }: Props) => {
  const [tasks, dispatch] = useReducer(taskReducer, []);
  return (
    <TaskContext.Provider value={{ tasks, dispatch: dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
