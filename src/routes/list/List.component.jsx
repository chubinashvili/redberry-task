import React from 'react';
import { Routes, Route } from 'react-router-dom';

import ListPage from '../list-page/ListPage.component';
import ListItemPage from '../list-item-page/ListItemPage.component';

const List = () => {
  return (
    <Routes>
      <Route index element={<ListPage />} />
      <Route path=':id' element={<ListItemPage />} />
    </Routes>
  )
}

export default List;