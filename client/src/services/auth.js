import { api } from './';


export async function login(params) {
  const response = await api.post('/login', {
    email: params.email,
    password: params.password,
  });

  return response && response.data;
}