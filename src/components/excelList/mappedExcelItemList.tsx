import { excelItemType } from "@/types/excelType";
import { fetchExcelItems } from "@/lib/excel";
import ExcelItem from "./excelItem";


export default async function MappedExcekItemList({list}:{list:excelItemType[]}){

  const todos = await fetchExcelItems()

  return(
  <>
    {todos.map((item, index)=>(
      <>
        <ExcelItem
          key={item.id}
          excelItem={item}
          />
      </>
    ))}
    
  </>
  )
}



