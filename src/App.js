import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import Spinner from './components/spinner/Spinner.component';

import { GlobalStyle } from './global.styles';

const Landing = lazy(() => import('./routes/landing/Landing.component'));
const EmployeeInfo = lazy(() => import('./routes/employee-info/EmployeeInfo.component'));
const LaptopInfo = lazy(() => import('./routes/laptop-info/LaptopInfo.component'));
const SuccessfulEnd = lazy(() => import('./routes/successful-end/SuccessfulEnd.component'));
const List = lazy(() => import('./routes/list/List.component'));


const App = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<Landing />}/>
        <Route path='/employee-info' element={<EmployeeInfo />}/>
        <Route path='/laptop-info' element={<LaptopInfo />}/>
        <Route path='/successful-end' element={<SuccessfulEnd />}/>
        <Route path='/list/*' element={<List />} />
      </Routes>
    </Suspense>
  )
}

export default App