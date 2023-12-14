"use client";
import { excelItemType } from "@/types/excelType";
import { AreaChart, Card, Title } from "@tremor/react";

export default async function ChartView({list}:{list:excelItemType[]}) {
  
  const valueFormatter = function(number:number) {
    return "R$ " + new Intl.NumberFormat("pt-br").format(number).toString();
  };
  
  return (
    <>
      <Card>
        <Title>Vendas</Title>
        <AreaChart
          className="h-72 mt-4"
          data={list}
          index="ano"
          categories={["vendas"]}
          colors={["indigo", "cyan"]}
          valueFormatter={valueFormatter}
        />
      </Card>
    </>
  );
}