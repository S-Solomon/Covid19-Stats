import styled from '@emotion/styled'
interface Props {
    newConfirmed: number;
    newDeaths: number;
    newRecovered: number;
}

const Globalinfo: React.FunctionComponent<Props> = ({
    newConfirmed,
    newDeaths,
    newRecovered,
}) => {
    return (
        <Wrapper>
            <h1>Global Covid-19  Statistics</h1>
            <h3>
                New Confirmed: {new Intl.NumberFormat().format(newConfirmed)}
            </h3>
            <h3>New Deaths: {new Intl.NumberFormat().format(newDeaths)}</h3>
            <h3>
                New Recovered: {new Intl.NumberFormat().format(newRecovered)}
            </h3>
        </Wrapper>
    );
};

export default Globalinfo;


const Wrapper = styled.div`
    text-align: center;
`