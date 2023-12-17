import "./App.css";
import InfinitList from "./react-query/InfinitList";
import Pagination from "./react-query/Pagination";
import PostList from "./react-query/PostList";
import TodoForm from "./react-query/TodoForm";
import TodoList from "./react-query/TodoList";

function App() {
  return (
    <>
      {/* <h1>Post List</h1>
      <PostList /> */}
      <TodoForm />
      <br />
      <h1>Todo List</h1>
      <TodoList />
      <br />

      {/* <h1>Pagination List</h1>
      <Pagination />
      <br />
      <h1>Infinity List</h1>
      <InfinitList /> */}
      <br />
    </>
  );
}

export default App;
