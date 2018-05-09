import { types, flow } from 'mobx-state-tree'
import axios from 'axios'

import initialState from './initialState'
import { WEATHER_URL } from 'constants/api'

const Weather = types
    .model({
        city: types.string,
        description: types.string,
        unit: types.enumeration('unit', ['celsius', 'kelvin']),
        degreesCelsius: types.number,
        isFetching: types.boolean,
    })
    .actions(self => {
        const setDefaultDegreesDescr = () => {
            self.description = initialState.description
            self.degreesCelsius = initialState.degreesCelsius
        }

        return {
            changeCityName(newName) {
                self.city = newName
            },
            fetchWeatherDetails: flow(function* (cityName = self.city) {
                if (cityName.trim() === '') {
                    setDefaultDegreesDescr()
                    return
                }
    
                try {
                    const url = `${WEATHER_URL}&q=${cityName}&units=metric`
                    const { data: { main, weather } } = yield axios.get(url)
                    self.description = weather[0].description
                    self.degreesCelsius = main.temp
                } catch (e) {
                    setDefaultDegreesDescr()
                }
            }),
        }
    })
    .views(self => ({
        get degrees() {
            if (self.unit === 'celsius') {
                return self.degreesCelsius
            } else if (self.unit === 'kelvin') {
                return self.degreesCelsius + 273.5
            }
        }
    }))

export default Weather