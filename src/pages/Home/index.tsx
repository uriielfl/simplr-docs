import { Button, CardBody, Typography } from '@material-tailwind/react';
import { useNavigate } from 'react-router-dom';

import { Container } from 'components/Container';
import { Layout } from 'components/Layout';

export const Home = () => {
  const navigate = useNavigate();
  const getStarted = () => {
    navigate('/tutorial/get-started');
  };
  return (
    <Layout>
      <Container>
        <CardBody className="text-center">
          <Typography variant="h2" className="mb-4">
            Welcome to Simplr
          </Typography>
          <Typography variant="paragraph" className="mb-4">
            Simplr is a simplified Browser HTTP client library for JavaScript.
            It makes using HTTP methods like GET, POST, PATCH, PUT, and DELETE
            easy, while also offering features like request and response
            interceptors, and cache manipulation.
          </Typography>
          <Typography variant="h5" className="mb-2">
            Key Features:
          </Typography>
          <ul className="list-disc list-inside text-left mb-4">
            <li>HTTP Methods: GET, POST, PATCH, PUT, DELETE</li>
            <li>Request and Response Interceptors</li>
            <li>Cache Manipulation</li>
          </ul>
          <Typography variant="paragraph" className="mb-4">
            It's open source and contributions are welcome!
          </Typography>
          <Button onClick={getStarted} className="mt-4" ripple={true}>
            Get Started
          </Button>
        </CardBody>
      </Container>
    </Layout>
  );
};
