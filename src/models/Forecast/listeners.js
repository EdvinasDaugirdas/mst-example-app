import { onAction } from 'mobx-state-tree'

export default function listener(store) {
    const { weather, forecast } = store

    onAction(weather, ({ name }) => {
        if (name === 'fetchWeatherDetails') {
            forecast.fetchForecast(weather.city)
        }
    })
}