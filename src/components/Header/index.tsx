import { Button, Navbar } from '@material-tailwind/react';
import { RxHamburgerMenu } from 'react-icons/rx';

import logo from '@/assets/logo.png';

interface IHeader {
  toggleDrawer: () => void;
}
export const Header = ({ toggleDrawer }: IHeader) => {
  return (
    <Navbar className="sticky top-0 min-w-full rounded-none z-[1001]">
      <div className="flex items-center justify-between">
        <Button
          onClick={toggleDrawer}
          className="bg-transparent text-black shadow-none"
        >
          <RxHamburgerMenu size={24} />
        </Button>
        <img src={logo} width={100} alt="Simplr Logo"></img>
      </div>
    </Navbar>
  );
};
