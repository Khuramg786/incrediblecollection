// src/Api/Apidata.js
import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

// ✅ GET all posts
export const getdata = () => {
  return api.get("/posts");
};

// ✅ DELETE post by ID
export const deletePost = (id) => {
  return api.delete(`/posts/${id}`);
};

// ✅ update data post by ID
export const postData = (post) => {
  return api.post("/posts", post);
};
