import React, {useState, useEffect} from 'react';
import List from '../components/List';
import TaskCard from '../components/TaskCard';
import Orclist from '../components/OrcList';
import {DeleteButton, AddButton} from '../components/ListButton';
import userPic from '../assets/user.svg';
import { getCurrentUser } from '../services/auth';
import { listToDo } from '../services/list';
import '../styles/Main.css';
import CreateList from '../components/CreateListButton';
import CreateListModal from '../components/CreateListModal';

const Main: React.FC = () => {
    const [user] = useState<any>(getCurrentUser());
    const [lists, setLists] = useState<any>([]);
    const [createList, setCreateList] = useState<boolean>(false);

    useEffect(() => {
        async function getLists () {
            const response = await listToDo(user._id);
            setLists(response);
        }
        getLists();
    }, [user]);
    
    const formatName = (name: string) => {
        const splittedName = name.split(' ');
        const nameSize = splittedName.length;
        return splittedName[0] + (nameSize > 1 ? ` ${splittedName[nameSize-1]}` : '');
    }
    
  return (
      <div className="Main">
          <div className="mainHeader">
            <Orclist />
            <div className="profile">
                <img alt="mock" src={user.profile_pic ? `http://localhost:5050/files/${user.profile_pic}` : userPic}/>
                <h2>{formatName(user.name)}</h2>
            </div>
            <CreateList onClick={() => setCreateList(true)}>Criar Lista</CreateList>
          </div>
          <div className="listContainer">

            { lists.length > 0 ? lists.map((list:any) => (
                <List key={list._id}>
                    <div className="listHeader" >
                        <span>{list.title}</span>
                        <div className="listHeaderButtons">
                            <AddButton/>
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
          { createList ? (
              <CreateListModal id="modalBlur" onClose={() => setCreateList(false)}/>
          ) : null}
      </div>
  );
}

export default Main;