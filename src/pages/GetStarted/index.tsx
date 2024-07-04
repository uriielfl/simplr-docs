import { CardBody, Typography } from '@material-tailwind/react';

import { EXAMPLES } from '@/utils/constants/examples';

import { CodeExample } from '@/components/CodeExample';
import { Container } from '@/components/Container';
import { Layout } from '@/components/Layout';
import { TutorialNavigation } from '@/components/TutorialNavigation';
import { PowerShell } from '@/components/PowerShell';

export const GetStarted = () => (
  <Layout>
    <Container>
      <CardBody>
        <Typography variant="h1" className="mb-4">
          Tutorial
        </Typography>
        <Typography variant="paragraph">
          Simple, small and easy-to-use browser http client
        </Typography>

        <Typography variant="h2" className="mt-8 mb-4">
          What is Simplr?
        </Typography>
        <Typography variant="paragraph">
          Simplr is an open-source light and easy-to-use browser http client.
          Simplr allows you to make http requests, intercept these requests and
          cache response on browser.
        </Typography>
        <Typography variant="h2" className="mt-8 mb-4">
          Features
        </Typography>
        <ul className="list-disc pl-5">
          <li>Make http requests(GET, POST, DELETE, PATCH & PUT)</li>
          <li>Intercept requests</li>
          <li>Intercept response requests</li>
          <li>Easily cache responses</li>
        </ul>
        <Typography variant="h2" className="mt-8 mb-4">
          Installation
        </Typography>
        <Typography variant="paragraph">Install Simplr via npm:</Typography>
        <PowerShell command={'npm install simplr-js'}/>
        <Typography variant="h2" className="mt-8 mb-4">
          Simple example
        </Typography>
        <Typography variant="paragraph">Make a simple GET request:</Typography>
        <CodeExample code={EXAMPLES.SIMPLE_EXAMPLE} />
        <Typography variant="paragraph">
          In the next steps, we'll take a look in simplr's features and its
          utilizations with examples.
        </Typography>
      </CardBody>
    </Container>
    <TutorialNavigation
      nextPage={{
        description: 'GET Request',
        href: '/tutorial/methods/get',
      }}
    />
  </Layout>
);
