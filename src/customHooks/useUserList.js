import { useEffect, useState } from 'react';
import axios from 'axios'
import { baseURL, PER_PAGE } from '../utils/apiConstants';

export default function useUsersList(pageNumber) {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [users, setUsers] = useState([])
  const [hasMore, setHasMore] = useState(false)

  useEffect(() => {
    setLoading(true)
    setError(false)
    let cancel;
    axios({
      method: 'GET',
      url: baseURL,
      params: { results: PER_PAGE, page: pageNumber },
      cancelToken: new axios.CancelToken(c => cancel = c)
    }).then(res => {
      setUsers((prev) => [...prev, ...res.data.results])
      // Checking to fetch more users
      setHasMore(res.data.results.length > 0)
      setLoading(false)
    }).catch(e => {
      // Cancel request if there is an error
      if(axios.isCancel(e)) return
      setError(true)
      setLoading(false)
    })
    return () => cancel()
  }, [pageNumber])

  return { loading, error, users, hasMore }
}