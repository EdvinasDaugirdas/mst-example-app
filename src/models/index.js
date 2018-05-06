import Weather from './Weather'

const createStore = () => ({
    weather: Weather.create({
        city: '',
        description: '',
        unit: 'celsius',
        degrees: 0
    }),
})

export default createStore