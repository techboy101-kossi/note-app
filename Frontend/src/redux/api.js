import axios from 'axios';

// const baseURL = 'http://localhost:8080/api';
const baseURL = "https://note-app-backend-gamma.vercel.app/api";

const API = axios.create({ baseURL: baseURL });

export const signInUser = (userData) => API.post('/auth/signin', userData)

export const signUpUser = (userData) => API.post("/auth/signup", userData);

export const listIncomes = () => API.get('/incomes');

export const createIncome = (incomeData) =>
	API.post('/incomes/create', incomeData);

export const deleteIncome = (incomeId) =>
	API.delete(`/incomes/delete/${incomeId}`);

export const listAllNotes = ()=> API.get('/notes')
