"use client"; 
import useStore from '@/store';
import { useFetchData } from '../lib/hooks/useFetchData';
import AddTodo from './components/addTodo';
import Loading from './components/loading';
import Todo from './components/todo';

const Home = () => {
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
      <p className='mb-4 text-2xl'>MY DAY</p>
      <AddTodo />
      {todos?.map((item,index) => item.status != "completed" && <Todo refetch={refetch} key={index} {...item} />)}
      {todos?.some(item => item.status == "completed") && <>
      <p className='mb-4 text-2xl mt-7'>COMPLETED</p>
      {todos?.map((item,index) => item.status == "completed" && <Todo refetch={refetch} key={index} {...item} />)}
      
      </>}

    </div>
  );
};

export default Home;
