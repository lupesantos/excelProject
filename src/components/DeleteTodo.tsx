"use client"

import styled from 'styled-components'
import { useRouter } from 'next/navigation'
import { useState, useTransition, ChangeEvent, MouseEvent } from 'react'
import { AiOutlineDelete} from 'react-icons/ai'
import { deleteTodos } from '@/lib/todos'

export default function DeleteTodo({
  id
}:{
  id: number
}){
    const router = useRouter()
    const [isPending, startTransition] = useTransition()
    const [isFetching, setIsFetching] = useState(false)
    
  const handleDelete = async (e: MouseEvent<HTMLButtonElement>) => {
    setIsFetching(true)
    deleteTodos({id})
    setIsFetching(false)
    startTransition(() => {
        router.refresh()
    })
}
  return (
  <>
      <DeleteButton onClick={handleDelete}><AiOutlineDelete size={20}/></DeleteButton>
  </>
  )
}

const DeleteButton = styled.button`
  width: 35px;
  height: 35px;
  background-color: green;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  border-radius: 0 5px 0 0;
  position: absolute;
  top: 0;
  right: 0;

  cursor: pointer;

  &:hover {
    background-color: #7ca785;
  }

`;