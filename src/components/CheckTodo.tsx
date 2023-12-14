"use client"

import styled from 'styled-components'
import { TiDeleteOutline } from 'react-icons/ti'
import { BsCheckLg } from 'react-icons/bs'
import { useRouter } from 'next/navigation'
import { useState, useTransition, ChangeEvent, MouseEvent } from 'react'
import { checkTodos } from '@/lib/todos'

export default function CheckTodo({
  status,
  id,
}:{
  status: string,
  id: number,
}){

  const router = useRouter()
  const [isPending, startTransition] = useTransition()
  const [isFetching, setIsFetching] = useState(false)

  const handleCheck = async (e: MouseEvent<HTMLButtonElement>) => {
    setIsFetching(true)
    checkTodos({id, status})
    setIsFetching(false)
    startTransition(() => {
        router.refresh()
    })
}

  return(
    <Container>
      <CheckBox 
        $clicked={status}>
        {status == 'check' ? 
          (<BsCheckLg size={20}/>) 
            : 
          (<TiDeleteOutline size={25} color='white'/>)}
        <ButtonBall 
          $clicked={status}
          onClick={handleCheck}/>
      </CheckBox>
    </Container>
  )
}
const Container = styled.div`
  position: absolute;
  right: 40px;

`;

const CheckBox = styled.div<CheckBoxProps>`
  width: 60px;
  aspect-ratio: 2 / 1;
  background-color: ${(props) =>
    props.$clicked == 'check' ? "green" : "crimson"};
  border-radius: 20px;
  display: flex;
  position: relative;
  align-items: center;
  padding-left: ${(props) =>
    props.$clicked == 'check' ? "6px" : "32px"};
  transition: background-color 0.3s ease;

`;


interface CheckBoxProps {
  $clicked: string;
}
const ButtonBall = styled.button<CheckBoxProps>`
  width: 33.33%;
  aspect-ratio: 1 / 1;
  background-color: #ffffff;
  border-radius: 10px;
  position: absolute;
  right: ${(props) => props.$clicked == 'check' ? "5px" : "35px"};
  bottom: 5px;
  box-shadow: ${(props) => props.$clicked == 'check' ? 
    "-2px 1px 2px 1px rgba(0, 0, 0, 0.3)" 
      : 
    "2px 1px 2px 1px rgba(0, 0, 0, 0.3)"};
  transition: right 0.3s ease;
  cursor: pointer;

`;



