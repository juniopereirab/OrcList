import React, {useState} from 'react';
import Task from './Task';
import Checkbox from './Checkbox';
import '../styles/TaskCard.css';
import check from '../assets/check.svg'


const TaskCard: React.FC = () => {
    const [checked, setChecked] = useState(false);
  return (
      <Task>
          <div className="taskContent">
            <Checkbox checked={checked} onClick={() => setChecked(!checked)} image={check}/>
            <div className="taskInfo">
                <h3>Titulo da tarefa</h3>
                <span>Descricao da tarefa</span>
            </div>
          </div>
      </Task>
  );
}

export default TaskCard;