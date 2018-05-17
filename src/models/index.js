import Weather, { initialState as initialWeatherState } from './Weather'
import Forecast, { initialState as initialForecastState } from './Forecast'

const createStore = () => ({
    weather: Weather.create(initialWeatherState),
    forecast: Forecast.create(initialForecastState)
})

export default createStore