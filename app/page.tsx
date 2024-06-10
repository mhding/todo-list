"use client"; 

import { useFetchData } from '../lib/hooks/useFetchData';
import Counter from './components/Counter';

const Home = () => {
  const { data, isLoading, error } = useFetchData('/data-endpoint');

  if (isLoading) return <div>Loading...</div>;
  // if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl">Hello world</h1>
      <Counter />
      <div>Data from API: {JSON.stringify(data)}</div>
    </div>
  );
};

export default Home;
