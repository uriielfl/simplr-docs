import { Card } from '@material-tailwind/react';
import { ReactNode } from 'react';

interface IContainer {
  children: ReactNode;
}
export const Container = ({ children }: IContainer) => {
  return <Card className="py-4 md:px-8 px-4 shadow-lg">{children}</Card>;
};
