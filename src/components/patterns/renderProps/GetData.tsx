type User = {
  id: number;
  name: string;
}
type Response = {
  loading: boolean;
  error: undefined | Error;
  data: undefined | { users: User[] };
}
type Props = {
  children: (response: Response) => JSX.Element;
}

function GetData({ children }: Props) {
  // fake API call
  const response: Response = {
    loading: false,
    error: undefined,
    data: { users: [{ id: 1, name: 'Peter' }, { id: 2, name: 'Wendy' }]}
  }
  return children(response);
}

export default GetData