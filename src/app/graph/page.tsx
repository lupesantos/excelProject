import dynamic from "next/dynamic";
import Loading from '@/components/loading';
import Container from '@/components/common/container';
Container
import React from 'react'
import BoxWrapper from '@/components/common/boxWrapper'
import { fetchExcelItems } from '@/lib/excel'
import MappedExcelItemList from '@/components/excelList/mappedExcelItemList'
import Wrapper from '@/components/common/wrapper';
import ChartView from "@/components/ChartView";

const DynamicContainer = dynamic(
  () => import("../../components/common/container"),
  {
    ssr: false,
    loading: () => <Loading />,
  }
);

export const revalidate = 0;
export default async function graph() {

  const data2 = [
    {
      id: 1,
      vendas: 1000,
      ano: 2000
    },
    {
      id: 2,
      vendas: 2000,
      ano: 2001
    },
    {
      id: 3,
      vendas: 1500,
      ano: 2002
    },
    {
      id: 4,
      vendas: 4000,
      ano: 2003
    },
  ]

  const data = await fetchExcelItems()
  return (
    <main className="mx-auto flex w-90% justify-center">
      <DynamicContainer>
        {/* @ts-expect-error Server Component */}
        <BoxWrapper element={<MappedExcelItemList list={data}/>} title='Excel List' type='main'/>
        <Wrapper>
          {/* @ts-expect-error Server Component */}
          <ChartView list={data}/>
        </Wrapper>
        
      </DynamicContainer>
    </main>
  )
}
