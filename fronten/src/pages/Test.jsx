import { useState } from 'react';

export default function Test() {

    const [data, setData] = useState(null);

    useEffect(async() => {
    	const response = axios.get('https://jsonplaceholder.typicode.com/posts/1')
      console.log(response.data);
    },[]) // dependancy array

  return (
    <div>
        {
            data ? (<div>Data is present {JSON.stringify(data)}</div>):(<div>Data is not present</div>)
        }
    </div>
  )
}