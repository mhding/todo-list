"use client"; 

import useStore from '../../store';

const Counter = () => {
  const { count, increment } = useStore();

  return (
    <div>
      <h1 className="text-2xl">{count}</h1>
      <button className="px-4 py-2 bg-blue-500 text-white" onClick={increment}>
        Increment
      </button>
    </div>
  );
};

export default Counter;
