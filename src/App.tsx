import { useState, useEffect } from 'react'



const App: React.FunctionComponent = () => {
  const [data, setData] = useState(undefined)
  
  const fetchData = async () => {
    const result  = await fetch('https://api.covid19api.com/');
    const data = await result.json;

    setData(data);
  };

  useEffect(() => {
    console.log(data)
  })

    return(
      <div className="app">
        <h1>hello</h1>
      </div>
    )
}

export default App