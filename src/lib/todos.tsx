import { toDoItemType } from "@/types/itemTypes"

async function postTodos({
  description
}:{
  description:string | undefined
}){
  try {
    await fetch('http://localhost:4000/create-item', {
            method: 'POST',
            cache:'no-store',
            headers:{
                'Content-Type': 'application/json',
                'Authorization': 'Bearer 97f696ef-61f3-43c4-a4a7-50665c2c225e'
              },
            body: JSON.stringify({ description })
        })
  } catch (error) {
    console.log(error)
  }
}

async function checkTodos({
  id,
  status
}:{
  status: string,
  id: number,
}){
  try {
    await fetch('http://localhost:4000/check-item', {
      method: 'PUT',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          id,
          status,
        })
    }) 
  } catch (error) {
    console.log(error)
  }
}

async function deleteTodos({
  id,
}:{
  id: number,
}){
  try {
    await fetch('http://localhost:4000/delete-item', {
      method: 'DELETE',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          id,
        })
    })
  } catch (error) {
    console.log(error)
  }
}

async function editTodos({
  id,
  editDescription,
}:{
  id: number,
  editDescription: string,
}){
  try {
    await fetch('http://localhost:4000/edit-item', {
      method: 'PUT',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          id,
          description: editDescription,
        })
    })
  } catch (error) {
    console.log(error)
  }
}

async function fetchTodos(){
  const res = await fetch("http://localhost:4000/get-item",{
    cache: 'no-cache'
  })

  const todos: toDoItemType[] = await res.json();

  return todos
}
export {
  checkTodos, 
  postTodos, 
  deleteTodos,
  editTodos,
  fetchTodos
}