import axios from "axios";
const url = "http://localhost:3001/api/notes";

let token = null;

const setToken = (newToken) => {
  token = `Bearer ${newToken}`;
};

const getAll = () => {
  const request = axios.get(url);
  console.log("get req:", request);
  return request.then((response) => {
    console.log("got response data:", response.data);
    return response.data;
  });
};

const create = async (newObject) => {
  const config = {
    headers: { Authorization: token },
  };

  const response = await axios.post(url, newObject, config);
  return response.data;
};

const update = (id, newObject) => {
  const request = axios.put(`${url}/${id}`, newObject);
  return request.then((response) => response.data);
};

export default {
  getAll,
  create,
  update,
  setToken,
};
