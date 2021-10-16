import { useState, useEffect } from 'react'
import { ResponseData } from './types/types';


const App: React.FunctionComponent = () => {
    // eslint-disable-next-line
    const [data, setData] = useState<ResponseData | undefined>(undefined);

    const fetchData = async () => {
        const result = await fetch("https://api.covid19api.com/summary");
        const data: ResponseData = await result.json();

        setData(data);
        console.log(data);
    };

    useEffect(() => {
        fetchData();
    },[]);

    return (
        <div className="app">
            <h1>hello</h1>
        </div>
    );
}

export default App