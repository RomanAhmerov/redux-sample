import axios from "axios";
import { Dispatch } from "react";
import { UserAction, UserActionTypes } from "types/user";

export const fetchUsers = () => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      // Загрузка
      dispatch({ type: UserActionTypes.FETCH_USERS });

      // Получение данных
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );

      // Запись в Global State
      dispatch({
        type: UserActionTypes.FETCH_USERS_SUCCESS,
        payload: response.data,
      });
    } catch (e) {
      // Отправка ошибки
      dispatch({
        type: UserActionTypes.FETCH_USERS_ERROR,
        payload: "Произошла ошибка при загрузке пользователей!",
      });
    }
  };
};
