interface ListProps {
  icon: React.ReactNode,
  text: string
};

const List = ({icon, text}: ListProps) => {
  return (
    <li>{icon}<span>{text}</span></li>
  );
}

export default List;