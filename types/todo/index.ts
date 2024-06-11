export type TodoEntityType = {
    id: string,
    title: string,
    status:"completed" | "in-progress",
    data:string,
    important: true | false
  }
  export interface State {
    todos: TodoEntityType[]
    setTodosIndex: (data: TodoEntityType[]) => Promise<void>,
  }