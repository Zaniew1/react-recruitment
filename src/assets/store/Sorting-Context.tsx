import React, { useState} from "react";
import { SortingContextType,ContextPropsType } from '../types/types';

export const SortingContext = React.createContext<SortingContextType>({
    columnName: 'id',
    setColumnName: () => {},
    sortingDirection: "desc",
    setSortingDirection: () => {}
   
  });

export const SortingContextProvider = (props:ContextPropsType) => {
  const [columnName, setColumnName] = useState<string>('id');
  const [sortingDirection, setSortingDirection] = useState<"desc"|"asc">('asc');
  return (
    <SortingContext.Provider
      value={{
        columnName:columnName,
        setColumnName:setColumnName,
        sortingDirection:sortingDirection,
        setSortingDirection:setSortingDirection
      }}
    >
      {props.children}
    </SortingContext.Provider>
  );
};