import { toDoItemType } from "@/types/itemTypes";
import Item from "./item";
import { fetchTodos } from "@/lib/todos";

export default async function MappedItemList({list}:{list:toDoItemType[]}){

  const todos = await fetchTodos()

  return(
  <>
    {todos.map((item, index)=>(
      <>
        <Item 
          item={item} 
          position={index+1}
          status={item.status}/>
      </>
    ))}
  </>
  )
}



