
/* eslint-disable import/prefer-default-export */
import { useEffect, useState } from 'react';

export default (path, { method, body }) => {
  const [response, setResponse] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  const doFetch = async () => {
    fetch(`http://service.pittscurb.com/${path}`, {
      body: JSON.stringify(body),
      method,
    })
      .then((res) => res.json())
      .then((parsedRes) => {
        setLoading(false);
        setResponse(parsedRes);
      })
      .catch((err) => {
        setLoading(false);
        setError(err);
      });
  };

  useEffect(() => {
    doFetch();
  }, [path]); // intentionally not adding doFetch here

  return { loading, response, error };
};
