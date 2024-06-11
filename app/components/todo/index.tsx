import { CiStar } from "react-icons/ci";
import { BiCircle } from "react-icons/bi";

import { FaStar } from "react-icons/fa6";
import { TodoEntityType } from "@/types/todo";
import { FC } from "react";
import { BiChevronDownCircle } from "react-icons/bi";
import { useUpdateTodo } from "@/lib/hooks/useFetchData";

type TodoType = TodoEntityType & {
  refetch:() => void
}

const Todo:FC<TodoType> = (props:TodoType) => {
  const { status, title, important, id, refetch } = props;

  const updateTodoMutation = useUpdateTodo();

  const handleUpdateTodo = async (updatedData: Partial<TodoEntityType>) => {
    try {
      await updateTodoMutation.mutateAsync({ id, data: updatedData });
      refetch()
    } catch (error) {
      console.error('Failed to update todo:', error);
    }
  };

  const handleStatusToggle = () => {
    const newStatus = status === 'completed' ? 'in-progress' : 'completed';
    handleUpdateTodo({ ...props, status: newStatus });
  };

  const handleImportantToggle = () => {
    const newImportant = !important;
    handleUpdateTodo({ ...props,important: newImportant });
  };

  return (
    <div className='flex items-center justify-between w-11/12 p-3 mt-2 bg-white rounded shadow-md'>
      <div className='flex items-center gap-4 text-2xl text-blue-600'>
        <button onClick={handleStatusToggle}>
          {status === "completed" ? (
            <BiChevronDownCircle className='btn-icon' />
          ) : (
            <BiCircle className='btn-icon' />
          )}
        </button>
        <div className='text-left'>
          <p className='text-sm font-bold text-black'>{title}</p>
        </div>
      </div>
      <div className='flex items-center gap-4 text-2xl text-blue-500'>
        <button onClick={handleImportantToggle}>
          {important ? (
            <FaStar className='btn-icon' />
          ) : (
            <CiStar className='btn-icon' />
          )}
        </button>
      </div>
    </div>
  )
}

export default Todo
