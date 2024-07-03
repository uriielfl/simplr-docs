import { CardBody, Typography } from '@material-tailwind/react';

import { EXAMPLES } from 'utils/constants/examples';

import { CodeExample } from 'components/CodeExample';
import { Container } from 'components/Container';
import { Layout } from 'components/Layout';
import { TutorialNavigation } from 'components/TutorialNavigation';

export const Cache = () => {
  return (
    <Layout>
      <Container>
        <CardBody>
          <Typography variant="h1" className="mb-4">
            Cache
          </Typography>
          <Typography variant="paragraph">
            Simplr offers you a simple way to cache your requests. You can cache
            through two methods: <code>setCache</code> or{' '}
            <code>listenAndCache</code>.
          </Typography>
          <Typography variant="paragraph" className="my-4">
            You can also use the <code>get</code> property to access the cache
            data directly.
          </Typography>
          <Typography variant="h5" className="mt-4 mb-2">
            setCache
          </Typography>
          <Typography variant="paragraph">
            The <code>setCache</code> method allows you to cache an object. You
            can use it like this:
          </Typography>
          <CodeExample code={EXAMPLES.CACHE.setCache} />
          <Typography variant="h5" className="mt-4 mb-2">
            listenAndCache
          </Typography>
          <Typography variant="paragraph">
            The <code>listenAndCache</code> method allows you to cache the
            response of a request. You can use it like this:
          </Typography>
          <CodeExample code={EXAMPLES.CACHE.listenAndCache} />
          <Typography variant="paragraph" className="my-4">
            It'll automatically cache the response of the request and return the
            cached response if it exists. If the response is not cached, it'll
            make the request and cache it. This is useful when you want to avoid
            making the same request multiple times.
          </Typography>
          <Typography variant="h5" className="mt-4">
            get
          </Typography>
          <Typography variant="paragraph">
            The <code>get</code> property allows you to access the cache data
            directly. You can use it like this:
          </Typography>
          <CodeExample code={EXAMPLES.CACHE.get} />
          <Typography variant="h5" className="mt-4">
            Removing cache data
          </Typography>
          <Typography variant="paragraph" className="my-4">
            You can also manually clear the cache by calling the{' '}
            <code>clear</code>
            method or remove a specific key by calling the <code>remove</code>
            method.
          </Typography>
          <Typography variant="h6">Clear</Typography>
          <CodeExample code={EXAMPLES.CACHE.clear} />
          <Typography variant="h6" className="mt-4">
            Remove
          </Typography>
          <CodeExample code={EXAMPLES.CACHE.remove} />
        </CardBody>
      </Container>
      <TutorialNavigation
        previousPage={{
          description: 'Interceptors',
          href: '/tutorial/interceptors',
        }}
      />
    </Layout>
  );
};
