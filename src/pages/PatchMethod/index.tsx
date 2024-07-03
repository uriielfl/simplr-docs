import { Typography } from '@material-tailwind/react';

import { EXAMPLES } from 'utils/constants/examples';

import { CodeExample } from 'components/CodeExample';
import { Container } from 'components/Container';
import { Layout } from 'components/Layout';
import { TutorialNavigation } from 'components/TutorialNavigation';

export const PatchMethod = () => (
  <Layout>
    <Container>
      <div className="py-4">
        <Typography variant="h1">Requests - PATCH</Typography>
        <Typography variant="paragraph">
          To make a PATCH request, you can import simplr and initiate it with
          the base URL. Then you can make a PATCH request by calling the patch
          method on the simplr instance, passing the data you want to update as
          an argument.
        </Typography>
        <Typography variant="h3">Example with only one instance:</Typography>

        <CodeExample code={EXAMPLES.PATCH.one_instance} />
      </div>
      <div className="py-4">
        <Typography variant="h3">Example with multiple instances:</Typography>
        <Typography variant="paragraph">
          If you want to have more than one instance of simplr, you will need to
          import Simplr class and create a new instance of it. This allows for
          separate configurations or endpoints to be managed independently.
        </Typography>
        <CodeExample code={EXAMPLES.PATCH.multiple_instances} />
      </div>
    </Container>
    <TutorialNavigation
      previousPage={{
        description: 'PUT request',
        href: '/tutorial/methods/put',
      }}
      nextPage={{
        description: 'DELETE request',
        href: '/tutorial/methods/delete',
      }}
    />
  </Layout>
);
