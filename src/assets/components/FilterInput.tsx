import { FilterContext } from '../store/Filter-Context';
import { useContext} from 'react';
import { ErrorContext } from "../store/Error-Context";
export const FilterInput:React.FC = ():JSX.Element => {
  const {setElementsNumberInTable, elementsNumberInTable} = useContext(FilterContext);
  const {setErrorType, setErrorMessage} = useContext(ErrorContext)
  const handlePageSizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      event.preventDefault();
      let value = parseInt(event.target.value);
      if(Number.isNaN(value)){value = 0;}
      else if(value > 100 ){ setErrorType("Warning"); setErrorMessage("List count cannot exceed 100"); return;}
      else if(value < 0 ){ setErrorType("Warning"); setErrorMessage("List count cannot be less than 0"); return;}
      setElementsNumberInTable(value);
    };
    
    return(
        <form className={'filter__form'}>
            <label className={'filter__form__label'} htmlFor="pageSize">Tags count in a list:</label>
            <input className={'filter__form__input'}  type="number" id="fname" name="pageSize" placeholder={elementsNumberInTable ? String(elementsNumberInTable) : ""} onChange={handlePageSizeChange}/>
        </form>
    );
}