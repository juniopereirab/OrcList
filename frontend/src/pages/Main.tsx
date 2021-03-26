import React, {useState, useEffect} from 'react';
import List from '../components/List';
import TaskCard from '../components/TaskCard';
import Orclist from '../components/OrcList';
import {DeleteButton, CompleteButton} from '../components/ListButton';
import userPic from '../assets/user.svg';
import { getCurrentUser } from '../services/auth';
import { listToDo } from '../services/list';
import '../styles/Main.css';

const Main: React.FC = () => {
    const [user] = useState<any>(getCurrentUser());
    const [lists, setLists] = useState<any>([]);

    useEffect(() => {
        async function getLists () {
            const response = await listToDo(user._id);
            setLists(response);
        }
        getLists();
    }, [user]);
    
    
  return (
      <div className="Main">
          <div className="mainHeader">
            <Orclist />
            <div className="profile">
                <img alt="mock" src={userPic}/>
                <h2>{user.name}</h2>
            </div>
          </div>
          <div className="listContainer">

            { lists.length > 0 ? lists.map((list:any) => (
                <List key={list._id}>
                    <div className="listHeader" >
                        <span>{list.title}</span>
                        <div className="listHeaderButtons">
                            <CompleteButton/>
                            <DeleteButton />
                        </div>
                    </div>
                    <div className="taskContainer">
                        { list.tasks.length > 0 ? list.tasks.map((task:any) => (
                            <TaskCard key={task._id} title={task.title} description={task.description}/>
                        )) : null}
                    </div>
                </List>
            )) : null }
          </div>
      </div>
  );
}

export default Main;