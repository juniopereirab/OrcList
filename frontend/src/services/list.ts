import api from './api';

export const listToDo = async (userId: string) => {
    const response = await api.get(`/lists/${userId}`);

    return response.data;
}