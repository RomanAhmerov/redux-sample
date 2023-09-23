import { useTypedSelector } from "hooks/useTypedSelector";
import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux"
import { fetchTodos } from "store/api/todo";
import { TodoActionTypes } from "types/todo";

const TodoList: React.FC = () => {
  const dispatch = useDispatch();

  const { page, limit, todos, loading, error } = useTypedSelector(
    (state) => state.todo
  );

  const pages = [1, 2, 3, 4, 5];

  useEffect(() => {
    dispatch(fetchTodos(page, limit))
  }, [page]);

  if (loading) {
    return <h1>Идет загрузка ...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
          {todo.id} - {todo.title}
        </div>
      ))}
      <div style={{ display: "flex" }}>
        {pages.map((pageValue) => (
          <div
            key={pageValue}
            onClick={() => dispatch({ type: TodoActionTypes.SET_TODO_PAGE, payload: pageValue })}  
            style={{
              border: pageValue === page ? "2px solid green" : "1px solid gray",
              padding: 10,
            }}
          >
            {pageValue}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
