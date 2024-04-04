export type AllTagsType =  TagType[] | [] ;
export type ErrorTypesType = "Info"|"Warning"|"Error"| "";
export type ErrorContextType = {
    errorType:ErrorTypesType,
    setErrorType: (errorMessage:ErrorTypesType) => void
    errorMessage: string
    setErrorMessage: (errorMessage:string) => void
}
export type ContextPropsType = {
    children: React.ReactNode;
};
export type FilterContextType = {
    elementsNumberInTable:number,
    setElementsNumberInTable: (elementsNumberInTable:number) => void
}
export type SortingContextType={
    columnName: string,
    setColumnName: (columnName: string) => void,
    sortingDirection: sortingDirectionType,
    setSortingDirection: (sortingDirection: sortingDirectionType) => void
}
export type TagType = {
    id:number,
    name:string,
    count:number,
    has_synonyms:boolean,
    is_moderator_only:boolean,
    is_required:boolean
  }
export type sortingDirectionType = "desc"|"asc";