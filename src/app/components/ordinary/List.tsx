
interface ListProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}

export default function List<T>(props: ListProps<T>) {
  const { items, renderItem } = props;
  return (
    <ul>
      {items.map((renderItem))}
    </ul>
  );
}