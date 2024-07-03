import { Typography } from '@material-tailwind/react';

import { EXAMPLES } from '@/utils/constants/examples';

import { CodeExample } from '@/components/CodeExample';
import { Container } from '@/components/Container';
import { Layout } from '@/components/Layout';
import { TutorialNavigation } from '@/components/TutorialNavigation';

export const PutMethod = () => (
  <Layout>
    <Container>
      <div className="py-4">
        <Typography variant="h1">Requests - PUT</Typography>
        <Typography variant="paragraph">
          To make a PUT request, you can import simplr and initiate it with the
          base URL. Then you can make a PUT request by calling the put method on
          the simplr instance, passing the data you want to replace as an
          argument.
        </Typography>
        <Typography variant="h3">Example with only one instance:</Typography>

        <CodeExample code={EXAMPLES.PUT.one_instance} />
      </div>
      <div className="py-4">
        <Typography variant="h3">Example with multiple instances:</Typography>
        <Typography variant="paragraph">
          If you want to have more than one instance of simplr, you will need to
          import Simplr class and create a new instance of it. This is
          beneficial for managing different configurations or endpoints
          separately.
        </Typography>

        <CodeExample code={EXAMPLES.PUT.multiple_instances} />
      </div>
    </Container>
    <TutorialNavigation
      previousPage={{
        description: 'POST request',
        href: '/tutorial/methods/post',
      }}
      nextPage={{
        description: 'PATCH request',
        href: '/tutorial/methods/patch',
      }}
    />
  </Layout>
);
