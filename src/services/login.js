import axios from "axios";
const url = "http://localhost:3001/api/login";

const login = async (credintials) => {
  const response = await axios.post(url, credintials);
  console.log("loggedin", response.data);
  return response.data;
};
export default { login };
