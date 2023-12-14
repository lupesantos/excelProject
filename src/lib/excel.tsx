import { excelItemType } from "@/types/excelType";

async function fetchExcelItems(){
  const res = await fetch("http://localhost:4000/get-excel-item",{
    cache: 'no-cache'
  })

  const excel: excelItemType[] = await res.json();
  return excel
}

export {
  fetchExcelItems
}