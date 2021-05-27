import { timingSafeEqual } from 'crypto';
import React, { FC } from 'react';
import { ITask } from '../interfaces';

interface Props {
    task: ITask;
}

const TodoTask = ({task}: Props) => {
    return(
        <div>
            {task.taskName} {task.taskDeadline}
        </div>
    );
};

export default TodoTask;