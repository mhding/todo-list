import { useMutation, useQuery } from 'react-query';
import axiosInstance from '../axios';
import { TodoEntityType } from '@/types/todo';

export const fetcher = async (url: string,method: "post" | "put" | "get" ,payload?:any) => {
  const response = await axiosInstance[method](url,payload);  
  return method == "put" ? response.data.data : response.data;
};

export const useFetchData = (endpoint: string,options = {}) => {
  return useQuery(endpoint, () => fetcher(endpoint,'get'),options);

};

export const usePostData = (endpoint: string,options = {}) => {
  return useMutation((payload) => fetcher(endpoint, 'post', payload), options);
};

export const usePutData = (endpoint: string,options = {}) => {
  return useMutation((payload) => fetcher(endpoint, 'put',payload), options);
};

export const useUpdateTodo = () => {
  return useMutation(async ({ id, data }: { id: string; data: Partial<TodoEntityType> }) => {
    const response = await axiosInstance.put(`/todos/${id}`, data);
    return response.data;
  });
};