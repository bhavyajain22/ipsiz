import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
import {API_ENDPOINT} from '../assets/environment';

const axiosInstance = axios.create({
  baseURL: API_ENDPOINT,
});

axiosInstance.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      config.headers.Authorization = 'Bearer ' + token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default axiosInstance;
