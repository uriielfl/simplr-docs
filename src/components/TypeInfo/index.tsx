import { List, ListItem } from '@material-tailwind/react';

interface IInfo {
  name: string;
  description: string;
  type: string;
}

interface IInfoItem {
  item: IInfo;
}
const InfoItem = ({ item }: IInfoItem) => {
  return (
    <ListItem>
      <ul>
        <li>
          <b>{item.name}</b>: {item.description}
        </li>
        <li className="ml-7">
          Type: <code>{item.type}</code>
        </li>
      </ul>
    </ListItem>
  );
};

interface ITypeInfo {
  data: IInfo[];
}
export const TypeInfo = ({ data }: ITypeInfo) => {
  return (
    <List>
      {data.map((item) => (
        <InfoItem key={item.name} item={item} />
      ))}
    </List>
  );
};
