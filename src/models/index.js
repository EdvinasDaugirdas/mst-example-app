import Weather, { 
    initialState as initialWeatherState 
} from './Weather'

import Forecast, { 
    initialState as initialForecastState, 
    listeners as forecastListeners
} from './Forecast'

const store = {
    weather: Weather.create(initialWeatherState),
    forecast: Forecast.create(initialForecastState)
}

forecastListeners(store)

export default () => store