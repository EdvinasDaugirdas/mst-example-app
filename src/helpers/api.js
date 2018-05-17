import { WEATHER_URL } from 'constants/api'

const { REACT_APP_WEATHER_API_KEY } = process.env

export const createWeatherUrl = type => (
    `${WEATHER_URL}/${type}?appid=${REACT_APP_WEATHER_API_KEY}`
)