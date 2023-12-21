import { Dispatch } from "react";
import { Task, TaskAction } from "../reducers/TaskReducer";
import React from "react";

interface taskContextType{
    tasks:Task[];
    dispatch:Dispatch<TaskAction>;
}

const TaskContext = React.createContext<taskContextType>({} as taskContextType);
export default TaskContext;