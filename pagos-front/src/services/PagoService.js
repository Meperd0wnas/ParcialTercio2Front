import axios from 'axios';
const API_URL = 'http://localhost:8080/pagos';



// obtener un pago por ID
export const obtenerPago = async (id) => {
  try {
    await axios.get(`${API_URL}/${id}`);
  } catch (error) {
    console.error('Error al obtener el pago:', error);
  }
};

