import axios from "axios";

const API_URL = "http://localhost:8080/api/bookmarks";

export const getAllBookmarks = () => {
  return axios.get(API_URL);
};

export const getBookmarkById = (id) => {
  return axios.get(`${API_URL}/${id}`);
};

export const saveBookmark = (bookmark) => {
  return axios.post(`${API_URL}/save`, bookmark);
};

export const updateBookmark = (id, bookmark) => {
  return axios.put(`${API_URL}/${id}`, bookmark);
};

export const deleteBookmark = (id) => {
  return axios.delete(`${API_URL}/${id}`);
};
