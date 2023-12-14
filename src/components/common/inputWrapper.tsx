"use client";

import { ReactNode } from "react";
import { styled } from "styled-components";

export default function InputWrapper({ 
  children,
  type,
}: { 
  children: ReactNode,
  type: string,
}) {
  return (
    <Container  $type={type}>
      <ItemBox>{children}</ItemBox>
    </Container>
    )
}

const Container = styled.section<ContainerType>`
  background-color: #21394f;
  align-items: center;
  justify-content: center;
  width: ${(props) => (props.$type === "main" ? "50%" : "100%")};
  height: fit-content;

  padding: 15px 15px 20px 15px;
  border-radius: 5px;

  @media screen and (max-width: 1024px) {
    width: 100%;
  }

  &:nth-child(2) {
    margin-top: 21px;
  }
`;

type ContainerType = {
  $type: string;
};
const ItemBox = styled.div`
  
  height: 70px;
  padding-left: 10px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  background-color: #5e2eb6;
  gap: 10px;
  border-radius: 5px;
  position: relative;


  & > input{
        padding-left: 20px;
        height: 60%;
        width: calc(100% - 45px);
        color: black;
        border: none;
        border-radius: 6px;
    }
    & > input:focus {
        outline: none;
        border-color: var(--input-border-focus);
    }

  &:last-child{
    margin-bottom: 0;
  }
`;

