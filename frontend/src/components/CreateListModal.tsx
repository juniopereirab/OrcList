import React, {useState} from 'react';
import { ModalBlur, ModalContent } from './Modal';
import LoginInput from './LoginInput';
import CreateList from './CreateListButton';
import { getCurrentUser } from '../services/auth';
import { createList } from '../services/list';

interface ModalProps {
    id: string;
    onClose: any;
}

const CreateListModal = ({id, onClose = () => {}}:ModalProps) => {

    const [title, setTitle] = useState<string>('');

    const handleOutsideClick = (e: any) => {
        if(e.target.id === id){
            onClose();
        }
    }

    const handleCreateList = async () => {
        const user = getCurrentUser();
        console.log(user);

        const response = await createList(user._id, title);
        console.log(response);
        window.location.reload();
    }
  
    return (
        <ModalBlur id={id} onClick={handleOutsideClick}>
            <ModalContent>
                <label id="inputLabel">Titulo da Lista</label>
                <LoginInput value={title} onChange={(e) => setTitle(e.target.value)}/>
                <CreateList onClick={() => handleCreateList()}>Criar</CreateList>
            </ModalContent>
        </ModalBlur>
    );
}

export default CreateListModal;