import axios from 'axios';

const API_URL = 'https://6a0d8ee5769682b8ee766d1d.mockapi.io';

export const getRestaurants = async () => {
  try {
    const response = await axios.get(`${API_URL}/restaurants`);
    return response.data;
  } catch (error) {
    console.error("Error fetching restaurants:", error);
    throw error; // Melempar error agar bisa ditangkap oleh komponen
  }
};

export const getRestaurantById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/restaurants/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching detail:", error);
    throw error;
  }
};