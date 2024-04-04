import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { FilterContext } from '../store/Filter-Context';
import { useContext, useState, useEffect } from 'react';
import { AllTagsType } from '../types/types';
import { SortingContext } from '../store/Sorting-Context';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 120, sortable :false},
    { field: 'name', headerName: 'Name', width: 250, sortable :false },
    { field: 'count', headerName: 'Count', width: 250, sortable :false },
  ];

export const Table:React.FC<{rows:AllTagsType}> = (props):JSX.Element =>{
  const {elementsNumberInTable} = useContext(FilterContext);
  const {columnName, sortingDirection} = useContext(SortingContext);
  const sizeOptions = [5, 10,  20, 50];
  const [refresh, setRefresh] = useState<number>(0); // State to trigger component refresh
  useEffect(() => {
      // Whenever elementsNumberInTable change, update the refresh key
      // This will trigger a re-render of the component
      setRefresh(prev => prev + 1);
  }, [elementsNumberInTable,columnName, sortingDirection]);

  return (
    <DataGrid
      key={refresh}
      rows={props.rows}
      columns={columns}
      initialState={{
        pagination: {
          paginationModel: { page: 0, pageSize:  elementsNumberInTable  },
        },
        sorting: {
          sortModel: [{ field: columnName, sort: sortingDirection }],
        },
      }}
      pageSizeOptions={sizeOptions}
    />
  );
}