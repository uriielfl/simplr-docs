import { Tooltip } from '@material-tailwind/react';
import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const LINKS = [
  {
    name: 'Github',
    url: 'https://github.com/uriielfl/simplr',
    icon: <FaGithub />,
    tooltip: 'Contribute to Simplr',
  },
];

export const Footer = () => {
  return (
    <footer className="border w-full bottom-0 flex justify-between items-center border-gray-100 bg-white p-4 text-center">
      <div />
      <div className="flex justify-center">
        {LINKS.map((link, index) => (
          <Tooltip key={index} content={link.tooltip}>
            <Link
              to={link.url}
              target="_blank"
              rel="noreferrer"
              className="mx-2"
            >
              {link.icon}
            </Link>
          </Tooltip>
        ))}
      </div>
    </footer>
  );
};
