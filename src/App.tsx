import { useReducer } from "react";
import "./App.css";
import InfinitList from "./react-query/InfinitList";
import Pagination from "./react-query/Pagination";
import PostList from "./react-query/PostList";
import TodoForm from "./react-query/TodoForm";
import TodoList from "./react-query/TodoList";
import Counter from "./state-management/Counter";
import LoginStatus from "./state-management/LoginStatus";
import TaskList from "./state-management/TaskList";
import taskReducer from "./state-management/reducers/TaskReducer";
import TaskContext from "./state-management/context/taskContext";
import NavBar from "./state-management/NavBar";
import HomePage from "./state-management/HomePage";
import AuthContext from "./state-management/context/authContext";
import AuthProvider from "./state-management/AuthProvider";
function App() {
  const [tasks, taskDispatch] = useReducer(taskReducer, []);
  return (
    <>
      {/* <h1>Post List</h1>
      <PostList /> */}

      {/* <TodoForm />
      <br />
      <h1>Todo List</h1>
      <TodoList />
      <br /> */}

      {/* <h1>Pagination List</h1>
      <Pagination />
      <br />
      <h1>Infinity List</h1>
      <InfinitList /> */}
      <br />

      {/* Reducers Example 
      <Counter /> */}
      <h2>Sharing State with react Context</h2>
      <AuthProvider>
        <TaskContext.Provider value={{ tasks, dispatch: taskDispatch }}>
          <NavBar />
          <HomePage />
        </TaskContext.Provider>
      </AuthProvider>
      {/* <LoginStatus /> */}
    </>
  );
}

export default App;
