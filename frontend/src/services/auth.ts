import api from './api';

export const login = async (email: string, password: string) => {
    const response = await api.post("/login", {
        email,
        password
    });
    const {token} = response.data;
    const {user} = response.data;
    console.log(user);
    if(token){
        localStorage.setItem("@orclist/user_token", JSON.stringify(token));
        localStorage.setItem("@orclist/user_info", JSON.stringify(user));
    }
    return response;
}

export const register = async (data: FormData) => {
    const response = await api.post('/register', data);
    console.log(response);
    return response;
}

export const getCurrentUser = () => {
    const user: any = localStorage.getItem('@orclist/user_info');
    console.log(JSON.parse(user));
    return JSON.parse(user);
}

export const getUser = async (id: string) => {
    const response = await api.get(`/user/${id}`);

    console.log(response.data);
    return response.data;
}