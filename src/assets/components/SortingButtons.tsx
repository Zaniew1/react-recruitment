import { SortingContext } from "../store/Sorting-Context";
import { useContext, useState} from "react";
import { sortingDirectionType } from '../types/types';
export const SortingButtons:React.FC = ():JSX.Element =>{
    const {setColumnName, setSortingDirection} = useContext(SortingContext);
    const [idDirection, setIdDirection] = useState<sortingDirectionType>('desc');
    const [nameDirection, setNameDirection] = useState<sortingDirectionType>('asc');
    const [countDirection, setCountDirection] = useState<sortingDirectionType>('asc');

    const handleSorting = (e: React.MouseEvent<HTMLButtonElement>):void => {
        const target = e.target as HTMLButtonElement;
        const column = target.dataset.name ?? "id";
        const direction = (target.dataset.direction ?? "desc" ) as sortingDirectionType ;
        column === "id" && direction === "desc" ?  setIdDirection('asc') : setIdDirection('desc');
        column === "name" && direction === "desc" ?  setNameDirection('asc') : setNameDirection('desc');
        column === "count" && direction === "desc" ?  setCountDirection('asc') : setCountDirection('desc');
        setColumnName(column);
        setSortingDirection(direction)
    }
    
    return(
        <div className={"sorting__wrapper"}>
            <label className={"sorting__wrapper__label"}>Sorting buttons:</label>
            <button className={`sorting__wrapper__button ${idDirection}`} data-name={'id'} data-direction={idDirection} onClick={handleSorting}>{"ID " +idDirection }</button>
            <button className={`sorting__wrapper__button ${nameDirection}`} data-name={'name'} data-direction={nameDirection} onClick={handleSorting}>{"Name " +nameDirection }</button>
            <button className={`sorting__wrapper__button ${countDirection}`} data-name={'count'} data-direction={countDirection} onClick={handleSorting}>{"Count " +countDirection }</button>
        </div>
    );
}