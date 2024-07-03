import { FaHome } from 'react-icons/fa';
import { GrDatabase } from 'react-icons/gr';
import { MdHttp } from 'react-icons/md';
import { SlTarget } from 'react-icons/sl';
import {
  TbHttpDelete,
  TbHttpGet,
  TbHttpPatch,
  TbHttpPost,
  TbHttpPut,
} from 'react-icons/tb';

export const NAV_ITEMS = [
  {
    title: 'Home',
    icon: <FaHome />,
    href: '/',
  },
  {
    title: 'Methods',
    icon: <MdHttp />,
    subitems: [
      {
        title: 'GET',
        href: '/tutorial/methods/get',
        icon: <TbHttpGet />,
      },
      {
        title: 'POST',
        href: '/tutorial/methods/post',
        icon: <TbHttpPost />,
      },
      {
        title: 'PUT',
        href: '/tutorial/methods/put',
        icon: <TbHttpPut />,
      },
      {
        title: 'PATCH',
        href: '/tutorial/methods/patch',
        icon: <TbHttpPatch />,
      },
      {
        title: 'DELETE',
        href: '/tutorial/methods/delete',
        icon: <TbHttpDelete />,
      },
    ],
  },
  {
    title: 'Cache',
    icon: <GrDatabase />,
    href: '/tutorial/cache',
  },
  {
    title: 'Interceptors',
    icon: <SlTarget />,
    href: '/tutorial/interceptors',
  },
];
