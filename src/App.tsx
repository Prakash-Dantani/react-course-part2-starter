import "./App.css";
import Pagination from "./react-query/Pagination";
import PostList from "./react-query/PostList";
import TodoList from "./react-query/TodoList";

function App() {
  return (
    <>
      <h1>Pagination List</h1>
      <Pagination />
      <br />
      {/* <h1>Post List</h1>
      <PostList /> */}
      {/* <h1>Todo List</h1>
      <TodoList /> */}
    </>
  );
}

export default App;
