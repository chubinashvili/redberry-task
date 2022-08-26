import { Routes, Route } from 'react-router-dom';

import Landing from './routes/landing/Landing';
import EmployeeInfo from './routes/employee-info/EmployeeInfo';
import LaptopInfo from './routes/laptop-info/LaptopInfo';
import SuccessfulEnd from './routes/successful-end/SuccessfulEnd';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Landing />}/>
      <Route path='/employee-info' element={<EmployeeInfo />}/>
      <Route path='/laptop-info' element={<LaptopInfo />}/>
      <Route path='/successful-end' element={<SuccessfulEnd />}/>
      {/* <Route path='/list*' element={<Element />} /> */}
    </Routes>
  )
}

export default App