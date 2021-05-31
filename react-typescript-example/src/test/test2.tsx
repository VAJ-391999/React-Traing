import React, {useState, useEffect, ChangeEvent, FC} from 'react';

import '../App.css';
//import Test from './test/test';
import {ITask} from '../interfaces';
import TodoTask from '../component/TodoTask';


const Test2: FC = () => {

  const[task, setTask] = useState<string>("");
  const[deadLine, setDeadLine] = useState<number>(0);
  const[todoList, setTodoList] = useState<ITask[]>([]);

  const changeHandler = (event : ChangeEvent<HTMLInputElement>): void => {
    if(event.target.name === "task") {
      setTask(event.target.value);
    }else  {
      setDeadLine(Number(event.target.value));
    }
    
  };

  const addTask = (): void => {
    const newTask = {taskName: task, taskDeadline: deadLine};
    setTodoList([...todoList, newTask]);
    console.log(todoList);
    setTask("");
    setDeadLine(0);
  };

  return (
    <div className="App">
     <div className="header">
        <div className="inputForm">
          <input type="text" placeholder="Task..." value={task} onChange={changeHandler} name="task"/>
          <input type="number" placeholder="DeadLine in Days..."  onChange={changeHandler} name="deadLine"/>
        </div>
        <button onClick={addTask}>Add Task</button>



     </div>
     <div className="todoList">
       {todoList.map((task: ITask, key: number) => {
         return <TodoTask key={key} task={task} />
       })}
     </div>
    </div>
  );
}

export default Test2;
