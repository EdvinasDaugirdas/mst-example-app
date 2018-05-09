import Weather, { initialState as initialWeatherState } from './Weather'

const createStore = () => ({
    weather: Weather.create(initialWeatherState),
})

export default createStore