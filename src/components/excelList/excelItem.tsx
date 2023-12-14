"use client"

import styled from 'styled-components'
import { excelItemType } from '@/types/excelType';

export default function ExcelItem({
  excelItem
}: {
  excelItem:excelItemType,
  
}){
  
  return(
    <>
    <ItemBox>
      <NumberId>{excelItem.id}</NumberId>
      <Description>Vendas: {excelItem.vendas}</Description>
      <Description>Ano: {excelItem.ano}</Description>
    </ItemBox>
    </>
  )
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
