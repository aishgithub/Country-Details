export interface Country {
  alpha2Code: string;
  alpha3Code: string;
  altSpellings: Array<string>;
  area: number;
  borders: Array<string>;
  callingCodes: Array<number>;
  capital: string;
  cioc: string;
  currencies: Array<any>;
  demonym: string;
  flag: string;
  gini: number;
  languages: Array<any>;
  latlng: Array<any>;
  name: string;
  nativeName: string;
  numericCode: string;
  population: number;
  region: string;
  regionalBlocs: string;
  subregion: string;
  timezones: Array<any>;
  topLevelDomain: Array<string>;
  translations: any
}
