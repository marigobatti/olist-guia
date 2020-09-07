import { api } from './';


export async function index() {
  const response = await api.get('/progressos');

  return response && response.data;
}

export async function store(payload) {
  const response = await api.post('/progressos', payload);

  return response && response.data;
}