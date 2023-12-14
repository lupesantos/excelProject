"use client"

import styled from 'styled-components'
import { toDoItemType } from "@/types/itemTypes";
import DeleteTodo from '../DeleteTodo';
import EditTodo from '../EditTodo';
import { useState } from 'react'
import { AiOutlineEdit} from 'react-icons/ai'
import CheckTodo from '../CheckTodo';



export default function Item({
  item,
  position,
  status,
}: {
  item:toDoItemType,
  position: number,
  status: string,
}){
  const [editBox, setEditBox] = useState(false)

  return(
    <>
    <ItemBox>
      <NumberId>{position}</NumberId>
      <Description>{item.description}</Description>
      <CheckTodo 
        status={item.status} 
        id={item.id}/>
      <DeleteTodo id={item.id}/> 
      <DeleteButton onClick={()=>{setEditBox(!editBox)}}>
        <AiOutlineEdit size={20}/>
      </DeleteButton>
    </ItemBox>
    {editBox ? (
      
        <EditTodo 
          id={item.id} 
          editBox={editBox}
          setEditBox={setEditBox}
        />
      
     ) : (<></>)}
    </>
  )
//Bearer 97f696ef-61f3-43c4-a4a7-50665c2c225e
}

const ItemBox = styled.div`
  width: 100%;
  height: 70px;
  background-color: #5e2eb6;
  padding-left: 10px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
  border-radius: 5px;
  position: relative;

  &:last-child{
    margin-bottom: 0;
  }
`;

const NumberId = styled.div`
  width: 50px;
  height: 50px;
  font-size:15px;
  background-color: #5979d1;
  color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;

`;

const DeleteButton = styled.button`
  width: 35px;
  height: 35px;
  background-color: green;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  border-radius: 0 0 5px 0;
  position: absolute;
  bottom: 0;
  right: 0;

  cursor: pointer;

  &:hover {
    background-color: #7ca785;
  }

`;
