import axios from "./axiosInstance";

const API_DOMAIN = process.env.REACT_APP_API_DOMAIN;

class AuthAPI {
  static async login(username, password) {
    try {
      const response = await axios.post(`${API_DOMAIN}/auth/login`, { username, password });
      return response;
    } catch (error) {
      throw error;
    }
  }

  static async signUp(username, password) {
    try {
      const response = await axios.post(`${API_DOMAIN}/auth/signup`, { username, password });
      return response;
    } catch (error) {
      throw error;
    }
  }

  static async logout() {
    try {
      await axios.get(`${API_DOMAIN}/auth/logout`);
    } catch (error) {
      throw error;
    }
  }

  static async getProfile() {
    try {
      const response = await axios.get(`${API_DOMAIN}/auth/profile`);
      return response;
    } catch (error) {
      throw error;
    }
  }
}

export default AuthAPI;
