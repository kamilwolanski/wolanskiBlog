import { useQuery } from '@apollo/client';
import { Queries } from '../Queries/basicQuery';

const useMeta = () => {
  const queries = new Queries();

  const { loading, error, data } = useQuery(queries.meta);

  return { data };
};

export default useMeta;
