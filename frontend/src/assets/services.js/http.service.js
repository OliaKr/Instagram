import Axios from "axios";

// const BASE_URL = "http://localhost:4000/";
const BASE_URL = "https://olia-insta-server.onrender.com/";

export const httpService = {
  async get(endpoint, data) {
    try {
      let result = await Axios.get(`${BASE_URL}${endpoint}`, data);
      return result;
    } catch (error) {
      console.log(error);
    }
  },
  async post(endpoint, data) {
    try {
      let result = await Axios.post(`${BASE_URL}${endpoint}`, data);
      return result;
    } catch (error) {
      console.log(error);
    }
  },
  async put(endpoint, data) {
    try {
      let result = await Axios.put(`${BASE_URL}${endpoint}`, data);
      return result;
    } catch (error) {
      console.log(error);
    }
  },
  async delete(endpoint, data) {
    try {
      let result = await Axios.delete(`${BASE_URL}${endpoint}`, {
        headers: { 'X-Delete-Data': JSON.stringify(data) }
      });
      return result;
    } catch (error) {
      console.log(error);
    }
  }
};
