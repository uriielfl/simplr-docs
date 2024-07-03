import { Typography } from '@material-tailwind/react';

import { EXAMPLES } from '@/utils/constants/examples';

import { CodeExample } from '@/components/CodeExample';
import { Container } from '@/components/Container';
import { Layout } from '@/components/Layout';
import { TutorialNavigation } from '@/components/TutorialNavigation';

export const DeleteMethod = () => (
  <Layout>
    <Container>
      <div className="py-4">
        <Typography variant="h1">Requests - DELETE</Typography>
        <Typography variant="paragraph">
          To make a DELETE request, you can import simplr and initiate it with
          the base URL. Then you can make a DELETE request by calling the delete
          method on the simplr instance.
        </Typography>
        <Typography variant="h3">Example with only one instance:</Typography>

        <CodeExample code={EXAMPLES.DELETE.one_instance} />
      </div>
      <div className="py-4">
        <Typography variant="h3">Example with multiple instances:</Typography>
        <Typography variant="paragraph">
          If you want to have more than one instance of simplr, you will need to
          import Simplr class and create a new instance of it.
        </Typography>
        <CodeExample code={EXAMPLES.DELETE.multiple_instances} />
      </div>
    </Container>
    <TutorialNavigation
      previousPage={{
        description: 'PATCH Request',
        href: '/tutorial/methods/patch',
      }}
      nextPage={{
        description: 'Interceptors',
        href: '/tutorial/interceptors',
      }}
    />
  </Layout>
);
