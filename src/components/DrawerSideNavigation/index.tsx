import {
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemPrefix,
  Typography,
} from '@material-tailwind/react';
import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { NAV_ITEMS } from 'utils/constants/navItems';

interface IDrawerSideNavigation {
  isOpen: boolean;
  toggleDrawer: () => void;
}

export const DrawerSideNavigation = ({
  isOpen,
  toggleDrawer,
}: IDrawerSideNavigation) => {
  const [expandedItems, setExpandedItems] = useState<number[]>([]);
  const navigate = useNavigate();
  const handleExpand = useCallback((index: number) => {
    setExpandedItems((prev) =>
      prev.includes(index)
        ? prev.filter((item) => item !== index)
        : [...prev, index],
    );
  }, []);

  const renderNavItems = (item: any, index: number) => {
    const isExpanded = expandedItems.includes(index);
    return (
      <React.Fragment key={index}>
        <ListItem
          onClick={() =>
            item.subitems ? handleExpand(index) : navigate(item.href)
          }
        >
          <ListItemPrefix>{item.icon}</ListItemPrefix>
          {item.title}
        </ListItem>
        {isExpanded && item.subitems && (
          <List>
            {item.subitems.map((subitem: any, subIndex: number) => (
              <ListItem key={subIndex} onClick={() => navigate(subitem.href)}>
                <ListItemPrefix>{subitem.icon}</ListItemPrefix>
                {subitem.title}
              </ListItem>
            ))}
          </List>
        )}
      </React.Fragment>
    );
  };

  return (
    <React.Fragment>
      <Drawer open={isOpen} onClose={toggleDrawer} className="z-[10000]">
        <div className="mb-2 flex items-center justify-between p-4">
          <Typography variant="h5" color="blue-gray">
            Simplr
          </Typography>
          <IconButton variant="text" color="blue-gray" onClick={toggleDrawer}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
        <List>
          {NAV_ITEMS.map((item, index) => renderNavItems(item, index))}
        </List>
        <Button className="mt-3 ml-5" size="sm">
          Contribute
        </Button>
      </Drawer>
    </React.Fragment>
  );
};
