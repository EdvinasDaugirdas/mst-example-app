import { types, flow, applySnapshot } from 'mobx-state-tree'
import axios from 'axios'

import Weather from 'models/Weather'
import { createWeatherUrl } from 'helpers/api'

const Forecast = types
    .model({
        weathers: types.optional(types.array(Weather), []),
        isFetching: types.boolean
    })
    .actions(self => {
        const formatWeatherFromApi = ({ cityName, item }) => ({
            city: cityName,
            description: item.weather[0].description,
            unit: 'celsius',
            degreesCelsius: item.main.temp,
            date: item.dt_txt,
            isFetching: false
        })

        return {
            fetchForecast: flow(function* (cityName) {
                self.isFetching = true

                try {
                    const rootUrl = createWeatherUrl('forecast')
                    const url = `${rootUrl}&q=${cityName}&units=metric`
                    const { data: { list } } = yield axios.get(url)

                    applySnapshot(
                        self.weathers,
                        list.map(item => (
                            formatWeatherFromApi({ cityName, item })
                        ))
                    )
                } catch (e) {
                    console.warn(e)
                }

                self.isFetching = false
            })
        }
        
    })

export default Forecast
