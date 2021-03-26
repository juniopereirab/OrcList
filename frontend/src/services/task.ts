import api from './api';

export const createTask = async (userId: string, listId: string, title: string) => {
    const response = await api.patch('/addTask', {
        title,
        listId,
        ownerId: userId
    });

    return response;
}

export const completeTask = async (taskId: string) => {
    const response = await api.patch(`/completeTask/${taskId}`);

    return response;
}