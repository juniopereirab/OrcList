import React from 'react';
import List from '../components/List';
import TaskCard from '../components/TaskCard';
import Orclist from '../components/OrcList';
import {DeleteButton, CompleteButton} from '../components/ListButton';
import '../styles/Main.css';

const Main: React.FC = () => {
  return (
      <div className="Main">
          <div className="mainHeader">
            <Orclist />
            <div className="profile">
                <img src="https://cdn.fastly.picmonkey.com/contentful/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=800&q=70" />
                <h2>Nome Pessoa</h2>
            </div>
          </div>
          <div className="listContainer">
            <List>
                <div className="listHeader">
                    <span>Titulo da Lista</span>
                    <div className="listHeaderButtons">
                        <CompleteButton/>
                        <DeleteButton />
                    </div>
                </div>
                <div className="taskContainer">
                    <TaskCard title={"Titulo da tarefa"} description="kappa"/>
                </div>
            </List>
          </div>
      </div>
  );
}

export default Main;