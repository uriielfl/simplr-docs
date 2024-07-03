import { Typography } from '@material-tailwind/react';
import { Link } from 'react-router-dom';

interface ITutorialNavigation {
  previousPage?: {
    href: string;
    description: string;
  };
  nextPage?: {
    href: string;
    description: string;
  };
}

export const TutorialNavigation = ({
  previousPage,
  nextPage,
}: ITutorialNavigation) => {
  const hasPreviousPage = previousPage && previousPage.href;
  const hasNextPage = nextPage && nextPage.href;

  return (
    <div className="flex flex-wrap justify-between w-full my-5">
      {hasPreviousPage ? (
        <Link className="shadow-lg p-4 rounded-md" to={previousPage.href}>
          <Typography className="text-sm" variant="h2">
            Previous page:
          </Typography>
          <Typography className="text-xs" variant="paragraph">
            {previousPage.description}
          </Typography>
        </Link>
      ) : (
        <div />
      )}
      {hasNextPage && (
        <Link className="shadow-lg p-4 rounded-md" to={nextPage.href}>
          <Typography className="text-sm" variant="h2">
            Next page:
          </Typography>
          <Typography className="text-xs" variant="paragraph">
            {nextPage.description}
          </Typography>
        </Link>
      )}
    </div>
  );
};
