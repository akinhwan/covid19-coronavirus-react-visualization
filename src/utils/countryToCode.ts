import countryCodes from '../data/countryCodes.json';

const countryToCode = (country: string) => {
  return countryCodes.find((v) => v.country_name === country.replace('*', ''))?.country_code;
};

export default countryToCode;