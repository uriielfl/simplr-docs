import {
  Route,
  createHashRouter,
  createRoutesFromElements,
} from 'react-router-dom';

import { Cache } from '@/pages/Cache';
import { DeleteMethod } from '@/pages/DeleteMethod';
import { GetMethod } from '@/pages/GetMethod';
import { GetStarted } from '@/pages/GetStarted';
import { Home } from '@/pages/Home';
import { Interceptors } from '@/pages/Interceptors';
import { PatchMethod } from '@/pages/PatchMethod';
import { PostMethod } from '@/pages/PostMethod';
import { PutMethod } from '@/pages/PutMethod';

export const router = createHashRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<Home />} />
      <Route path="tutorial">
        <Route path="get-started" element={<GetStarted />} />
        <Route path="methods">
          <Route path="get" element={<GetMethod />} />
          <Route path="post" element={<PostMethod />} />
          <Route path="put" element={<PutMethod />} />
          <Route path="patch" element={<PatchMethod />} />
          <Route path="delete" element={<DeleteMethod />} />
        </Route>
        <Route path="cache" element={<Cache />} />
        <Route path="interceptors" element={<Interceptors />} />
      </Route>
    </Route>,
  ),
);
