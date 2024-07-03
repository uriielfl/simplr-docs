export const INTERCEPTOR_CONFIG_DATA_TYPES = [
  {
    name: 'By',
    description:
      'Defines how the interceptor will be executed (by path, by method, or by exact path).',
    type: 'InterceptorByEnum[]',
  },
  {
    name: 'interception',
    description: 'The function executed when the interceptor is triggered.',
    type: '(response: SimplrResponse) => SimplrResponse;',
  },
  {
    name: 'path',
    description:
      'The path where the interceptor will be executed, used with By path or By exact path.',
    type: 'string',
  },
  {
    name: 'methods',
    description:
      'The methods on which the interceptor will be executed, used with By method.',
    type: 'string[]',
  },
  {
    name: 'params',
    description:
      'The params on which the interceptor will be executed, used with By path.',
    type: 'string',
  },
];
