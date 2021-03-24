import React from 'react';
import List from '../components/List';
import Orclist from '../components/OrcList';
import '../styles/Main.css';

const Main: React.FC = () => {
  return (
      <div className="Main">
          <div className="mainHeader">
            <Orclist />
          </div>
          <div className="listContainer">
            <div className="testingList">
                <div className="listHeader">
                    <span>Titulo da Lista</span>
                    <div className="listHeaderButtons">
                        <button>+</button>
                        <button>-</button>
                    </div>
                </div>
                <div className="taskContainer">
                    <div className="testingTask"/>
                    <div className="testingTask"/>
                    <div className="testingTask"/>
                    <div className="testingTask"/>
                    <div className="testingTask"/>
                    <div className="testingTask"/>
                    <div className="testingTask"/>    
                </div>
            </div>
            <div className="testingList">
                <div className="listHeader">
                    <span>Titulo da Lista</span>
                    <div className="listHeaderButtons">
                        <button>+</button>
                        <button>-</button>
                    </div>
                </div>
                <div className="taskContainer">
                    <div className="testingTask"/>
                    <div className="testingTask"/>
                    <div className="testingTask"/>
                    <div className="testingTask"/>
                    <div className="testingTask"/>
                    <div className="testingTask"/>
                    <div className="testingTask"/>    
                </div>
            </div>
            <div className="testingList">
                <div className="listHeader">
                    <span>Titulo da Lista</span>
                    <div className="listHeaderButtons">
                        <button>+</button>
                        <button>-</button>
                    </div>
                </div>
                <div className="taskContainer">
                    <div className="testingTask"/>
                    <div className="testingTask"/>
                    <div className="testingTask"/>
                    <div className="testingTask"/>
                    <div className="testingTask"/>
                    <div className="testingTask"/>
                    <div className="testingTask"/>    
                </div>
            </div>
            <div className="testingList">
                <div className="listHeader">
                    <span>Titulo da Lista</span>
                    <div className="listHeaderButtons">
                        <button>+</button>
                        <button>-</button>
                    </div>
                </div>
                <div className="taskContainer">
                    <div className="testingTask"/>
                    <div className="testingTask"/>
                    <div className="testingTask"/>
                    <div className="testingTask"/>
                    <div className="testingTask"/>
                    <div className="testingTask"/>
                    <div className="testingTask"/>    
                </div>
            </div>
          </div>
      </div>
  );
}

export default Main;