import "./App.css";
import PostList from "./react-query/PostList";
import TodoList from "./react-query/TodoList";

function App() {
  return (
    <>
      <h1>Post List</h1>
      <PostList />
      {/* <h1>Todo List</h1>
      <TodoList /> */}
    </>
  );
}

export default App;
