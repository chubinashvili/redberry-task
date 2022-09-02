import { Routes, Route } from 'react-router-dom';

import Landing from './routes/landing/Landing.component';
import EmployeeInfo from './routes/employee-info/EmployeeInfo.component';
import LaptopInfo from './routes/laptop-info/LaptopInfo.component';
import SuccessfulEnd from './routes/successful-end/SuccessfulEnd.component';
import { Fragment } from 'react';
import { GlobalStyle } from './global.styles';

const App = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<Landing />}/>
        <Route path='/employee-info' element={<EmployeeInfo />}/>
        <Route path='/laptop-info' element={<LaptopInfo />}/>
        <Route path='/successful-end' element={<SuccessfulEnd />}/>
        {/* <Route path='/list*' element={<Element />} /> */}
      </Routes>
    </Fragment>
  )
}

export default App