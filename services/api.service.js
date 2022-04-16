import axios from "axios";
import https from "https";
import { getKeyValue } from "./storage.service.js";


const host = 'https://api.openweathermap.org/data/2.5/weather';

//Use https
const getWeather = async (city) => {
    const url = new URL(host);
    const token = await getKeyValue('token');
    if (!token) {
        throw new Error("Не задан токен");
    }
    url.searchParams.append('q', city)
    url.searchParams.append('appid', token)
    url.searchParams.append('lang', 'ru')
    url.searchParams.append('units', 'metric');
    return new Promise((res, rej) => {
        https.get(url, (response) => {
            let result = '';
            response.on('data', (chunk) => {
                result += chunk;
            })
            response.on('end', () => {
                res(JSON.parse(result));
            })
        });
    })
}

//Use Axios
const getAxiosWeather = async (city) => {
    const token = await getKeyValue('token');
    const {data} = await axios.get(host, {
        params: {
            q: city,
            appid: token,
            lang: 'ru',
            units: 'metric'
        }
    })
    return data;
}



export { getWeather, getAxiosWeather };