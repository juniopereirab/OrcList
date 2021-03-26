import api from './api';

export const listToDo = async (userId: string) => {
    const response = await api.get(`/lists/${userId}`);

    return response.data;
}

export const createList = async (userId: string, title: string) => {
    const response = await api.post(`/createList`, {
        ownerId: userId,
        title
    });

    return response;
}