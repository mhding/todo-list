"use client"; 

import { useFetchData } from '../lib/hooks/useFetchData';
import Counter from './components/Counter';

const Home = () => {
  const { data, isLoading, error } = useFetchData('/todos');

  if (isLoading) return <div>Loading...</div>;
  // if (error) return <div>Error: {error.message}</div>;


  {console.log("JSON.stringify(data)",data)}

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl">Hello world</h1>
      <Counter />
      {/* <div>Data from API: {JSON.stringify(data)}</div> */}
    </div>
  );
};

export default Home;
