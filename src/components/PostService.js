import http from "./http-common";
const signIn = user => {
  return http.post("/users/sign_in", { user: user });
};
const signUp = user => {
  return http.post("/users", {user: user});
};
const getAll = () => {
  return http.get("/posts");
};
const get = id => {
  return http.get(`/posts/${id}`);
};
const create = post => {
  return http.post("/posts", post);
};
const update = (id, data) => {
  return http.put(`/posts/${id}`, data);
};
const remove = id => {
  return http.delete(`/posts/${id}`);
};
const removeAll = () => {
  return http.delete(`/posts`);
};
const findByTitle = title => {
  return http.get(`/posts?title=${title}`);
};
const like = id => {
  return http.put(`/post/${id}/like`);
};
const like_count = id => {
  return http.get(`/post/${id}/like_count`);
};
const createComment = (post_id, data) => {
  return http.post(`/posts/${post_id}/comments`, data);
};
const getComments = post_id => {
  return http.get(`/posts/${post_id}/comments`);
};
const PostService = {
  getAll,
  createComment,
  getComments,
  like_count,
  like,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle,
  signIn,
  signUp
};


export default PostService;