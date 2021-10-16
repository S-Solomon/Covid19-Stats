import styled from '@emotion/styled'
import { Country } from '../types/types'
import { useState } from 'react'

interface Props {
    country: Country;
    onItemClick: (country: Country) => void;
}

interface ListContentProps {
    isActive: boolean;
}

const CountryItem: React.FunctionComponent<Props> = ({ country, onItemClick }) => {
    const [isActive, setIsActive] = useState<boolean>(false)

    const handleOnClick = (country: Country) => {
        onItemClick(country);
        setIsActive(!isActive)
    }

    return (
        <ListItem key={country.ID} onClick={() => handleOnClick(country)}>
            <ListContent isActive={isActive }>
                <h4>{country.Country}</h4>
                <div>New Confirmed: {country.NewConfirmed}</div>
                <div>New Deaths: {country.NewDeaths}</div>
                <div>New Recovered: {country.NewRecovered}</div>
            </ListContent>
        </ListItem>
    );
}

export default CountryItem




const ListItem = styled.li`
    list-style: none;
    flex: 0 0 50%;
    cursor: pointer;
    @media (min-width: 420px) {
        flex: 0 0 33.33%;
    }
`;

const ListContent = styled.div<ListContentProps>`
    background-color: ${(props) => (props.isActive ? "#fff" : "#f7f7f7")};
    margin: 5px;
    padding: 10px 0;
    /* border-radius: 5px; */
    &:hover {
        cursor: pointer;
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
        transform: scale(1.05);
    }
`;