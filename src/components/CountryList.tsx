import type { Country } from "../types/types"
import styled from '@emotion/styled'

interface Props {
    countries: Country[];
    onItemClick: (country: Country) => void;
}


const CountryList: React.FunctionComponent<Props> = ({ countries, onItemClick }) => {
    return (
        <ListWrapper>
            {countries.map((country) => (
                <ListItem key={country.ID} onClick={() => onItemClick(country)}>
                    <ListContent>
                        <h4>{country.Country}</h4>
                        <div>New Confirmed: {country.NewConfirmed}</div>
                        <div>New Deaths: {country.NewDeaths}</div>
                        <div>New Recovered: {country.NewRecovered}</div>
                    </ListContent>
                </ListItem>
            ))}
        </ListWrapper>
    );
}

export default CountryList


const ListWrapper = styled.ul`
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    text-align: center;
`

const ListItem = styled.li`
    list-style: none;
    flex: 0 0 50%;
    cursor: pointer;
    @media (min-width: 420px) {
        flex: 0 0 33.33%;
    }
`

const ListContent = styled.div`
    background-color: #f7f7f7;
    margin: 5px;
    padding: 10px 0;
    /* border-radius: 5px; */
    &:hover {
        cursor: pointer;
        box-shadow: 0 8px 20px rgba(0,0,0,0.2);
        transform: scale(1.05);
    }
`