import { Global, css } from "@emotion/react";
import { useState, useEffect } from "react";
import CountryList from "./components/CountryList";
import Globalinfo from "./components/Globalinfo";
import type { Country, ResponseData } from "./types/types";

const App: React.FunctionComponent = () => {
    // eslint-disable-next-line
    const [data, setData] = useState<ResponseData | undefined>(undefined);
    const [activeCountries, setActiveCountries] = useState<Country[]>([]);

    const fetchData = async () => {
        const result = await fetch("https://api.covid19api.com/summary");
        const data: ResponseData = await result.json();

        setData(data);
        // console.log(data);
    };

    useEffect(() => {
        fetchData();
    }, []);

    const OnCountryClick = (country: Country) => {
        const countryIndex = activeCountries.findIndex(
            (activeCountry) => activeCountry.ID === country.ID
        );
        if(countryIndex > -1) {
            const newActiveCountries = [...activeCountries];
            newActiveCountries.splice(countryIndex, 1)
            setActiveCountries(newActiveCountries)
        }else {
            setActiveCountries([...activeCountries, country])
        }
    };

    return (
        <div>
            <Global
                styles={css`
                    body {
                        background-color: #f1f1f1;
                        color: #7d7d7d;
                    }
                `}
            />

            {data ? (
                <>
                    <Globalinfo
                        newConfirmed={data?.Global.NewConfirmed}
                        newDeaths={data?.Global.NewDeaths}
                        newRecovered={data?.Global.NewRecovered}
                    />
                    <CountryList
                        countries={data.Countries}
                        onItemClick={OnCountryClick}
                    />
                </>
            ) : (
                "Loading ..."
            )}
        </div>
    );
};

export default App;
