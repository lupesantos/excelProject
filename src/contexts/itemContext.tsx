"use client";

import { toDoItemType } from "@/types/itemTypes";

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";


interface IMainContextProps {
  items: toDoItemType[];
  setItems: Dispatch<SetStateAction<toDoItemType[]>>;
  refresh: boolean;
  setRefresh:  Dispatch<SetStateAction<boolean>>;
}

const MainContext = createContext({} as IMainContextProps);

export function MainContextProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<toDoItemType[]>([]);
  const [refresh, setRefresh] = useState(false);

  return (
    <MainContext.Provider value={{ items, setItems, refresh, setRefresh }}>
      {children}
    </MainContext.Provider>
  );
}

export const useMainContext = () => useContext(MainContext);

