import * as dotenv from "dotenv";
dotenv.config();

export const getConfig = () => ({
    tg_token: process.env.TG_TOKEN,
    api_url: process.env.API_URL,
});
