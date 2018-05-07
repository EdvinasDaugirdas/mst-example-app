import { types } from 'mobx-state-tree'

const Weather = types
    .model({
        city: types.string,
        description: types.string,
        unit: types.enumeration('unit', ['kelvin', 'celsius']),
        degrees: types.number
    })
    .actions(self => ({
        changeCityName: newName => {
            self.city = newName
        },
        fetchWeatherDetails: (cityName = self.city) => {
            console.log('fetch weather details', cityName)
        }
    }))

export default Weather