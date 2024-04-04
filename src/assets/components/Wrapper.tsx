
import { Table } from './Table';
import { useGetAllTags } from '../customHooks/useGetAllTags';
import { AllTagsType } from '../types/types';
import { FilterInput } from './FilterInput';
import { InformerPopup } from './InformerPopup';
import { SortingButtons } from './SortingButtons';

export  function Wrapper() {
  // get all tags here
const rows:AllTagsType = useGetAllTags() || [];

  return (
    <main className={'wrapper'}>
        <InformerPopup/>
        <FilterInput/>
        <SortingButtons/>
        <Table rows={rows}/>
    </main>
  );
}