import TodoList from "component/TodoList";
import UserList from "component/UserList";
import React from "react";

const App: React.FC = () => {
  return (
    <div>
      <UserList />
      <hr />
      <TodoList />
    </div>
  );
};

export default App;
