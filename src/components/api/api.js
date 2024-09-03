import axios from "axios";
export const BACKEND_ENDPOINT = " https://xcountries-backend.azurewebsites.net";

export const fetchCountries = async () => {
  try {
    const response = await axios.get(`${BACKEND_ENDPOINT}/all`);
    console.log('data',response.data);
    return response.data;
  } catch (e) {
    console.error(e);
  }
};