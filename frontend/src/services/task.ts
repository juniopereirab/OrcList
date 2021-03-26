import api from './api';

export const createTask = async (userId: string, listId: string, title: string) => {
    const response = await api.patch('/addTask', {
        title,
        listId,
        ownerId: userId
    });

    return response;
}