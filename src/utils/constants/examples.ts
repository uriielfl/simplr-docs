export const EXAMPLES = {
  SIMPLE_EXAMPLE: `
  import {
    simplr,
    InterceptorByEnum,
    IResponseInterceptor,
    IRequestConfig,
  } from 'simplr-js';
  
  export const api = simplr.init('http://localhost:3000/');
  
  const responseInterception = (resp: any) => {
    resp.test = 'test';
    return resp;
  };
  
  export const getUsers = async () => {
    return await api.get('/users')
  }`,
  GET: {
    one_instance: `
  import { simplr } from 'simplr-js';

  const api = simplr.init('https://your-api.com');
  const getUsers = async () => {
      return await api.get('/users');    
  }
  `,
    multiple_instances: `
  import { Simplr } from 'simplr-js';

  const api = new Simplr().init('https://your-api.com');
  const anotherApi = new Simplr().init('https://your-second-api.com');
  
  const getUsers = async () => {
      return await api.get('/users');    
  }
  
  const getUsers2 = async () => {
      return await anotherApi.get('/users');    
  }
      `,
  },
  POST: {
    one_instance: `
  import { simplr } from 'simplr-js';
  import { User } from '@/types';

  const api = simplr.init('https://your-api.com');
  const createUser = async (user: User) => {
      return await api.post('/users', user);    
  }
      `,
    multiple_instances: `
  import { Simplr } from 'simplr-js';
  import { User } from '@/types';

  const api = new Simplr().init('https://your-api.com');
  const anotherApi = new Simplr().init('https://your-second-api.com');
  
  const createUser = async (user: User) => {
      return await api.post('/users', user);    
  }
  
  const createUser2 = async (user: User) => {
      return await anotherApi.post('/users', user);    
  }
      `,
  },
  PUT: {
    one_instance: `
  import { simplr } from 'simplr-js';
  import { User } from '@/types';

  const api = simplr.init('https://your-api.com');

  const updateUser = async (user: User) => {
      return await api.put('/users', user);    
  }
      `,
    multiple_instances: `
  import { Simplr } from 'simplr-js';
  import { User } from '@/types';
  
  const api = new Simplr().init('https://your-api.com');
  const anotherApi = new Simplr().init('https://your-second-api.com');
  
  const updateUser = async (user: User) => {
      return await api.put('/users', user);    
  }
  
  const updateUser2 = async (user: User) => {
      return await anotherApi.put('/users', user);    
  }
      `,
  },
  PATCH: {
    one_instance: `
  import { simplr } from 'simplr-js';
  import { User } from '@/types';

  const api = simplr.init('https://your-api.com');

  const updateUser = async (userId: string, user: User) => {
      return await api.patch('/users/' + userId , user);    
  }
      `,
    multiple_instances: `
  import { Simplr } from 'simplr-js';
  import { User } from '@/types';

  const api = new Simplr().init('https://your-api.com');
  const anotherApi = new Simplr().init('https://your-second-api.com');
  
  const updateUser = async (userId: string, user: User) => {
      return await api.patch('/users/' + userId , user);    
  }
  
  const updateUser2 = async (userId: string, user: User) => {
      return await anotherApi.patch('/users/' + userId , user);    
  }
      `,
  },
  DELETE: {
    one_instance: `
  import { simplr } from 'simplr-js';

  const api = simplr.init('https://your-api.com');

  const deleteUser = async (userId: string) => {
      return await api.delete('/users/' + userId);    
  }
      `,
    multiple_instances: `
  import { Simplr } from 'simplr-js';

  const api = new Simplr().init('https://your-api.com');
  const anotherApi = new Simplr().init('https://your-second-api.com');
  
  const deleteUser = async (userId: string) => {
      return await api.delete('/users/' + userId);    
  }
  
  const deleteUser2 = async (userId: string) => {
      return await anotherApi.delete('/users/' + userId);    
  }
      `,
  },
  CACHE: {
    setCache: `
  import { SimplrResponse } from 'simplr-js';
  import { api } from '@/api';

  getUsers().then(async (res: SimplrResponse) => {
    const data = res.data;
    await api.cache.set('users', data, { minutes: 5 });
  });
      `,
    listenAndCache: `
  import { api } from '@/api';

  export const getUsers = async () => {
    return await api.cache.listenAndCache('/getUsers', () => {
      return api.get('users');
    });
  };  
      `,
    get: `
  import { api } from '@/api';
  
  const getUsers = async () => {
    const data = await api.cache.get('users');
  }
      `,
    remove: `
  import { api } from '@/api';
  
  const removeUsersFromCache = async () => {
    await api.cache.remove('users');
  }
        `,

    clear: `
  import { api } from '@/api';
  const clearCache = async () => {
    await api.cache.clear();
  }
          `,
  },

  INTERCEPTORS: {
    response: `
  import { simplr, SimplrResponse, HttpMethodsEnum, InterceptorByEnum } from "simplr";
  const api = simplr.init('https://your-api.com');

  const interception = (response: SimplrResponse) => {
      response.data = 'test';
      return response;
  }

  const interceptorConfig = {
      by: [InterceptorByEnum.METHOD],
      interception:interception,
      methods: [HttpMethodsEnum.GET],
  }

  api.interceptor.response.add(interceptorConfig);

  `,
    request: `
  import {
      InterceptorByEnum,
      simplr,
      IRequestConfig,
  } from 'simplr-js';
  
  export const api = simplr.init('https://your-api.com/');
  
  const interception = (req: IRequestConfig) => {
      req.headers = {
          ...req.headers,
          Authorization: 'Bearer 123456',
      };
      return req;
  };
  
  const interceptorConfig = {
      by: [InterceptorByEnum.EXACT_PATH],
      interception: interception,
      path: '/products',
  };
  
  api.interceptor.request.add(interceptorConfig);
  `,
  },
};
