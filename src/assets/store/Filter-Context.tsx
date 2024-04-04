import React, { useState} from "react";
import { FilterContextType,ContextPropsType } from '../types/types';

export const FilterContext = React.createContext<FilterContextType>({
    elementsNumberInTable: 10,
    setElementsNumberInTable: () => {},
   
  });

export const FilterContextProvider = (props:ContextPropsType) => {
  const [elementsNumberInTable, setElementsNumberInTable] = useState<number>(5);
  return (
    <FilterContext.Provider
      value={{
        elementsNumberInTable:elementsNumberInTable,
        setElementsNumberInTable:setElementsNumberInTable
      }}
    >
      {props.children}
    </FilterContext.Provider>
  );
};