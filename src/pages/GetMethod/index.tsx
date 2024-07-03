import { Typography } from '@material-tailwind/react';

import { EXAMPLES } from 'utils/constants/examples';

import { CodeExample } from 'components/CodeExample';
import { Container } from 'components/Container';
import { Layout } from 'components/Layout';
import { TutorialNavigation } from 'components/TutorialNavigation';

export const GetMethod = () => (
  <Layout>
    <Container>
      <div className="py-4">
        <Typography variant="h1">Requests - GET</Typography>
        <Typography variant="paragraph">
          To make a GET request, you can import simplr and initiate it with the
          base URL. Then you can make a GET request by calling the get method on
          the simplr instance.
        </Typography>
        <Typography variant="h3">Example with only one instance:</Typography>
        <CodeExample code={EXAMPLES.GET.one_instance} />
      </div>
      <div className="py-4">
        <Typography variant="h3">Example with multiple instances:</Typography>
        <Typography variant="paragraph">
          If you want to have more than one instance of simplr, you will need to
          import Simplr class and create a new instance of it.
        </Typography>
        <CodeExample code={EXAMPLES.GET.multiple_instances} />
      </div>
    </Container>
    <TutorialNavigation
      previousPage={{
        description: 'Get Started',
        href: '/tutorial/get-started',
      }}
      nextPage={{
        description: 'Post',
        href: '/tutorial/methods/post',
      }}
    />
  </Layout>
);
