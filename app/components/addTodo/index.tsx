import React, { useState } from 'react'
import { SlCalender } from "react-icons/sl";
import { HiOutlineBellAlert } from "react-icons/hi2";
import { IoRepeat } from "react-icons/io5";
import { CiCirclePlus } from "react-icons/ci";
import useStore from '@/store';
import queryClient from '@/lib/queryClient';
import { usePostData } from '@/lib/hooks/useFetchData';

const AddTodo = () => {

  const [value,setValue] = useState<string>('');
  const todos = useStore(state => state.todos);

  const currentDATE = () => {
    var today:any = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
    today = yyyy + '/' + mm + '/' + dd ;
    return today;
  }

  const mutation = usePostData("/todos",
    {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['todos'] })
      },
    }
  )

  const addTodoHandler = () => {
    const newTodo = {
      id: todos.length + 1 + "",
      title: value,
      status: "in-progress",
      data: currentDATE(),
      important: false,
    };
    mutation.mutate(newTodo)
  };

  return (
    <form onSubmit={addTodoHandler}>
        <div className='flex items-center w-11/12 gap-3 p-4 mt-6 text-blue-600 bg-white rounded-t shadow-md'>
          <CiCirclePlus />
          <input value={value} onChange={e => setValue(e.currentTarget.value)} type='text' className='w-11/12 text-gray-800 input  focus:' placeholder='Add a task' />
      </div>
      <div className='flex justify-between w-11/12 p-2 px-4 bg-gray-100 rounded-b shadow-md'>
          <div className='flex items-center gap-2 text-gray-600'><HiOutlineBellAlert /><SlCalender /><IoRepeat /></div>
          <button 
          type='submit'
          className='p-2 text-gray-600 bg-white'
          >Add</button>
        </div>
    </form>
  )
}

export default AddTodo
