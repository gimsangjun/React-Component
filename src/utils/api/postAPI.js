import axios from "./axiosInstance";

const API_DOMAIN = process.env.REACT_APP_API_DOMAIN;

class PostAPI {
  // GET /post
  static async getAllPosts() {
    try {
      const response = await axios.get(`${API_DOMAIN}/post`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  // POST /post
  static async createPost(postData) {
    try {
      const response = await axios.post(`${API_DOMAIN}/post`, postData);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  // PUT /post/:id
  static async updatePost(postId, updatedPostData) {
    try {
      const response = await axios.put(`${API_DOMAIN}/post/${postId}`, updatedPostData);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  // DELETE /post/:id
  static async deletePost(postId) {
    try {
      const response = await axios.delete(`${API_DOMAIN}/post/${postId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  // GET /post/:id
  static async getPostById(postId) {
    try {
      const response = await axios.get(`${API_DOMAIN}/post/${postId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}

export default PostAPI;
