import { fakeService } from 'helpers/tests'
import { weatherItem } from './data'
import Weather from '../model'
import initialState from '../initialState'

describe('Weather model', () => {
    let weather = null

    beforeEach(() => {
        weather = Weather.create(initialState)
    })

    it('should create with initialState', () => {
        expect(weather.city).toBe('')
        expect(weather.description).toBe('')
        expect(weather.unit).toBe('celsius')
        expect(weather.degreesCelsius).toBe(0)
        expect(weather.isFetching).toBe(false)
    })

    it('should change city name', () => {
        weather.changeCityName('Vilnius')
        expect(weather.city).toBe('Vilnius')
    })

    it('should return degrees celsius', () => {
        expect(weather.degrees).toBe('0 °C')
    })

    it('should fetch weather details', async() => {
        const promiseService = fakeService(weatherItem)
        await weather.fetchWeatherDetails('Vilnius', promiseService)
        expect(weather.description).toBe('broken clouds')
        expect(weather.degreesCelsius).toBe(18)
    })

    it('should not fetch weather details with no city', async() => {
        const promiseService = fakeService(weatherItem)
        await weather.fetchWeatherDetails(undefined, promiseService)
        expect(weather.degreesCelsius).toBe(0)
        expect(weather.description).toBe('')
    })
})