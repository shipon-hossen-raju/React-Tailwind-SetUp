import axios from "axios";
import { useEffect } from "react";
// import useAuth from './useAuth';

// const baseURL = "http://localhost:3000";
const baseURL = "https://classicitmarket.vercel.app";

const axiosSecure = axios.create({ baseURL });

const useAxiosSecure = () => {
  useEffect(() => {
    axiosSecure.interceptors.request.use((config) => {
      const token = localStorage.getItem("access-token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });
  }, []);

  return { axiosSecure, baseURL };
};

export default useAxiosSecure;
