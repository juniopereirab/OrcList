import React from 'react';
import Task from './Task';
import Checkbox from './Checkbox';
import '../styles/TaskCard.css';
import check from '../assets/check.svg'

interface TaskCardProps{
    title: string;
    description: string;
    onClick: any;
    checked: boolean;
}


const TaskCard: React.FC <TaskCardProps> = ({title, description, onClick, checked}) => {

  return (
      <Task>
          <div className="taskContent">
            <Checkbox checked={checked} onClick={onClick} image={check}/>
            <div className="taskInfo">
                <h3>{title}</h3>
                <span>{description}</span>
            </div>
          </div>
      </Task>
  );
}

export default TaskCard;