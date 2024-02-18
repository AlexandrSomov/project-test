import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import { User } from './features/user/components/User';
import { Layout } from './components/Layout';
import { NotFound } from './routers/NotFound';
import { Dialog } from './components/dialog';

export const App = () => (
  <div>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="user" element={<User />} />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>

    <Dialog />
  </div>
);
