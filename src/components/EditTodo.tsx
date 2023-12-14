"use client"

import styled from 'styled-components'
import { useRouter } from 'next/navigation'
import { useState, useTransition, ChangeEvent, MouseEvent } from 'react'
import { FiPlay } from 'react-icons/fi'
import { editTodos } from '@/lib/todos'

export default function EditTodo({
  id,
  editBox,
  setEditBox
}:{
  id: number,
  editBox: boolean,
  setEditBox: React.Dispatch<React.SetStateAction<boolean>>
}){
    const router = useRouter()
    const [isPending, startTransition] = useTransition()
    const [isFetching, setIsFetching] = useState(false)
    const [editDescription, setEditDescription] = useState('');

  const handleEdit = async (e: React.FormEvent) => {
    setIsFetching(true)
    editTodos({id, editDescription})
    setEditBox(!editBox)
    setIsFetching(false)
    startTransition(() => {
        router.refresh()
    })
}

const handleEnterKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
  if (e.key === 'Enter') {
    handleEdit(e);
  }
};

  return (
      <ItemBox>
        <input 
          type='text'
          placeholder='Edite sua tarefa!' 
          value={editDescription} 
          onChange={
            (e) => setEditDescription(e.target.value as any)}
          onKeyDown={handleEnterKeyPress}/>
        <ConfirmButton onClick={handleEdit}>
          <FiPlay size={20}/>
        </ConfirmButton>
      </ItemBox>
  )
}

const ItemBox = styled.div`
  width: 100%;
  height: 70px;
  padding-left: 10px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  background-color: #5e2eb6;
  gap: 10px;
  border-radius: 5px;
  position: relative;

  & > input{
        padding-left: 20px;
        height: 60%;
        width: calc(100% - 45px);
        color: black;
        border: none;
        border-radius: 6px;
    }
    & > input:focus {
        outline: none;
        border-color: var(--input-border-focus);
    }

  &:last-child{
    margin-bottom: 0;
  }
`;

const ConfirmButton = styled.button`
  width: 35px;
  height: 70px;
  background-color: green;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  border-radius: 0 5px 5px 0;
  position: absolute;
  top: 0;
  right: 0;

  cursor: pointer;

  &:hover {
    background-color: #7ca785;
  }

`;

