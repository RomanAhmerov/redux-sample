import axios from 'axios';
import { Dispatch } from 'react';
import { TodoAction, TodoActionTypes } from 'types/todo';

export const fetchTodos = (page = 1, limit = 10) => {
    return async (dispatch: Dispatch<TodoAction>) => {
        dispatch({ type: TodoActionTypes.SET_TODO_PAGE, payload: page });

        try {
            // Загрузка
            dispatch({ type: TodoActionTypes.FETCH_TODOS });

            // Получение данных
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos', {
                params: {
                    _page: page,
                    _limit: limit,
                },
            });

            // Запись в Global State
            dispatch({
                type: TodoActionTypes.FETCH_TODOS_SUCCESS,
                payload: response.data,
            });
        } catch (e) {
            // Отправка ошибки
            dispatch({
                type: TodoActionTypes.FETCH_TODOS_ERROR,
                payload: 'Произошла ошибка при загрузке списка дел!',
            });
        }
    };
};
