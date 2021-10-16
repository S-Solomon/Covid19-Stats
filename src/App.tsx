import { useState, useEffect } from "react";
import CountryList from "./components/CountryList";
import Globalinfo from "./components/Globalinfo";
import type { ResponseData } from "./types/types";

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
                <>
                <Globalinfo
                    newConfirmed={data?.Global.NewConfirmed}
                    newDeaths={data?.Global.NewDeaths}
                    newRecovered={data?.Global.NewRecovered}
                />
                <CountryList countries={data.Countries}/>
                </>
            ) : (
                "Loading ..."
            )}
        </div>
    );
};

export default App;
