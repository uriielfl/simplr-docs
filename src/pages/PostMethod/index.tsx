import { Typography } from '@material-tailwind/react';

import { EXAMPLES } from '@/utils/constants/examples';

import { CodeExample } from '@/components/CodeExample';
import { Container } from '@/components/Container';
import { Layout } from '@/components/Layout';
import { TutorialNavigation } from '@/components/TutorialNavigation';

export const PostMethod = () => (
  <Layout>
    <Container>
      <div className="py-4">
        <Typography variant="h1">Requests - POST</Typography>
        <Typography variant="paragraph">
          To make a POST request, you can import simplr and initiate it with the
          base URL. Then you can make a POST request by calling the post method
          on the simplr instance, passing the necessary data as an argument.
        </Typography>
        <Typography variant="h3">Example with only one instance:</Typography>

        <CodeExample code={EXAMPLES.POST.one_instance} />
      </div>
      <div className="py-4">
        <Typography variant="h3">Example with multiple instances:</Typography>
        <Typography variant="paragraph">
          If you want to have more than one instance of simplr, you will need to
          import Simplr class and create a new instance of it. This is useful
          for managing different configurations or endpoints.
        </Typography>
        <CodeExample code={EXAMPLES.POST.multiple_instances} />
      </div>
    </Container>
    <TutorialNavigation
      previousPage={{
        description: 'GET request',
        href: '/tutorial/methods/get',
      }}
      nextPage={{
        description: 'PUT request',
        href: '/tutorial/methods/put',
      }}
    />
  </Layout>
);
