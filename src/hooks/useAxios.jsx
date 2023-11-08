/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "https://booknin-server.vercel.app",
  withCredentials: true,
});

const useAxios = () => {
  return axiosInstance;
};

export default useAxios;
