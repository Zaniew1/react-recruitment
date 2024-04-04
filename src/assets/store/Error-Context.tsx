import React, { useState, useEffect} from "react";
import { ErrorContextType,ErrorTypesType,ContextPropsType } from '../types/types';
export const ErrorContext = React.createContext<ErrorContextType>({
    errorType: "",
    errorMessage:"",
    setErrorType: () => {},
    setErrorMessage: () => {},
  });

export const ErrorContextProvider = (props:ContextPropsType) => {
  const [errorType, setErrorType] = useState<ErrorTypesType>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  useEffect(()=>{
    if(errorType !== '' && errorMessage !== ''){
      setTimeout(()=>{
        setErrorType('');
        setErrorMessage('');
      }, 3000)
    }
  },[setErrorMessage, setErrorType,errorType, errorMessage ])
  return (
    <ErrorContext.Provider
      value={{
        errorType:errorType,
        setErrorType:setErrorType,
        errorMessage:errorMessage,
        setErrorMessage:setErrorMessage
      }}
    >
      {props.children}
    </ErrorContext.Provider>
  );
};