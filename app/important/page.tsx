"use client"; 
import useStore from '@/store';
import { useFetchData } from '../../lib/hooks/useFetchData';
import AddTodo from '../components/addTodo';
import Loading from '../components/loading';
import Todo from '../components/todo';

const Important = () => {
  const todos = useStore((state) => state.todos);
  const setTodosIndex = useStore((state) => state.setTodosIndex);
  
  const  { isLoading, refetch } = useFetchData("/todos", {
    onSuccess:(data:any) => {
      setTodosIndex(data)
    }
  })


  if (isLoading) return <div><Loading /></div>;

  return (
    <div className="container mx-auto p-4">
      <p className='mb-4 text-2xl mt-7'>important</p>
      {todos?.map((item,index) => item.important  && <Todo refetch={refetch} key={index} {...item} />)}

    </div>
  );
};

export default Important;
