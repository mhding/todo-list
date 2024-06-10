import { useQuery } from 'react-query';
import axiosInstance from '../axios';

const fetcher = async (url: string) => {
  const response = await axiosInstance.get(url);
  return response.data;
};

export const useFetchData = (endpoint: string) => {
  return useQuery(endpoint, () => fetcher(endpoint));
};
