import { useState, useEffect } from "react";
import Globalinfo from "./components/Globalinfo";
import { ResponseData } from "./types/types";

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
    }, []);

    return (
        <div className="app">
            {data ? (
                <Globalinfo
                    newConfirmed={data?.Global.NewConfirmed}
                    newDeaths={data?.Global.NewDeaths}
                    newRecovered={data?.Global.NewRecovered}
                />
            ) : (
                "Loading ..."
            )}
        </div>
    );
};

export default App;
