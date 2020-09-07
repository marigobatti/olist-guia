import { create } from 'apisauce';

const API_URL = 'http://localhost:3333';

export const api = create({
  baseURL: API_URL,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
});