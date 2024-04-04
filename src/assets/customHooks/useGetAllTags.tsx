import { useEffect, useState } from "react";
import { TagType } from "../types/types";
import { ErrorContext } from "../store/Error-Context";
import { useContext } from "react";
export const useGetAllTags = () => {
  const [tags, setTags] = useState<TagType[] | []>([]);
  const {setErrorType, setErrorMessage} = useContext(ErrorContext)
  useEffect(() => {
    const fetchTags = async () => {
      try{
      const response = await fetch(`https://api.stackexchange.com/2.3/tags?order=desc&sort=popular&site=stackoverflow`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
        const data = await response.json();
        if(data.items){
          const allTags:TagType[] = data.items.map((el:TagType,index:number)=>{
            el.id = index;
            return el;
          })
          setTags(allTags);
          setErrorType("Info");
          setErrorMessage("Succesfully downloaded tags");
        }
      }catch(error){
        setErrorType("Error");
        setErrorMessage(String(error));
    }
  }
    fetchTags();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return tags;
};


