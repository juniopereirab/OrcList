import api from './api';

export const login = async (email: string, password: string) => {
    const response = await api.post("/login", {
        email,
        password
    });
    const {token} = response.data;
    const {user} = response.data;
    if(token){
        localStorage.setItem("@orclist/user_token", JSON.stringify(token));
        localStorage.setItem("@orclist/user_info", JSON.stringify(user));
    }
    return response;
}

export const register = async (data: FormData) => {
    const response = await api.post('/register', data);
    return response;
}

export const getCurrentUser = () => {
    const user: any = localStorage.getItem('@orclist/user_info');
    return JSON.parse(user);
}

export const getUser = async (id: string) => {
    const response = await api.get(`/user/${id}`);

    console.log(response.data);
    return response.data;
}