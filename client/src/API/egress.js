import axios from './axios';

//Obtener todos los gastos
export const getExpenses = async () => axios.get('/user/egress');

//Agregar un gasto
export const addExpenses = async (Expenses) =>
  axios.post('/user/egress', Expenses);

//Eliminar un gasto
export const deleteExpenses = async (id) => axios.delete(`/user/egress/${id}`);
