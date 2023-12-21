import { useContext, useReducer, useState } from "react";
import taskReducer from "./reducers/TaskReducer";
import TaskContext from "./context/taskContext";
import useTasks from "../hooks/useTasks";
import useAuth from "../hooks/useAuth";

interface Task {
  id: number;
  title: string;
}

const TaskList = () => {
  const { tasks, dispatch } = useTasks();
  const { user } = useAuth();
  return (
    <>
      <p>User : {user}</p>
      <button
        onClick={() =>
          dispatch({
            type: "ADD",
            task: { id: Date.now(), title: "Task " + Date.now() },
          })
        }
        className="btn btn-primary my-3"
      >
        Add Task
      </button>
      <ul className="list-group">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <span className="flex-grow-1">{task.title}</span>
            <button
              className="btn btn-outline-danger"
              onClick={() => dispatch({ type: "DELETE", taskId: task.id })}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TaskList;
