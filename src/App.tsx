
import './App.css'
import {Wrapper} from './assets/components/Wrapper'
import { FilterContextProvider } from './assets/store/Filter-Context'
import { ErrorContextProvider } from './assets/store/Error-Context';
import { SortingContextProvider } from './assets/store/Sorting-Context';
function App() {

  return (
    <ErrorContextProvider>
      <SortingContextProvider>
        <FilterContextProvider>
          <Wrapper/>
        </FilterContextProvider>
      </SortingContextProvider>
    </ErrorContextProvider>
  )
}

export default App
