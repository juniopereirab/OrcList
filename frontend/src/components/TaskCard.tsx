import React, {useState} from 'react';
import Task from './Task';
import Checkbox from './Checkbox';
import '../styles/TaskCard.css';
import check from '../assets/check.svg'

interface TaskCardProps{
    title: string;
    description: string;
}


const TaskCard: React.FC <TaskCardProps> = ({title, description}) => {
    const [checked, setChecked] = useState(false);
  return (
      <Task>
          <div className="taskContent">
            <Checkbox checked={checked} onClick={() => setChecked(!checked)} image={check}/>
            <div className="taskInfo">
                <h3>{title}</h3>
                <span>{description}</span>
            </div>
          </div>
      </Task>
  );
}

export default TaskCard;