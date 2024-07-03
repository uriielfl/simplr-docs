import { CardBody, List, ListItem, Typography } from '@material-tailwind/react';

import { EXAMPLES } from 'utils/constants/examples';
import { INTERCEPTOR_CONFIG_DATA_TYPES } from 'utils/constants/interceptors-config-data-type';

import { CodeExample } from 'components/CodeExample';
import { Container } from 'components/Container';
import { Layout } from 'components/Layout';
import { TutorialNavigation } from 'components/TutorialNavigation';
import { TypeInfo } from 'components/TypeInfo';

export const Interceptors = () => (
  <Layout>
    <Container>
      <CardBody>
        <Typography variant="h1" className="mb-4">
          Interceptors
        </Typography>
        <Typography>
          Interceptors are quite useful for modifying requests before their
          execution or altering responses before they're delivered.
        </Typography>
        <Typography variant="h5" className="mt-4 mb-2">
          Types of Interceptors:
        </Typography>
        <List>
          <ListItem>Request Interceptors</ListItem>
          <ListItem>Response Interceptors</ListItem>
        </List>
        <Typography variant="h5" className="mt-4">
          Using Interceptors:
        </Typography>
        <Typography>
          With <b>Simplr</b>, interceptors can be applied in various ways:
        </Typography>
        <List>
          <ListItem>By exact path</ListItem>
          <ListItem>By path</ListItem>
          <ListItem>By method</ListItem>
        </List>
        <Typography>
          Note: <code>By path</code> can be combined with <code>By method</code>
          , and <code>By exact path</code> can also be combined with{' '}
          <code>By method</code>. However, <code>By path</code> and{' '}
          <code>By exact path</code> cannot be used together.
        </Typography>

        <Typography variant="h5" className="mt-4">
          Request Interceptors:
        </Typography>
        <Typography>
          Request interceptors allow you to modify the request before it is
          sent. This is useful for adding tokens or other headers.
        </Typography>
        <Typography variant="h6" className="mt-2">
          Example:
        </Typography>
        <CodeExample code={EXAMPLES.INTERCEPTORS.request} />

        <Typography variant="h5" className="mt-4">
          Response Interceptors:
        </Typography>
        <Typography>
          Response interceptors allow you to modify the response data before it
          is delivered to the user. This can be useful for handling global error
          messages or formatting response data.
        </Typography>
        <Typography variant="h6" className="mt-2">
          Example:
        </Typography>

        <CodeExample code={EXAMPLES.INTERCEPTORS.response} />
      </CardBody>

      <CardBody>
        <Typography variant="h5" className="mt-4">
          Interceptor Configuration:
        </Typography>
        <Typography variant="paragraph">
          The <code>interceptorConfig</code> object has the following
          properties:
        </Typography>
        <TypeInfo data={INTERCEPTOR_CONFIG_DATA_TYPES} />
      </CardBody>
    </Container>
    <TutorialNavigation
      previousPage={{
        description: 'Delete Request',
        href: '/tutorial/methods/delete',
      }}
      nextPage={{
        description: 'Cache',
        href: '/tutorial/cache',
      }}
    />
  </Layout>
);
