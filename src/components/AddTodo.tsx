"use client"

import { useRouter } from "next/navigation"
import { useState, useTransition, FormEvent, ChangeEvent } from 'react'
import { usePathname } from "next/navigation"
import { toDoItemType } from "@/types/itemTypes"
import InputWrapper from "./common/inputWrapper"
import styled from 'styled-components'
import { FiPlay } from 'react-icons/fi'
import { postTodos } from "@/lib/todos"

const initState: Partial<toDoItemType> = {
    description: "",
}

export default function AddTodo() {
    const router = useRouter()
    const pathname = usePathname()
    const [isPending, startTransition] = useTransition()
    const [isFetching, setIsFetching] = useState(false)
    const [data, setData] = useState(initState)
    const isMutating = isFetching || isPending

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const { userId, description } = data

        setIsFetching(true)
        postTodos({description}) //add new todo
        setIsFetching(false)

        setData(prevData => ({
            ...prevData,
            description: ""
        }))

        startTransition(() => {
            if (pathname === "/add") {
                router.push('/')
            } else {
                router.refresh()
            }
        })
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {

        const name = e.target.name

        setData(prevData => ({
            ...prevData,
            [name]: e.target.value
        }))
    }

    const content = (
        <form onSubmit={handleSubmit} className="flex gap-2 items-center text-black" style={{ opacity: !isMutating ? 1 : 0.7 }}>
            <InputWrapper type="side">
                <input
                    type="text"
                    id="description"
                    name="description"
                    value={data.description}
                    onChange={handleChange}
                    placeholder="New Todo"
                    autoFocus
                />
                <ConfirmButton type="submit">
                    <FiPlay size={20} color="white"/>
                </ConfirmButton>  
            </InputWrapper>
        </form>
    )

    return content
}


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
