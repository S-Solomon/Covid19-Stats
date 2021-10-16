export type Country = {
    Country: string;
    CountryCode: string;
    Date: string;
    ID: string;
    NewConfirmed: number;
    NewDeaths: number;
    NewRecovered: number;
    Premium: unknown;
    Slug: string;
    TotalConfirmed: number;
    ToTalDeaths: number;
    TotalRecovered: number;
}

export type GlobalData = {
    Date: string;
    NewConfirmed: number;
    NewDeaths: number;
    NewRecovered: number;
    TotalConfirmed: number;
    TotalDeaths: number;
    TotalRecovered: number;
};

//What we get back from the api in a whole
export type ResponseData = {
    Countries: Country[];
    Date: string;
    Global: GlobalData;
    ID: string;
    Message: string;
};