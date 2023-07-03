import { getConfig } from "../config.js";
import querystring from "node:querystring";
import { request } from "undici";

const config = getConfig();

// http://opendata.trudvsem.ru/api/v1/vacancies/region/%region_code%

export const getVacancies = async (params = {}) => {
    const q = querystring.stringify({limit:10, ...params});
    const url = `${config.api_url}/vacancies?${q}`;
    console.log(url);

    const { body } = await request(url);
    const { results } = await body.json();

    return results;
};

export const getVacanciesByRegion = async (region_code, params = {}) => {
    const q = querystring.stringify({limit:10, ...params});
    const url = `${config.api_url}/vacancies/region/${region_code}?${q}`;
    console.log(url);

    const { body } = await request(url);
    const { results } = await body.json();

    return results;
};
