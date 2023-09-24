import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import { User } from './features/user/User';
import { Layout } from './components/Layout';
import { NotFound } from './routers/NotFound';

export const App = () => (
  <div>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="user" element={<User />} />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </div>
);
