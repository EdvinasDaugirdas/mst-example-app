import { types, flow } from 'mobx-state-tree'
import axios from 'axios'

import initialState from './initialState'
import { createWeatherUrl } from 'helpers/api'

const Weather = types
    .model({
        city: types.string,
        description: types.string,
        unit: types.enumeration('unit', ['celsius', 'kelvin']),
        degreesCelsius: types.number,
        isFetching: types.boolean,
        date: types.optional(types.string, '')
    })
    .actions(self => {
        const setDescrAndDegrees = (
            description = initialState.description,
            degreesCelsius = initialState.degreesCelsius
        ) => {
            self.description = description
            self.degreesCelsius = degreesCelsius
        }

        return {
            changeCityName(newName) {
                self.city = newName
            },
            fetchWeatherDetails: flow(function* (cityName = self.city) {
                if (cityName.trim() === '') {
                    setDescrAndDegrees()
                    return
                }
    
                try {
                    const rootUrl = createWeatherUrl('weather')
                    const url = `${rootUrl}&q=${cityName}&units=metric`
                    const { data: { main, weather } } = yield axios.get(url)
                    self.description = weather[0].description
                    self.degreesCelsius = main.temp
                } catch (e) {
                    const { message } = e.response.data
                    setDescrAndDegrees(message)
                }
            }),
        }
    })
    .views(self => ({
        get degrees() {
            if (self.unit === 'celsius') {
                return `${self.degreesCelsius} °C`
            } else if (self.unit === 'kelvin') {
                return `${self.degreesCelsius + 273.5} K`
            }
        }
    }))

export default Weather