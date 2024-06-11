"use client"; 
import React from 'react'
import Link from 'next/link';
import { GoSun } from "react-icons/go";
import { CiStar } from "react-icons/ci";
import { CiCircleCheck } from "react-icons/ci";
import useStore from '@/store';


const Aside = () => {
  
  const todos = useStore(state => state.todos); // Adjust this according to your store structure

  return (
    <div className="w-full pt-1 bg-white border-r-2 md:pt-8 h-fit md:h-screen md:w-1/5 text-black-600">
      <Link className={`flex items-center p-4 w-full gap-4 pb-2 text-center btn-icon`} href={'/'}>
          <GoSun />
          <p className='flex-grow text-left'>My Day</p>
          <span className='text-right text-gray-500'>{todos.length}</span>
      </Link>
      <Link className={`flex items-center w-full p-4 gap-4 pb-2 text-center btn-icon `} href={'/important'}>
          <CiStar />
          <p className='flex-grow text-left'>Important</p>
          <span className='text-right text-gray-500'>{todos.filter(t => t.important).length}</span>
      </Link>
      <Link className={`flex items-center w-full p-4 gap-4 pb-2 text-center btn-icon `} href={'/completed'}>
          <CiCircleCheck />
          <p className='flex-grow text-left'>Completed</p>
          <span className='text-right text-gray-500'>{todos.filter(t => t.status == "completed").length}</span>
      </Link>
    </div>
  )
};

export default Aside;
